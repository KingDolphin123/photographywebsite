import "../Css/Packages.css";
import grouppic from "../photosandassets/IMG_5065.jpg";
import soloplus from "../photosandassets/IMG_9146-1.jpg";
import solo from "../photosandassets/IMG_6305.jpg";

const Packages = () => {
  return (
    <div className="packagesbig">
      <div className="packagesflex">
        <div className="picflex so">
          <img className="pic solo" src={solo} alt="solopic" />
          <p className = "packagestext">Solo Pic</p>
        </div>
        <div className="picflex">
          <img className="pic group" src={grouppic} alt="grouppic" />
          <p className = "packagestext">Group Pic</p>
        </div>
        <div className="picflex pl">
          <img className="pic soloplus" src={soloplus} alt="soloplucpic" />
          <p className = "packagestext">Solo Plus Pic</p>
        </div>
      </div>
    </div>
  );
};

export default Packages;
