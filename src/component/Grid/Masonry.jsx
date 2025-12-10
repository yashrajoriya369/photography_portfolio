import img1 from "/photos/img1.jpg";
import img2 from "/photos/img2.jpg";
import img3 from "/photos/img3.jpg";
import img4 from "/photos/img4.jpg";
import img5 from "/photos/img5.jpg";
import img6 from "/photos/img6.jpg";
import img7 from "/photos/img7.jpg";
import img8 from "/photos/img8.jpg";
import img9 from "/photos/img9.jpg";
import img10 from "/photos/img10.jpg";
import img11 from "/photos/img11.jpg";
import img12 from "/photos/img12.jpg";
import img13 from "/photos/img13.jpg";
import img14 from "/photos/img14.jpg";
import img15 from "/photos/img15.jpg";

const MasonryGallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
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
