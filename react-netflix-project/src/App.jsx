import movie from "./assets/movie.jpg"

function App() {


  return (
    <>
     

   <div className="h-screen flex justify-start items-center">

   <div className="w-full flex flex-col justify-center items-center gap-8">


   <div><span>Name</span>:The hangover</div>  

   <div><span>Rating </span>:7.7/10</div>

   <div><span>Description:</span>A wild bachelor trip in Las Vegas turns into total chaos.</div>

   
   <div className="w-full text-xl">
    <span className="font-bold ">Year:</span>2009
    </div>

   <div className="w-full text-xl">
    <span className="font-bold ">Duration:1h 40min</span>:2009
    </div>
  

  <div className="w-full h-[450px]">
    <img className="w-[400px] h-[400px]" src={ movie} alt="" />
   </div>

   
  <div className="w-full flex gap-4">


  <button>Play</button>
  <button>Info</button>

  </div>

   </div>
   </div>


    </>
  )
}

export default App
