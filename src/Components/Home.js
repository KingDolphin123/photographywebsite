import "../Css/Home.css";
import Footer from "./Footer";

import pic1 from "../photosandassets/finpics/morepics/IMG_9574-min.jpg";
import pic2 from "../photosandassets/finpics/morepics/IMG_9577-min.jpg";
import pic3 from "../photosandassets/finpics/morepics/IMG_9948-min.jpg";
// import pic4 from "../photosandassets/finpics/IMG_5296-min.jpg";
import pic5 from "../photosandassets/finpics/_MG_2637-min.jpg";
import pic6 from "../photosandassets/finpics/IMG_5400-min.jpg";
import pic7 from "../photosandassets/finpics/IMG_5426-min.jpg";
import pic9 from "../photosandassets/finpics/IMG_5460-min.jpg";
import pic10 from "../photosandassets/finpics/IMG_5464-min.jpg";
import pic11 from "../photosandassets/finpics/IMG_5499-min.jpg";
import pic12 from "../photosandassets/finpics/_MG_2999-min.jpg";
// import pic13 from "../photosandassets/finpics/IMG_6253.jpg";
// import pic14 from "../photosandassets/finpics/IMG_6305.jpg";
// import pic15 from "../photosandassets/finpics/IMG_7043.jpg";
// import pic16 from "../photosandassets/finpics/IMG_7061.jpg";
// import pic17 from "../photosandassets/finpics/IMG_7163.jpg";
import pic18 from "../photosandassets/finpics/IMG_0120-min.jpg";
import pic19 from "../photosandassets/finpics/IMG_9146-1.jpg";
import pic20 from "../photosandassets/finpics/IMG_9238-1.jpg";
import pic21 from "../photosandassets/finpics/IMG_9293.jpg";
import pic22 from "../photosandassets/finpics/IMG_9314.jpg";
import pic23 from "../photosandassets/finpics/_MG_9804-min.jpg";
import pic24 from "../photosandassets/finpics/morepics/IMG_0080-min.jpg";
import pic25 from "../photosandassets/finpics/_MG_9687-min.jpg";
import pic26 from "../photosandassets/finpics/_MG_9784-min.jpg";
import pic27 from "../photosandassets/finpics/_MG_2173-min.jpg";
import pic28 from "../photosandassets/finpics/_MG_1844-min.jpg";
import pic29 from "../photosandassets/finpics/_MG_1724-min.jpg";
import pic30 from "../photosandassets/finpics/_MG_1665-min.jpg";
import pic31 from "../photosandassets/finpics//morepics/IMG_0068-min.jpg";
// import pic23 from "../photosandassets/finpics/IMG_5611-min.jpg";
// import pic24 from "../photosandassets/finpics/IMG_5619-2-min.jpg";
// import pic25 from "../photosandassets/finpics/IMG_5648-min.jpg";

const Home = () => {
  let picarr3 = [pic7, pic10, pic19, pic22, pic23,pic27,pic30];
  let picarr2 = [pic1, pic2, pic6, pic11, pic20, pic24, pic26,pic28];
  let picarr = [pic3, pic9, pic12, pic18, pic5, pic21, pic25,pic29,pic31];
  let picarr11 = picarr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  let picarr12 = picarr2
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  let picarr13 = picarr3
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return (
    <div>
      <div className="bigdiv">
        <div className="col1">
          {picarr11.map((pic) => (
            <img className="pic" key={pic} src={pic} alt={pic} />
          ))}
        </div>
        <div className="col2">
          {picarr12.map((pic) => (
            <img className="pic" key={pic} src={pic} alt={pic} />
          ))}
        </div>
        <div className="col3">
          {picarr13.map((pic) => (
            <img className="pic" key={pic} src={pic} alt={pic} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
