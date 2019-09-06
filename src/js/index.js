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

        //spinner,reset UI



        //search for recipes
        await state.search.getData();

        //render UI
        console.log(state.search.result);
    }

}
elements.searchForm.addEventListener("submit", e=>{
    e.preventDefault();
    controlSearch();
})

