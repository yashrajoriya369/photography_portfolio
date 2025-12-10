const MyWorkGrid = () => {
  const images = [
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1500522144261-ea64433bbe27",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden rounded-lg shadow-md">
          <img
            src={img}
            alt=""
            className="w-full h-72 object-cover hover:scale-110 transition-all duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default MyWorkGrid;
