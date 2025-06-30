// Impact Flow Section
import impactpic from "../assets/images/impact.jpg";
const ImpactSection = () => {
  return (
    <section
      id="flow"
      className="container relative p-4 mx-auto my-16 overflow-hidden bg-purple-100 shadow-lg md:p-8 rounded-3xl"
    >
      <h2
        className="flex items-center justify-center mb-10 text-4xl font-bold text-center text-purple-700"
        style={{ fontFamily: '"Luckiest Guy", cursive' }}
      >
        <i className="mr-3 fas fa-magic"></i>Our Awesome Impact Flow!{" "}
        <i className="ml-3 fas fa-sparkles"></i>
      </h2>
      <p className="max-w-3xl mx-auto mb-12 text-lg text-center">
        Wonder how our magic works? It's simple, super clear, and makes a HUGE
        difference! Follow the sparkles!
      </p>

      <div className="relative z-10 grid items-stretch gap-8 text-center md:grid-cols-3">
        {/* Step 1 */}
        <div className="flex flex-col items-center justify-start h-full p-6 transition duration-300 transform bg-white shadow-xl rounded-2xl hover:scale-105 animate-pop-in">
          <i className="mb-4 text-6xl text-yellow-500 fas fa-gift icon-bounce"></i>
          <h3
            className="mb-2 text-2xl font-bold text-blue-600"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            1. Sparkly Seeds of Support!
          </h3>
          <p className="flex-grow text-md">
            You send us "Tenge Tenge Tokens" (or regular donations!) like
            magical seeds. These seeds are your kindness, ready to grow!
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <i className="fas fa-hand-holding-usd"></i> Your Donations
          </div>
        </div>

        {/* Arrow 1 (for larger screens) */}
        <div className="hidden md:flex absolute top-[180px] left-[32%] transform -translate-x-1/2 justify-center items-center w-auto z-0">
          <i className="text-5xl text-purple-400 fas fa-arrow-right"></i>
        </div>
        {/* Arrow 1 (for smaller screens) */}
        <div className="z-0 flex items-center justify-center py-4 md:hidden">
          <i className="text-5xl text-purple-400 fas fa-arrow-down"></i>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center justify-start h-full p-6 transition duration-300 delay-200 transform bg-white shadow-xl rounded-2xl hover:scale-105 animate-pop-in">
          <i className="mb-4 text-6xl text-green-500 fas fa-seedling icon-bounce"></i>
          <h3
            className="mb-2 text-2xl font-bold text-blue-600"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            2. Growing Giggle Gardens!
          </h3>
          <p className="flex-grow text-md">
            Your seeds grow into lush 'Giggle Gardens' of learning! This means
            books, cool tech, and awesome teachers for kids.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <i className="fas fa-book-open"></i> Education & Resources
          </div>
        </div>

        {/* Arrow 2 (for larger screens) */}
        <div className="hidden md:flex absolute top-[180px] right-[1%] transform translate-x-1/2 justify-center items-center w-auto z-0">
          <i className="text-5xl text-purple-400 fas fa-arrow-right"></i>
        </div>
        {/* Arrow 2 (for smaller screens) */}
        <div className="z-0 flex items-center justify-center py-4 md:hidden">
          <i className="text-5xl text-purple-400 fas fa-arrow-down"></i>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center justify-start h-full p-6 transition duration-300 transform bg-white shadow-xl rounded-2xl hover:scale-105 animate-pop-in delay-400">
          <i className="mb-4 text-6xl text-blue-500 fas fa-chart-line icon-bounce"></i>
          <h3
            className="mb-2 text-2xl font-bold text-blue-600"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            3. Super Stats & Sparkle!
          </h3>
          <p className="flex-grow text-md">
            We track every sparkle! Our 'blockchain map' shows how your kindness
            makes a real, visible difference for every child!
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <i className="fas fa-eye"></i> Transparent Impact
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="max-w-4xl mx-auto mb-6 text-2xl font-bold text-purple-800">
          It's like building a giant, happy, educational chain, block by block!
          Every step is clear, every smile is counted!
        </p>
        <img
          src={impactpic}
          alt="Fun impact flow animation idea"
          className="object-contain mx-auto shadow-md rounded-xl"
        />
      </div>
    </section>
  );
};

export default ImpactSection;
