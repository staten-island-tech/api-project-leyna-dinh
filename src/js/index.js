import { DOMSelectors } from "./DOM";

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
    // ill prob walk through like ten different approaches to a problem only to have it caused by mispelling "recipes". pain
    DOMSelectors.tempBtn.insertAdjacentHTML(
      "afterend",
      `<p class="intro">${data.recipes[0].title}</p> <p class="intro">Ready In: ${data.recipes[0].readyInMinutes} minutes</p> <p class="intro">Vegan: ${data.recipes[0].vegan}</p> <p class="intro">Vegetarian: ${data.recipes[0].vegetarian}</p> <p class="intro"># of Ingredients: ${data.recipes[0].extendedIngredients.length}</p>`
    );
  } catch (error) {
    console.log(error);
    alert("fuck. i probably hit my quota lmao. plz stop refreshing");
  }
};
query();
