import "../Css/Footer.css";
import { useState, useCallback, useEffect } from "react";
import insta from "../photosandassets/insta.png";
import linkedin from "../photosandassets/link.png";

const Footer = () => {
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [scrollDirection, setScrollDirection] = useState("footer up");

  const handleNavigation = useCallback(
    (e) => { 
      if (y > window.scrollY) {
        setScrollDirection("footer up");
      } else if (y < window.scrollY) {
        setScrollDirection("footer down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <div className={scrollDirection}>
        <p className = "footertext">Copyright Jacob Lee 2022</p>
      <a
        href="https://www.instagram.com/jlee_photo_/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footerpic" alt="instagram" src={insta}></img>
      </a>
      <a
        href="https://www.linkedin.com/in/jacob-lee-230984218/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footerpic" alt="linkedin" src={linkedin}></img>
      </a>
    </div>
  );
};

export default Footer;
