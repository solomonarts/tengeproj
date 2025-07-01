// Contact Section Component
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3f7bb2l", // replace with your EmailJS service ID
        "template_fdbh6jl", // replace with your EmailJS template ID
        form.current,
        "rSlFRJ20m8touhO12" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("✅ Message sent to our team!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Error sending message");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="container p-4 mx-auto my-16 bg-yellow-100 shadow-lg md:p-8 rounded-3xl"
    >
      <h2
        className="flex items-center justify-center mb-10 text-4xl font-bold text-center text-yellow-700"
        style={{ fontFamily: '"Luckiest Guy", cursive' }}
      >
        <i className="mr-3 fas fa-comments"></i>Got Super Questions? Let's Chat!
      </h2>
      <div className="max-w-2xl p-8 mx-auto bg-white shadow-md rounded-2xl">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-bold text-gray-700"
            >
              Your Super Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Captain Awesome"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-bold text-gray-700"
            >
              Your Magic Email:
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              className="w-full px-4 py-3 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="sparkle@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-bold text-gray-700"
            >
              Your Bright Idea:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 leading-tight text-gray-700 border shadow appearance-none rounded-xl focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Tell us how you want to help build the future!"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 text-lg font-bold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 hover:scale-105"
            >
              Send Your Super Message!{" "}
              <i className="ml-2 fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
