// Partners Section Component
import gigglelogo from "../assets/images/Giggle.png";
import nain from "../assets/images/nian.jpg";
const PartnerSection = () => {
  return (
    <section
      id="partners"
      className="container mx-auto my-16 p-4 md:p-8 bg-yellow-100 rounded-3xl shadow-lg"
    >
      <h2
        className="text-4xl text-center text-yellow-700 font-bold mb-10 flex items-center justify-center"
        style={{ fontFamily: '"Luckiest Guy", cursive' }}
      >
        <i className="fas fa-handshake mr-3"></i>Our Amazing Learning Partners!
      </h2>
      <div className="grid md:grid-cols-2 gap-8 text-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center transform hover:scale-105 transition duration-300 animate-pop-in">
          <img
            src={gigglelogo}
            alt="Giggle Academy Logo"
            className="w-36 h-36 rounded-full object-contain mb-4 shadow-lg"
          />
          <h3
            className="text-3xl font-bold text-blue-600 mb-2"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Giggle Academy
          </h3>
          <p className="text-md text-gray-700">
            Sparking joy and curiosity with super-fun, creative, and interactive
            learning adventures! Get ready to giggle and grow!
          </p>
          <a
            href="https://giggleacademy.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 bg-purple-200 text-purple-700 font-bold py-2 px-6 rounded-full hover:bg-purple-300 transition duration-300"
          >
            Visit Giggle!{" "}
            <i className="fas fa-external-link-alt ml-1 text-sm"></i>
          </a>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center transform hover:scale-105 transition duration-300 animate-pop-in delay-200">
          <img
            src={nain}
            alt="Niannian Academy Logo"
            className="w-36 h-36 rounded-full mb-4 shadow-lg"
          />
          <h3
            className="text-3xl font-bold text-purple-600 mb-2"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Niannian Academy
          </h3>
          <p className="text-md text-gray-700">
            Empowering young minds with innovative, easy-to-reach lessons that
            prepare them for a bright, global future! Learn the Niannian way!
          </p>
          <a
            href="https://niannianbnb.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 bg-blue-200 text-blue-700 font-bold py-2 px-6 rounded-full hover:bg-blue-300 transition duration-300"
          >
            Explore Niannian!{" "}
            <i className="fas fa-external-link-alt ml-1 text-sm"></i>
          </a>
        </div>
      </div>
      <p className="text-center text-lg mt-10 max-w-3xl mx-auto">
        These visionary partners are like super-teachers, helping us bring{" "}
        <strong>Borderless Brain Boosts</strong> and awesome, AI-powered
        learning to every corner of the world!
      </p>
    </section>
  );
};

export default PartnerSection;
