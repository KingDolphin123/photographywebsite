import "../Css/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="34adab56-b6aa-4226-9540-b12191558684" />

        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>
        <input
          type="hidden"
          name="redirect"
          value="https://web3forms.com/success"
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Contact;
