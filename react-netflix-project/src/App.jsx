
import series from "./api/Series.json"

function App() {
 
  let age=19;
 



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
     

   <div className="h-screen  grid grid-cols-3 place-items-center gap-5 p-8">

   
   


   {
    series.map((element)=>{
   
   return(


 <li key={element.id}>

<div className="w-full justify-center font-bold text-6xl text-red-600">Netflix</div>

 <div className="w-full  flex flex-wrap justify-center items-center gap-3 p-8">


   <div className="w-full text-xl">
    <span className="font-bold">Name:{element.name}</span>
    </div>  

   <div className="w-full text-xl">
    <span className="font-bold">Rating </span>:{element.rating}
    </div>

   <div className="w-full text-xl">
    <span className="font-bold">Summary:</span>{element.description}
    </div>

      <div className="w-full text-xl">
    <span className="font-bold">Genre:</span>{element.genre}
    </div>

    <div className="w-full text-xl">
    <span className="font-bold">Cast:</span>{element.cast}
    </div>
  
   
   {/* <div className="w-full text-xl">
    <span className="font-bold ">Year:</span>2009
    </div>

   <div className="w-full text-xl">
    <span className="font-bold ">Duration:1h 40min</span>
    </div> */}
  

  <div className="w-full h-[450px]">
    <img className="w-[400px] h-[400px] rounded-md" src={ element.img_url} alt={element.name} />
   </div>

   
  <div className="w-full flex gap-4">

{/* //1st way */}


  <a href={series[0].watch_url} target="_blank" >

  <button className="w-[400px] py-6 border-2 bg-blue-200  text-blue-600 border-blue-600 rounded-4xl"> Watch Now</button>

  </a>

  {/* <button className="px-2 py-2 border-2 bg-blue-100 text-sm text-blue-600 border-blue-600 rounded-4xl">{age>18? "Watch Now" : "Not Available"}</button>
  <button className="px-6 py-2 border-2 bg-orange-100 text-sm text-orange-600 border-orange-600 rounded-3xl">{isAge()}</button> */}

  </div>

   </div>


 </li>


   )


    })
   }


   </div>


    </>
  )
}

export default App
