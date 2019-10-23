import {elements} from "./base"

export const getInput=()=>elements.searchInput.value;

export const clearInput=()=>elements.searchInput.value="";

export const clearResults=()=>elements.searchResultList.innerHTML="";

export const renderResults=(recipes)=>{
    console.log("RECIPES", recipes)
    recipes.forEach(el=>renderRecipe(el.recipe))
}

export const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`;
    }
    return title;
}

const renderRecipe=recipe=>{
    console.log(recipe.label)
    const markup=`
    <li>
    <a class="results__link" href="#${recipe.calories}">
        <figure class="results__fig">
            <img src="${recipe.image}" alt="Title">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(recipe.label)}</h4>
            <p class="results__author">${recipe.source}</p>
        </div>
    </a>
    </li>
    `;
    elements.searchResultList.insertAdjacentHTML("beforeend",markup)

}