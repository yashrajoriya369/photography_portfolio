const MasonryGallery = () => {
  const images = [
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386755/img1_tvie8s.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386758/img14_bnq0rz.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765387355/img3_iyi4tz.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765387629/img4_g8mkav.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386755/img5_ruwe1x.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765387879/img6_wfipw4.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386769/img7_f9n30e.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765388151/img8_a6lelj.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765388153/img9_kensi1.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765388380/img10_igsykp.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765388379/img11_velesg.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386755/img12_lmemrp.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386773/img13_usfyo1.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765386758/img14_bnq0rz.jpg",
    "https://res.cloudinary.com/djzgfe8mn/image/upload/v1765388432/img15_jinj05.jpg",
  ];

  return (
    <div className="px-10 py-16">
      <h2 className="text-center text-4xl font-medium mt-24 mb-8">My Work</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-full rounded-lg shadow-md hover:opacity-90 transition-all"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default MasonryGallery;
