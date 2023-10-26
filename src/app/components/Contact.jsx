import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_a4c7h1c",
        "template_qay39hi",
        form.current,
        "omOd1iovOmwhUUEVo"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully");
          setUserName("");
          setUserEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong");
        }
      );
  };
  return (
    <section id="contact" className="py-10 px-3 text-white text-center mt-8">
      <div className="text-4xl font-semibold flex gap-2 justify-center">
        <h3>Contact</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
      <div
        className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
      >
        <form
          className="flex flex-col flex-1 gap-5"
          ref={form}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="bg-gray-600 rounded-md border-none p-2 text-2xl placeholder-slate-500"
          />
          <input
            type="Email"
            placeholder="Your Email Address"
            name="user_email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="bg-gray-600 rounded-md border-none p-2 text-2xl placeholder-slate-500"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-600 rounded-md border-none p-2 text-2xl placeholder-slate-500"
            rows={10}
          />
          <button className="btn-primary w-fit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
