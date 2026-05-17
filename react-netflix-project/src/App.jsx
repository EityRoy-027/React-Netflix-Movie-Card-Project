import movie from "./assets/movie.jpg"

function App() {


  return (
    <>
     

   <div className="h-screen flex justify-start items-center">

   <div className="w-full h-[600px] flex flex-col justify-center items-center gap-3">


   <div className="w-full text-xl">
    <span className="font-bold">Name:</span>The hangover
    </div>  

   <div className="w-full text-xl">
    <span className="font-bold">Rating </span>:7.7/10
    </div>

   <div className="w-full text-xl">
    <span className="font-bold">Description:</span>A wild bachelor trip in Las Vegas turns into total chaos.
    </div>
  
   
   <div className="w-full text-xl">
    <span className="font-bold ">Year:</span>2009
    </div>

   <div className="w-full text-xl">
    <span className="font-bold ">Duration:1h 40min</span>
    </div>
  

  <div className="w-full h-[450px]">
    <img className="w-[400px] h-[400px] rounded-md" src={ movie} alt="" />
   </div>

   
  <div className="w-full flex gap-4">


  <button className="px-2 py-2 border-2 bg-blue-100 text-sm text-blue-600 border-blue-600 rounded-4xl">Watch Now</button>
  <button className="px-6 py-2 border-2 bg-orange-100 text-sm text-orange-600 border-orange-600 rounded-3xl">Info</button>

  </div>

   </div>
   </div>


    </>
  )
}

export default App
