import { DOMSelectors } from "./DOM";
import { attributes, createDaily } from "./refactor";
import { mealTypes } from "./mealTypes";

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
    attributes();

    console.log(attArr);
    console.log(attArr[0], attArr[1], attArr[2]);

    createDaily();
  } catch (error) {
    console.log(error);
    alert("uh oh something is wrong");
  }
};
query();
