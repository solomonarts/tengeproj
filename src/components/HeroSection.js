import Socials from "./Socials";

// Hero Section Component
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white py-24 md:py-32 overflow-hidden rounded-bl-[4rem] rounded-br-[4rem] shadow-2xl crypto-pattern border-b-4 border-purple-700"
    >
      <div className="container relative z-10 p-4 mx-auto text-center">
        <h1
          className="mb-6 text-4xl font-extrabold leading-tight text-black md:text-7xl animate-pulse-grow drop-shadow-lg"
          //   style={{fontFamily: Luckiest Guy, cursive;}}
        >
          Educate A Child <br /> To Build the Future!
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl md:text-3xl opacity-90">
          Tenge Tenge Movement is sparking joy and learning for kids,
          transforming tomorrow with blockchain magic and big dreams!
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <a
            href="#involved"
            className="px-10 py-4 text-xl font-bold text-purple-800 transition duration-300 ease-in-out transform bg-yellow-400 border-b-4 border-yellow-600 rounded-full shadow-xl hover:bg-yellow-500 hover:scale-110"
          >
            Hop On Board! <i className="ml-3 fas fa-hand-sparkles"></i>
          </a>
          <a
            href="#flow"
            className="px-10 py-4 text-xl font-bold text-blue-600 transition duration-300 ease-in-out transform bg-white border-b-4 border-blue-200 rounded-full shadow-xl hover:bg-gray-100 hover:scale-110"
          >
            See the Magic Happen! <i className="ml-3 fas fa-hat-wizard"></i>
          </a>
        </div>
        <Socials />
      </div>
      {/* <!-- More fun crypto-like shapes floating around --> */}
      <div className="absolute top-10 left-[8%] w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-float-1"></div>
      <div className="absolute bottom-5 right-[12%] w-32 h-32 bg-yellow-300 rounded-lg transform rotate-45 opacity-30 animate-float-2"></div>
      <div className="absolute top-1/3 right-[3%] w-20 h-20 bg-purple-300 rounded-full opacity-30 animate-float-3"></div>
      <div className="absolute bottom-1/4 left-[3%] w-36 h-36 bg-green-300 rounded-tr-full rounded-bl-full opacity-30 animate-float-4"></div>
      <div className="absolute top-1/2 left-[20%] w-16 h-16 bg-red-300 rounded-xl opacity-30 animate-float-1 delay-100"></div>
      <div className="absolute bottom-10 right-[25%] w-20 h-20 bg-orange-300 rounded-full opacity-30 animate-float-2 delay-200"></div>
    </section>
  );
};

export default HeroSection;
