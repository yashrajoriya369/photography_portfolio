import img from "../assets/img.PNG"

const About = () => {
  return (
    <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          I am a passionate photographer who loves capturing timeless moments
          through the lens. Whether it's weddings, portraits, or creative
          storytelling, I focus on turning emotions into beautiful visuals.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          With years of experience and a deep understanding of lighting,
          composition, and editing, I aim to deliver photos that truly reflect
          the story behind every moment.
        </p>

        <div className="grid grid-cols-3 gap-6 text-center my-8">
          <div>
            <h3 className="text-3xl font-semibold">150+</h3>
            <p className="text-gray-500 text-sm">Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">120+</h3>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">5+</h3>
            <p className="text-gray-500 text-sm">Years Exp.</p>
          </div>
        </div>

        <button className="w-[650px] px-8 py-3 bg-black text-white rounded-md hover:scale-95 transition-all duration-300">
          Book a Shoot
        </button>
      </div>

      <div className="w-1/2 lg:w-1/2 h-[400px] flex justify-center">
        <img
          src={img}
          alt="Photographer"
          className="rounded-xl shadow-xl w-full max-w-md object-cover"
        />
      </div>
    </div>
  );
};

export default About;
