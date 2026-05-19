
import series from "./api/Series.json"

function App() {
 
  let age=19;
  const name="The Hanover";
  const rating="7.7/9";
  const desription="A wild bachelor trip in Las Vegas turns into total chaos.";


  //2nd way
  // let Info="Info";
  // if(age>=18) Info="Review";


  const isAge =()=>{

   if(age>=18)
    return "Review";
   

   return "Not Available";

  };
  

  return (
    <>
     

   <div className="h-screen flex justify-start items-center">

   <div className="w-full h-[600px] flex flex-col justify-center items-center gap-3">


   <div className="w-full text-xl">
    <span className="font-bold">Name:{name}</span>The hangover
    </div>  

   <div className="w-full text-xl">
    <span className="font-bold">Rating </span>:{rating}
    </div>

   <div className="w-full text-xl">
    <span className="font-bold">Description:</span>{desription}
    </div>
  
   
   {/* <div className="w-full text-xl">
    <span className="font-bold ">Year:</span>2009
    </div>

   <div className="w-full text-xl">
    <span className="font-bold ">Duration:1h 40min</span>
    </div> */}
  

  <div className="w-full h-[450px]">
    <img className="w-[400px] h-[400px] rounded-md" src={ series[0].img_jpg} alt="" />
   </div>

   
  <div className="w-full flex gap-4">

//1st way
  <button className="px-2 py-2 border-2 bg-blue-100 text-sm text-blue-600 border-blue-600 rounded-4xl">{age>18? "Watch Now" : "Not Available"}</button>
  <button className="px-6 py-2 border-2 bg-orange-100 text-sm text-orange-600 border-orange-600 rounded-3xl">{isAge()}</button>

  </div>

   </div>
   </div>


    </>
  )
}

export default App
