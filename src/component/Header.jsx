import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let scrollY = window.pageYOffset;

      sections.forEach((sec) => {
        const top = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollY >= top && scrollY < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (id) =>
    active === id ? "text-black font-semibold" : "text-zinc-600";

  return (
    <div className="flex bg-zinc-100 px-24 items-center py-3 justify-between shadow-md sticky top-0 z-50">
      <nav className="flex gap-12 text-md">
        <Link
          to="home"
          smooth={true}
          duration={600}
          className={linkStyle("home")}
        >
          Home
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={600}
          className={linkStyle("portfolio")}
        >
          Portfolio
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={600}
          className={linkStyle("about")}
        >
          About
        </Link>
        <Link
          to="videos"
          smooth={true}
          duration={600}
          className={linkStyle("videos")}
        >
          Videos
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={600}
          className={linkStyle("contact")}
        >
          Contact
        </Link>
      </nav>

      <button className="bg-zinc-950 text-white px-8 py-2 rounded-md tracking-wide hover:scale-95 transition-all">
        Enquiry
      </button>
    </div>
  );
};

export default Header;
