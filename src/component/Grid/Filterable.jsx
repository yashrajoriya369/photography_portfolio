import { useState } from "react";

const FilterGallery = () => {
  const data = {
    All: [
      { img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
      { img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
      { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    ],
    Wedding: [
      { img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
    ],
    Nature: [
      { img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    ],
    Portrait: [
      { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    ],
  };

  const [active, setActive] = useState("All");

  return (
    <section className="px-10 py-16 bg-white">
      <div className="flex justify-center gap-6 mb-10">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition ${
              active === key
                ? "bg-black text-white"
                : "bg-zinc-200 hover:bg-zinc-300"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data[active].map((item, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-md">
            <img
              src={item.img}
              className="w-full h-72 object-cover hover:scale-110 duration-500"
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilterGallery;
