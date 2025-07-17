import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // Step 1: Define your state to track your input.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 3: Submit the form

      const form = useRef();

  const SendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_oranp53', 'template_7jn5yp8', form.current, {
        publicKey: '9kcf8M7H7c8jNd3FJ',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={SendEmail}>
      <div className="pareny">
        <label>Name: </label>
        <input
          placeholder="Name here"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="ee"
          required
        />
      </div>
      <div className="pareny">
        <label>Email: </label>
        <input
          placeholder="Email here"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="ee"
          required
        />
      </div>
      <div className="parenyt">
        <p>Send a message</p>
        <textarea
          placeholder="Send us a message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="tds"
        ></textarea>
      </div>
      <button type="submit" onClick={SendEmail}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;