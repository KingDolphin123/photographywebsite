import "../Css/About.css";
import profpic from "../photosandassets/profpic1-min.jpg";

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
    </div>
  );
};

export default About;
