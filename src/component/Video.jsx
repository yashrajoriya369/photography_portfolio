const Video = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">Featured Videos</h2>
        <p className="text-zinc-600 mb-12">
          Here are some of my photography & behind-the-scenes videos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Video 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64 md:h-80"
              src="https://www.youtube.com/embed/ztQoCJlC4UI?si=sEZI1Z2aco6qARbf"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64 md:h-80"
              src="https://www.youtube.com/embed/as0w25xM8RI?si=_sB2N2-uxeErJ2G-"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {/* Video 3 */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64 md:h-80"
              src="https://www.youtube.com/embed/oZTERuu5Iek?si=ss0JkeB862LMA3gL"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
