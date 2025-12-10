const WhyUs = () => {
  const cards = [
    {
      img: "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386758/img14_bnq0rz.jpg",
      title: "Cinematic Wedding Photography",
      desc: "Capturing your big day with rich colors, emotions and perfect timing.",
    },
    {
      img: "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765388151/img8_a6lelj.jpg",
      title: "Traditional & Candid Moments",
      desc: "Beautifully framed traditional rituals mixed with candid expressions.",
    },
    {
      img: "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386755/img5_ruwe1x.jpg",
      title: "Couple Portrait Perfection",
      desc: "Creative couple portraits that look cinematic and timeless.",
    },
    {
      img: "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765387629/img4_g8mkav.jpg",
      title: "Premium Wedding Editing",
      desc: "High-end color grading and retouching for a magazine-style finish.",
    },
  ];

  return (
    <div className="mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-3">Why Choose Me?</h2>
      <p className="text-center text-zinc-600 mb-12">
        Premium photography with professional editing and creative storytelling.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
