import { DOMSelectors } from "./DOM";
// import { attributes, createDaily } from "./refactor";

const key = "9e4e20197f7246dc982ddf51354c09fd";

// literally just copying the videos rn
const query = async function () {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=1&apiKey=${key}`
    );
    const data = await response.json();
    console.log(data);
    // give title and a few details
    // i really gotta get some classes goin bc this is a mess of class="intro"

    // theres probably a better way to assign attributes. idk what it is tho lmao
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
    DOMSelectors.daily.insertAdjacentHTML(
      "afterend",
      `
        <p class="daily-name">${data.recipes[0].title}</p>
        <img class="recipe-img" src="${data.recipes[0].image}" alt="${data.recipes[0].title}">
        <div class="attributes-container">
            <div class="attribute">${attArr[0]}</div>
            <div class="attribute">${attArr[1]}</div>
            <div class="attribute">${attArr[2]}</div>
        </div>
        <a href="${data.recipes[0].sourceUrl}" class="daily-link">Take Me There</a>`
    );
  } catch (error) {
    console.log(error);
    alert("uh oh something is wrong");
  }
};
query();
