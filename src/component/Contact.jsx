const Contact = () => {
  return (
    <>
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-4">
            Get In Touch
          </h2>
          <p className="text-center mb-16 text-lg">
            Let’s create something timeless.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-1">
                  Enquiry Type
                </label>
                <select className="w-full bg-zinc-100 border border-zinc-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-zinc-700">
                  <option>Wedding Photography</option>
                  <option>Pre-Wedding Shoot</option>
                  <option>Portrait Shoot</option>
                  <option>Event Shoot</option>
                  <option>Product Shoot</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-1">
                  Your Name
                </label>
                <input
                  className="w-full bg-zinc-100 border border-zinc-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-zinc-700"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-zinc-100 border border-zinc-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-zinc-700"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-zinc-100 border border-zinc-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-zinc-700"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-800 text-white py-3 rounded-lg font-medium hover:bg-zinc-700 transition"
              >
                Submit Enquiry
              </button>
            </form>

            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.06448793643!2d77.49829417597931!3d27.217125046941366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a30917caa4d1%3A0x474d88b9a287b4f7!2sMathura%20Gate%2C%20Tara%20Mahendra%20Colony%2C%20Bharatpur%2C%20Rajasthan%20321001!5e0!3m2!1sen!2sin!4v1765375053215!5m2!1sen!2sin"
                  width="100%"
                  height="500px"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
