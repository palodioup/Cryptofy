import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef();

  const SendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oranp53", "template_7jn5yp8", form.current, {
        publicKey: "9kcf8M7H7c8jNd3FJ",
      })
      .then(
        () => {
          Swal.fire({
            title: "Success!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            title: error,
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
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
          className="ee"
          required
        />
      </div>
      <div className="parenyt">
        <p>Send a message</p>
        <textarea
          placeholder="Send us a message"
          name="message"
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
