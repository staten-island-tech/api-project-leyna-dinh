import { DOMSelectors } from "./DOM";
// import { createResults } from "./refactor";

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
        const createResults = (DOMSelectors.body.innerHTML = ``);
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
