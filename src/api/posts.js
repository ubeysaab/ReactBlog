import axios from "axios"



//here now we need to set the base url that we'll use for axios throughout the project 



export default axios.create({
  // that is all we need on this file and axios will continue using it 
  baseURL: "http://localhost:3000"
})
