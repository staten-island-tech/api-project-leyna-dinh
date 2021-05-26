import { DOMSelectors } from "./DOM";
import { createResults } from "./refactor";

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

          createResults();
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
