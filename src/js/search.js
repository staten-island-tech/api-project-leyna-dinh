import { DOMSelectors } from "./DOM";

const listen = function () {
  DOMSelectors.search.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchInput.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?number=1&apiKey=${key}`
        );
        const data = await response.json();
        console.log(data);
        // hhhh
        const attArr = [];
        function attributes() {
          data.recipes[0].diets.forEach((diet) => {
            attArr.push(diet);
          });
          data.recipes[0].cuisines.forEach((cuisine) => {
            attArr.push(cuisine);
          });
          data.recipes[0].dishTypes.forEach((dishType) => {
            attArr.push(dishType);
          });
          data.recipes[0].occasions.forEach((occasion) => {
            attArr.push(occasion);
          });
          return attArr;
        }
        attributes();
        console.log(attArr);
        console.log(attArr[0], attArr[1], attArr[2]);
        /* DOMSelectors.daily.insertAdjacentHTML(
            "afterbegin",
            `<p class="intro">${data.recipes[0].title}</p> <p class="intro">Ready In: ${data.recipes[0].readyInMinutes} minutes</p> <p class="intro">Vegan: ${data.recipes[0].vegan}</p> <p class="intro">Vegetarian: ${data.recipes[0].vegetarian}</p> <p class="intro"># of Ingredients: ${data.recipes[0].extendedIngredients.length}</p>`
          ); */
      } catch (error) {
        console.log(error);
        alert("fuck. i probably hit my quota lmao. plz stop refreshing");
      }
    };
  });
};