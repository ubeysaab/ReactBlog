import axios from "axios";
import { useState,useEffect } from "react";




function useAxiosFetch(baseUrl) {
  
  const [data,setData] = useState([]);
  const [fetchError,setFetchError]  = useState(null)
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    // * in the definition we used URL but when we call it is actually receive baseUrl
    let isMounted = true;
    const source = axios.CancelToken.source();
    async function getDataFun(url){
      try {
        let response =  await axios.get(url,{cancelToken:source.token});
        if(isMounted){
          setData(response.data)
          setIsLoading(true)
        }
      } catch (error) {
        if(isMounted){
          setFetchError(error.message)
        }
      }finally {
        isMounted && setTimeout(() => {
          setIsLoading(false)
        }, 2000);
      }
    }

    getDataFun(baseUrl)
// cleanUp will run when ever a dependency changes for the use effect
    return ()=>{
      console.log("clean up function ");
      isMounted= false;
      // cancel the request this 
      source.cancel();
    }
  },[baseUrl])


  return {data,fetchError,isLoading}
}

export default useAxiosFetch