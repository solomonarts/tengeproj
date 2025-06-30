// Partners Section Component
import gigglelogo from "../assets/images/Giggle.png";
import nain from "../assets/images/nian.jpg";
const PartnerSection = () => {
  return (
    <section
      id="partners"
      className="container p-4 mx-auto my-16 bg-yellow-100 shadow-lg md:p-8 rounded-3xl"
    >
      <h2
        className="flex items-center justify-center mb-10 text-4xl font-bold text-center text-yellow-700"
        style={{ fontFamily: '"Luckiest Guy", cursive' }}
      >
        <i className="mr-3 fas fa-handshake"></i>Our Amazing Learning Friends!
      </h2>
      <div className="grid items-center gap-8 text-center md:grid-cols-2">
        <div className="flex flex-col items-center p-8 transition duration-300 transform bg-white shadow-md rounded-2xl hover:scale-105 animate-pop-in">
          <img
            src={gigglelogo}
            alt="Giggle Academy Logo"
            className="object-contain mb-4 rounded-full shadow-lg w-36 h-36"
          />
          <h3
            className="mb-2 text-3xl font-bold text-blue-600"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Giggle Academy
          </h3>
          <p className="text-gray-700 text-md">
            Sparking joy and curiosity with super-fun, creative, and interactive
            learning adventures! Get ready to giggle and grow!
          </p>
          <a
            href="https://giggleacademy.com/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 mt-4 font-bold text-purple-700 transition duration-300 bg-purple-200 rounded-full hover:bg-purple-300"
          >
            Visit Giggle!{" "}
            <i className="ml-1 text-sm fas fa-external-link-alt"></i>
          </a>
        </div>
        <div className="flex flex-col items-center p-8 transition duration-300 delay-200 transform bg-white shadow-md rounded-2xl hover:scale-105 animate-pop-in">
          <img
            src={nain}
            alt="Niannian Academy Logo"
            className="mb-4 rounded-full shadow-lg w-36 h-36"
          />
          <h3
            className="mb-2 text-3xl font-bold text-purple-600"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            Niannian Academy
          </h3>
          <p className="text-gray-700 text-md">
            Empowering young minds with innovative, easy-to-reach lessons that
            prepare them for a bright, global future! Learn the Niannian way!
          </p>
          <a
            href="https://niannianbnb.com/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 mt-4 font-bold text-blue-700 transition duration-300 bg-blue-200 rounded-full hover:bg-blue-300"
          >
            Explore Niannian!{" "}
            <i className="ml-1 text-sm fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
      <p className="max-w-3xl mx-auto mt-10 text-lg text-center">
        These visionary partners are like super-teachers, helping us bring{" "}
        <strong>Borderless Brain Boosts</strong> and awesome, AI-powered
        learning to every corner of the world!
      </p>
    </section>
  );
};

export default PartnerSection;
