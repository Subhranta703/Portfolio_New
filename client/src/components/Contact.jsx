import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/contact", form);
      alert("Message sent successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      alert("Error sending message. Check console for details.");
    }
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Your Name" required 
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Your Email" required 
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Your Message" required 
          onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
