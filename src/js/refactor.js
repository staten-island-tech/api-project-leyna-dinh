

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

const createDaily = 
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



  const createResults = 
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

export {attributes, createDaily, createResults}