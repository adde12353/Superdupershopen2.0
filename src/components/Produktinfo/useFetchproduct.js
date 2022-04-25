import { useEffect, useState } from "react";


const useFetch = (url) =>{
  const [error, setError] = useState(null)
  const [Data, setData] = useState(null)
  const [isPending,  setIspending] = useState(true)
  

useEffect(() =>{

      fetch(url)
    .then(res => {
      if(!res.ok){
        throw Error ("Inläsningsproblem av data")
      }
     return res.json()
    })
    .then(data => {
      setData(data)
      setIspending(false)
      
    
    }).catch(err =>{
      setIspending(false)
      setError(err.message)}
    )

    },[url]);
    return {error, isPending, Data}
  }
 

  export default useFetch;