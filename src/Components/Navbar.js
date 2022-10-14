import logo from "../photosandassets/drawiddng-4.png";
import "../Css/Navbar.css";
import { useState} from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const[navscroll, setnavscroll] = useState("finaldiv");
    
    window.addEventListener("scroll", function(){
      if(this.window.scrollY>50){
        if(navscroll !== 'finaldiv nav2'){setnavscroll('finaldiv nav2');}
      }
      else if(this.window.scrollY<50){
        if(navscroll !== 'finaldiv'){setnavscroll('finaldiv');}
      }
      return () => window.removeEventListener("scroll");
    }, {once: false});
  return (
    <div className = {navscroll}>
      <div className="navlinksflex">
        <img className="logo" alt = "logo" src={logo}></img>
        <Link className = "text" to="/Home"> Home </Link>
        <Link className = "text" to="/About"> About </Link>
        <Link className = "text" to="/Packages"> Packages </Link>
      </div>
    </div>
  );
};

export default Navbar;
