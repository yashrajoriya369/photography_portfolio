import React from "react";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-[url('https://images.pexels.com/photos/3822977/pexels-photo-3822977.jpeg?auto=compress&cs=tinysrgb&w=1600&dpr=2')] bg-cover bg-center bg-fixed py-20 px-4">
        <div className="max-w-8xl mx-auto backdrop-blur-xl text-white p-5">
          <h2 className="text-5xl font-extrabold text-center mb-4 text-zinc-100">
            Get In Touch
          </h2>
          <p className="text-center text-zinc-100 mb-16 text-lg">
            Let’s create something timeless.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 text-white">
            {/* Contact Form */}
            <form className="bg-white/10 border border-white/10 p-10 rounded-2xl shadow-lg space-y-6">
              <div>
                <label className="block mb-1 text-sm text-zinc-200">
                  Enquiry Type
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/10 text-white outline-none focus:ring-2 focus:ring-white">
                  <option className="text-black">Wedding Photography</option>
                  <option className="text-black">Pre-Wedding Shoot</option>
                  <option className="text-black">Portrait Shoot</option>
                  <option className="text-black">Event Shoot</option>
                  <option className="text-black">Product Shoot</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-sm text-zinc-200">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-zinc-200">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-zinc-200">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 text-white outline-none focus:ring-2 focus:ring-white"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button className="w-full bg-white text-black py-3 rounded-xl text-lg font-semibold hover:bg-zinc-200 transition">
                Send Message
              </button>
            </form>

            {/* Right side */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-zinc-300">yashwork@gmail.com</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-zinc-300">+91 98765 43210</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-zinc-300">India</p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.06448793643!2d77.49829417597931!3d27.217125046941366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a30917caa4d1%3A0x474d88b9a287b4f7!2sMathura%20Gate%2C%20Tara%20Mahendra%20Colony%2C%20Bharatpur%2C%20Rajasthan%20321001!5e0!3m2!1sen!2sin!4v1765375053215!5m2!1sen!2sin"
                  width="100%"
                  height="450"
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
