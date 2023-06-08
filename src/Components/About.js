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
            My name is Jacob Lee, I'm an amateur photographer based out of Charlottesville, Virginia. I'm a 
            current third year undergraduate student at the University of Virginia majoring in computer
            science. I shoot with a Canon M6 MarkII and a Canon EOS 200D. I love opportunities
            to capture beautiful moments for people, and I love constantly learning more about people
            and photography!{" "}
          </p>
        </div>
      </div>
      <div className="footer">
        <p className="footertext">Copyright Jacob Lee 2022-23</p>
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
