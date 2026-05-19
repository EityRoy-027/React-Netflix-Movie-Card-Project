import series from "./api/Series.json";

function App() {

  let age = 16;

  const isAge = () => {
    if (age >= 18)
      return "Review";

    return "Not Available";
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 p-10">

        {series.map((item) => (

          <div key={item.id} className="w-[400px] border p-4 rounded-xl shadow-lg">

            <div className="w-full h-[300px] flex justify-center">
              <img
                className="w-[250px] h-[280px] rounded-md"
                src={item.img_url}
                alt={item.name}
              />
            </div>

            <div className="w-full text-xl">
              <span className="font-bold">Name:</span> {item.name}
            </div>

            <div className="w-full text-xl">
              <span className="font-bold">Rating:</span> {item.rating}
            </div>

            <div className="w-full text-xl">
              <span className="font-bold">Description:</span>
              {item.description}
            </div>

            <div className="w-full text-xl">
              <span className="font-bold">Genre:</span>
              {item.genre.join(", ")}
            </div>

            <div className="flex gap-4 mt-4">

              <button className="px-2 py-2 border-2 bg-blue-100 text-sm text-blue-600 border-blue-600 rounded-4xl">
                {age >= 18 ? "Watch Now" : "Not Available"}
              </button>

              <button className="px-6 py-2 border-2 bg-orange-100 text-sm text-orange-600 border-orange-600 rounded-3xl">
                {isAge()}
              </button>

            </div>

          </div>

        ))}

      </div>
    </>
  );
}

export default App;