// Contact Section Component
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="container mx-auto my-16 p-4 md:p-8 bg-yellow-100 rounded-3xl shadow-lg"
    >
      <h2
        className="text-4xl text-center text-yellow-700 font-bold mb-10 flex items-center justify-center"
        style={{ fontFamily: '"Luckiest Guy", cursive' }}
      >
        <i className="fas fa-comments mr-3"></i>Got Super Questions? Let's Chat!
      </h2>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Your Super Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Captain Awesome"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Your Magic Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="sparkle@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-lg font-bold mb-2"
            >
              Your Bright Idea:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
              placeholder="Tell us how you want to help build the future!"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:from-green-500 hover:to-blue-600 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Send Your Super Message!{" "}
              <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
