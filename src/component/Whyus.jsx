import img2 from "/photos/img2.jpg";
import img4 from "/photos/img4.jpg";
import img5 from "/photos/img5.jpg";
import img8 from "/photos/img8.jpg";

const WhyUs = () => {
  const cards = [
    {
      img: img2,
      title: "Cinematic Wedding Photography",
      desc: "Capturing your big day with rich colors, emotions and perfect timing.",
    },
    {
      img: img8,
      title: "Traditional & Candid Moments",
      desc: "Beautifully framed traditional rituals mixed with candid expressions.",
    },
    {
      img: img5,
      title: "Couple Portrait Perfection",
      desc: "Creative couple portraits that look cinematic and timeless.",
    },
    {
      img: img4,
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
