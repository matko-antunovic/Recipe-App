import Search from "./models/Search"
import * as searchView from "./views/searchView"
import {elements} from "./views/base"

//GLOBAL APP STATE

const state={

}

const controlSearch=async ()=>{
    //get query from view
    const query=searchView.getInput();

    if(query){
        //new search object and add to state
        state.search=new Search(query);
        console.log(state.search)
        //spinner,reset UI 
        searchView.clearInput();
        searchView.clearResults();
        //search for recipes
        await state.search.getData();

        //render UI
        searchView.renderResults(state.search.result)
    }

}
elements.searchForm.addEventListener("submit", e=>{
    e.preventDefault();
    controlSearch();
})

