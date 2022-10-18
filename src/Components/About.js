import "../Css/About.css";
import profpic from "../photosandassets/profpic1-min.jpg";
import insta from "../photosandassets/insta.png";
import linkedin from "../photosandassets/link.png";

const About = () => {
  return (
    <div className="about">
      <div className="aboutdiv">
        <img src={profpic} alt="profilepicture" className="picture" />
        <div className="abttextdiv">
          <p className="abouttext hi">Hi!</p>
          <p className="abouttext">
            {" "}
            my name is deez nuts i love mark floryan and i like to eat mochiko.
            When will luther come back to us and finally tell us how to code the
            entirety of google in assembly?{" "}
          </p>
        </div>
      </div>
      <div className="footer">
        <p className="footertext">Copyright Jacob Lee 2022</p>
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
    </div>
  );
};

export default About;
