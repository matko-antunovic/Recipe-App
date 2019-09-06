import axios from "axios";

export default class Search{
    constructor(query){
        this.query=query;
    }
    async getData(){
    const proxy="https://cors-anywhere.herokuapp.com/";
    const key="4ff6aaa721ebf30f34b8ce8a16051103";
    try{
        const res=await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.result=res.data.recipes;
    }catch(err){
        alert(err)
    }
} 
}

