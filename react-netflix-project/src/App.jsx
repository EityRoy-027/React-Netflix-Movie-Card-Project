import movie from "./assets/movie.jpg"

function App() {


  return (
    <>
     

   <div>


   <div><span>Name</span>:The hangover</div>  

   <div><span>Rating </span>:7.7/10</div>

   <div><span>Description:</span>A wild bachelor trip in Las Vegas turns into total chaos.</div>

   <div>
    <img src={ movie} alt="" />
   </div>

 
   <div><span>Year:</span>2009</div>
   <div><span>Duration:1h 40min</span>:2009</div>
  
   
  <div>


  <button>Play</button>
  <button>Info</button>

  </div>

   </div>


    </>
  )
}

export default App
