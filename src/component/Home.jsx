import img1 from "../assets/img1.jpg";
import MyWorkGrid from "./Grid/Simple";
import FilterGallery from "./Grid/Filterable";
import MasonryGallery from "./Grid/Masonry";
import Carousel from "./Carousel";
import Video from "./Video";
import About from "./About";
import WhyUs from "./Whyus";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Contact from "./Contact";

const Main = () => {
  return (
    <>
      <section id="home">
        <Carousel duration={4000} />
      </section>

      <section id="portfolio" className="px-8">
        <MasonryGallery />
      </section>

      <section id="videos" className="px-18">
        <Video />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="why-us" className="py-20 px-20">
        <WhyUs />
      </section>

      <section id="testimonials" className="px-24">
        <Testimonials />
      </section>

      <section id="pricing" className="py-20 px-6">
        <Pricing />
      </section>

      <section id="contact" className="py-20 px-6 bg-zinc-100">
        <Contact />
      </section>
      <footer className="bg-zinc-900 text-zinc-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Yash Photography
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Capturing moments, emotions, and stories through professional
              photography. Let’s create something memorable together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Contact Info
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: yashwork@gmail.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: India</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-white">
                Instagram
              </a>
              <a href="#" className="hover:text-white">
                YouTube
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="text-center text-sm text-zinc-500 mt-10 border-t border-zinc-700 pt-6">
          © {new Date().getFullYear()} Yash Photography. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Main;
