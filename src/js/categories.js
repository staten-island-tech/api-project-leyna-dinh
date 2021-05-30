import { DOMSelectors } from "./DOM";
// import { createResults } from "./refactor";

const key = "9e4e20197f7246dc982ddf51354c09fd";
const listen = function () {
  const categoryArr = Array.from(DOMSelectors.category);
  categoryArr.forEach((category) => {
    category.addEventListener("click", function () {
      console.log(category.value);
      const searchQuery = async function () {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?type=${category.value}&number=10&apiKey=${key}`
          );
          const data = await response.json();
          console.log(data);
          DOMSelectors.body.innerHTML = ``;
          DOMSelectors.hidden.classList.remove("hide");
          data.results.forEach((result) => {
            const resultsIndex = data.results.indexOf(result);
            DOMSelectors.results.insertAdjacentHTML(
              "afterbegin",
              `<div class="result">
                  <p class="recipe-title">${data.results[resultsIndex].title}</p>
                  <img class="recipe-img" src="${data.results[resultsIndex].image}" alt="${data.results[resultsIndex].title}"
                  </div>`
            );
          });
        } catch (error) {
          console.log(error);
          alert("oof something is wrong");
        }
      };
      searchQuery();
    });
  });
};
listen();
