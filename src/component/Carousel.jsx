import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

import { useEffect, useState } from "react";

const slides = [
  {
    img: img1,
    title: "Image1",
    subtitle: "Discover the beauty of nature in every frame.",
  },
  {
    img: img2,
    title: "Image2",
    subtitle: "Discover the beauty of nature in every frame.",
  },
  {
    img: img3,
    title: "Image3",
    subtitle: "Discover the beauty of nature in every frame.",
  },
  {
    img: img4,
    title: "Image4",
    subtitle: "Discover the beauty of nature in every frame.",
  },
    {
    img: img5,
    title: "Image5",
    subtitle: "Discover the beauty of nature in every frame.",
  },
];

const Carousel = ({ duration = 5000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      duration
    );
    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div className="relative w-full h-[850px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.img} className="w-full h-full object-cover" alt="" />

          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-3">{slide.title}</h1>
            <p className="text-lg max-w-xl mb-5">{slide.subtitle}</p>
            {/* <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 transition">
              Book Now
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
