import axios from "axios"



//here now we need to set the base url that we'll use for axios throughout the project 



export default axios.create({
  // that is all we need on this file and axios will continue using it 

  // when we would take this project live we need to change this url to whatever url we've in our host 
  baseURL: "http://localhost:3000"
})
