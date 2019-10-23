import axios from "axios";

export default class Search{
    constructor(query){
        this.query=query;
    }
    async getData(){
        
        const key="6236f72eae1dbf656fc81540a2ec588b";
        const app_key="57f2d254";
    try{
        const proxy="https://cors-anywhere.herokuapp.com/";
        const res=await axios(`${proxy}https://api.edamam.com/search?q=${this.query}&app_id=${app_key}&app_key=${key}`);
        this.result=res.data.hits;
        console.log(this.result)
    }catch(err){
        alert(err)
    }
} 
}

