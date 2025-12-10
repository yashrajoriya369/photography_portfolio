import { useEffect, useState } from "react";

const slides = [
  {
    img: "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386755/img1_tvie8s.jpg",
    title: "Image1",
    subtitle: "Discover the beauty of nature in every frame.",
  },
  {
    img: "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386758/img14_bnq0rz.jpg",
    title: "Image2",
    subtitle: "Discover the beauty of nature in every frame.",
  },
  {
    img: "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765387355/img3_iyi4tz.jpg",
    title: "Image3",
    subtitle: "Discover the beauty of nature in every frame.",
  },
  {
    img: "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765387629/img4_g8mkav.jpg",
    title: "Image4",
    subtitle: "Discover the beauty of nature in every frame.",
  },
    {
    img: "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386755/img5_ruwe1x.jpg",
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
            <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300 transition">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
