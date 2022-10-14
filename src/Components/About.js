import "../Css/About.css";
import profpic from "../photosandassets/download.png";


const About = () => {
  return (
    <div className="about">
        <div className = "aboutdiv">
            <img src = {profpic} alt = "profilepicture" className = "picture" />
            <p className = "abouttext">  Hi, my name is deez nuts i love mark floryan and i like to eat mochiko</p>
        </div>
    </div>
  );
};

export default About;
