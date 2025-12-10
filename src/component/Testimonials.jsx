const Testimonials = () => {
  const reviews = [
    {
      msg: "Amazing experience! The photos captured our emotions perfectly. Highly recommended!",
      img: "https://randomuser.me/api/portraits/women/72.jpg",
      name: "Aditi Sharma",
      tag: "Wedding Shoot",
    },
    {
      msg: "Highly professional and creative. The portraits turned out far better than expected.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rohit Verma",
      tag: "Portrait Shoot",
    },
    {
      msg: "Exceptional clarity and premium editing. Loved the results.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Sneha Rajput",
      tag: "Product Shoot",
    },
    {
      msg: "Beautiful photography and on-time delivery. He really understands the moment!",
      img: "https://randomuser.me/api/portraits/men/14.jpg",
      name: "Arjun Malhotra",
      tag: "Engagement Shoot",
    },
    {
      msg: "Captured our big day with perfection. Colors and emotions — everything was perfect.",
      img: "https://randomuser.me/api/portraits/women/43.jpg",
      name: "Priya Tiwari",
      tag: "Wedding Shoot",
    },
  ];
  return (
    <>
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3">
          What Clients Say
        </h2>
        <p className="text-center text-zinc-600 mb-12">
          Real experiences from people I’ve had the pleasure to work with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {reviews.map((item, index) => (
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-lg transition" key={index}>
                <p className="text-zinc-600 italic mb-4">
                    {item.msg}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <img
                    src="https://randomuser.me/api/portraits/women/72.jpg"
                    className="w-14 h-14 rounded-full object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-zinc-500">{item.tag}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
