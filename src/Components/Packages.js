import "../Css/Packages.css";
import grouppic from "../photosandassets/finpics/IMG_5426-min.jpg";
import soloplus from "../photosandassets/IMG_9146-1.jpg";
import solo from "../photosandassets/finpics/IMG_5227-min.jpg";
import insta from "../photosandassets/insta.png";
import linkedin from "../photosandassets/link.png";
import { useState } from "react";
import { MobileView } from "react-device-detect";

const Packages = () => {
  const [PicText, setPicText] = useState("packagestext off");
  const [PicText2, setPicText2] = useState("packagestext off");
  const [PicText3, setPicText3] = useState("packagestext off");
  const [hov, setHov] = useState("hov playing");
  const [solopic, setSoloPic] = useState("picu solo");
  const [grouppicpic, setGroupPic] = useState("picu group");
  const [solopluspic, setSoloPlus] = useState("picu soloplus");
  const onHover1 = () => {
    setPicText("packagestext off on");
    setSoloPic("picu solo picon");
    setHov("hov");
  };
  const onHover2 = () => {
    setPicText2("packagestext off on");
    setGroupPic("picu group picon");
  };
  const onHover3 = () => {
    setPicText3("packagestext off on");
    setSoloPlus("picu soloplus picon");
  };
  const onLeave = () => {
    setPicText("packagestext off");
    setSoloPic("picu solo");
    setPicText2("packagestext off");
    setGroupPic("picu group");
    setPicText3("packagestext off");
    setSoloPlus("picu soloplus");
  };
  return (
    <div>
      <div className="packagesbig">
        <div className="packagesflex">
          <div className="picflex">
            <img
              onMouseEnter={onHover1}
              onMouseLeave={onLeave}
              className={solopic}
              src={solo}
              alt="solopic"
            />
            <p onMouseEnter={onHover1} className="packagestext">
              Solo Pics
            </p>
            <p onMouseEnter={onHover1} className="packagestext mon">
              $100-$125
            </p>
            <p onMouseEnter={onHover1} className={PicText}>
              Individual portraits and stills, focused on highlighting
              individual beauty and wonder. 30 minute shoot and 10-15 final
              edited photos.
            </p>
            <MobileView>
              <p onMouseEnter={onHover1} className={hov}>
                Click to see details
              </p>
            </MobileView>
          </div>
          <div onMouseEnter={onHover2} className="picflex">
            <img
              onMouseEnter={onHover2}
              onMouseLeave={onLeave}
              className={grouppicpic}
              src={grouppic}
              alt="grouppic"
            />
            <p onMouseEnter={onHover2} className="packagestext">
              Group Pics
            </p>
            <p onMouseEnter={onHover2} className="packagestext mon">
              $50 per person
            </p>
            <p onMouseEnter={onHover2} className={PicText2}>
              Group portraits and stills, focused on highlighting group dynamics
              and relationships. 30 minute shoot and 10-15 final edited photos.
            </p>
          </div>
          <div className="picflex">
            <img
              onMouseEnter={onHover3}
              onMouseLeave={onLeave}
              className={solopluspic}
              src={soloplus}
              alt="soloplucpic"
            />
            <p onMouseEnter={onHover3} className="packagestext">
              Solo Plus Pics
            </p>
            <p onMouseEnter={onHover3} className="packagestext mon">
              $125-175
            </p>
            <p onMouseEnter={onHover3} className={PicText3}>
              Individual portraits and stills, focused on highlighting
              individual beauty and wonder. 45 minute shoot and 20-30 final
              edited photos.
            </p>
          </div>
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

export default Packages;
