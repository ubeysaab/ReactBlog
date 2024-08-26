import {useState,useEffect} from 'react'

function useWindowSize() {
  const [windowSize,setWindowSize] = useState({
    width:undefined,
    height:undefined
  })


  useEffect(()=>{
    function handleResize(){

    setWindowSize({
      width:window.innerWidth,
      height:window.innerHeight
    })
    
   
    
    }
  
    handleResize()

    window.addEventListener('resize', handleResize);

    // to prevent memory lake in our application we need to remove eventLister with clean function 
    
    // return cleanUpfunction 

  const cleanUp = ()=>{
    window.removeEventListener('resize',handleResize);
    console.log(" run if a useEffect Dep changes ")
  }

  return cleanUp;

  }
  ,[])

  return windowSize
}

export default useWindowSize