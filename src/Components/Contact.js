import "../Css/Contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import insta from "../photosandassets/insta.png";
import linkedin from "../photosandassets/link.png";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messagesend, setMessagesend] = useState("email");
  const submit = () => {
    setMessagesend("email sent");
    handleRender();
    const serviceID = "service_gwttkc3";
    const templateID = "template_8u3euar";
    const publicKey = "vOAm-rr8fBIQQW1Gi";
    const params = { userName, email, message };
    // emailjs.send(serviceID, templateID, params, publicKey);
    setUserName("");
    setEmail("");
    setMessage("");
  };
  const handleRender = () => {
    setTimeout(() => {
       setMessagesend("email");
    }, 3000);
  }
  return (
    <div className="contactfinal">
      <div className="contact">
        <p className="contacttext">Contact Me</p>
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="inputform"
        />
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputform"
        />
        <textarea
          type="text"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="inputform"
        />
        <button className="inputform but" onClick={submit}>
          Submit
        </button>
        <p className = {messagesend}>Email Sent!</p>
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

export default Contact;
