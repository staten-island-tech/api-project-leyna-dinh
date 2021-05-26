import { DOMSelectors } from "./DOM";
import { createResults } from "./refactor";

const listen = function () {
  DOMSelectors.search.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchInput.value;
    console.log(searchParams);
    if (searchParams.trim() === "") {
      return alert("empty! try actually searching something ");
    }
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=${searchParams}&number=10&apiKey=${key}`
        );
        const data = await response.json();
        console.log(data);

        createResults();
      } catch (error) {
        console.log(error);
        alert("welp. something is wrong. ");
        // okay so i hit my quota and i cant actually do anything on this page
        // this sucks
      }
    };
    searchQuery();
  });
};
listen();
