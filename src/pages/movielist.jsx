import { Link } from "react-router-dom"
import { Card } from "../component/card"
import { useEffect,useState } from "react";
import { useFetch } from "../hook/useFetch";

export const MovieList =({apiPath,title})=> {
  

const {data: movies} = useFetch(apiPath)


  useEffect(()=>{
    document.title = `${title} /Cinemate`
  
  })


    return (
     <main>
    <section className="max-w-7xl max-auto py-7">
          <div className="flex justify-start flex-wrap other:justify-evenly">
           
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }    


          </div>

    </section>
     
   
     </main>
    )
}