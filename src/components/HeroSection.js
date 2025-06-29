// Hero Section Component
const HeroSection = () => {
  return (
    <section
      id="home"
      class="relative bg-gradient-to-br from-blue-500 to-purple-600 text-white py-24 md:py-40 overflow-hidden rounded-bl-[4rem] rounded-br-[4rem] shadow-2xl crypto-pattern border-b-4 border-purple-700"
    >
      <div class="container mx-auto text-center relative z-10 p-4">
        <h1
          class="text-4xl md:text-7xl font-extrabold leading-tight mb-6 animate-pulse-grow drop-shadow-lg text-black"
          //   style={{fontFamily: Luckiest Guy, cursive;}}
        >
          Educate A Child <br /> To Build the Future!
        </h1>
        <p class="text-xl md:text-3xl mb-10 max-w-3xl mx-auto opacity-90">
          Tenge Tenge Movement is sparking joy and learning for kids,
          transforming tomorrow with blockchain magic and big dreams!
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#involved"
            class="bg-yellow-400 text-purple-800 font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:bg-yellow-500 transform hover:scale-110 transition duration-300 ease-in-out border-b-4 border-yellow-600"
          >
            Hop On Board! <i class="fas fa-hand-sparkles ml-3"></i>
          </a>
          <a
            href="#flow"
            class="bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-xl shadow-xl hover:bg-gray-100 transform hover:scale-110 transition duration-300 ease-in-out border-b-4 border-blue-200"
          >
            See the Magic Happen! <i class="fas fa-hat-wizard ml-3"></i>
          </a>
        </div>
      </div>
      {/* <!-- More fun crypto-like shapes floating around --> */}
      <div class="absolute top-10 left-[8%] w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-float-1"></div>
      <div class="absolute bottom-5 right-[12%] w-32 h-32 bg-yellow-300 rounded-lg transform rotate-45 opacity-30 animate-float-2"></div>
      <div class="absolute top-1/3 right-[3%] w-20 h-20 bg-purple-300 rounded-full opacity-30 animate-float-3"></div>
      <div class="absolute bottom-1/4 left-[3%] w-36 h-36 bg-green-300 rounded-tr-full rounded-bl-full opacity-30 animate-float-4"></div>
      <div class="absolute top-1/2 left-[20%] w-16 h-16 bg-red-300 rounded-xl opacity-30 animate-float-1 delay-100"></div>
      <div class="absolute bottom-10 right-[25%] w-20 h-20 bg-orange-300 rounded-full opacity-30 animate-float-2 delay-200"></div>
    </section>
  );
};

export default HeroSection;
