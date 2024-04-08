import axios from "axios";
import { useState,useEffect } from "react";


import React from 'react'

function useAxiosFetch(baseUrl) {
  
  const [data,setData] = useState([]);
  const [fetchError,setFetchError]  = useState(null)
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    // * in the definition we used URL but when we call it is actually receive baseUrl
    async function get(url){
      try {
        let response =  await axios.get(url)
        setData(response.data)
        setIsLoading(true)

        
      } catch (error) {
        setFetchError(error.message)
      }finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000);
      }
    }

    get(baseUrl)
  },[baseUrl])


  return {data,fetchError,isLoading}
}

export default useAxiosFetch