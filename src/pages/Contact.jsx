import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [error, setError] = useState("");

  const errorMessage=()=> {toast.error('Failed to send Message', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
    });}

  const successMessage=()=> {toast.success('Agam Received Your Mail', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
    });}

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    setError("");
    emailjs
      .sendForm(
        "service_19po1qv",
        "template_80oxju4",
        form.current,
        "rWon_r6FweIlX1AU5"
      )
      .then(
        (result) => {
          successMessage();
          form.current.reset();
        },
        (error) => {
          errorMessage();
          // console.log(error.text);
        }
      );
  };

  


  return (
    <div className="max-w-md mx-auto mt-10 p-6  shadow-md rounded">
      <h2 className="text-4xl text-center p-2 mb-4">Contact <span className="text-blue-600 font-semibold">Me</span></h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-2 border rounded"
          rows="4"
        />
        {error && <p className="text-red-600">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded transform transition duration-300 hover:bg-blue-700 hover:scale-95 active:scale-90"
        >
          Send
        </button>
      </form>
      <p className="text-center text-sm">powered by emailJS</p>
      <ToastContainer/>
    </div>
  )
}

export default Contact
