import Search from "./models/Search"
import * as searchView from "./views/searchView"
import {elements,renderLoader,clearLoader} from "./views/base"

//GLOBAL APP STATE

const state={

}

const controlSearch=async ()=>{
    //get query from view
    const query=searchView.getInput();

    if(query){
        //new search object and add to state
        state.search=new Search(query);
        //spinner,reset UI 
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        //search for recipes
        await state.search.getData();
        
        //render UIs
        clearLoader();
        searchView.renderResults(state.search.result)
    }

}
elements.searchForm.addEventListener("submit", e=>{
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener("click", e=>{
    const btn=e.target.closest(".btn-inline")
    if(btn){
        const goToPage=parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result,goToPage)

    }
    
})
