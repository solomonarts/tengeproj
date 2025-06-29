// About Section Component
import tengeblocks from "../assets/images/tengeblocks.png";
const AboutSection = () => {
  return (
    <section
      id="about"
      className="container mx-auto my-16 p-4 md:p-8 bg-white rounded-3xl shadow-lg"
    >
      <h2
        className="text-4xl text-center text-gradient font-bold mb-10"
        style={{ fontFamily: '"Luckiest Guy", cursive' }}
      >
        Tenge Tenge: Our Epic Quest for a Brighter Tomorrow!
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="text-lg leading-relaxed">
          <p className="mb-4">
            In a super-duper world buzzing with tech and digital wonders, Tenge
            Tenge is like a brave superhero squad! Our big, bold mission? To{" "}
            <strong>Educate a child To Build the Future!</strong> We believe
            that awesome new ideas aren't just for fancy digital coins; they're
            for making lives sparkle and grow! And guess what? This magic starts
            in every child's brilliant mind!
          </p>
          <h3
            className="text-2xl font-bold text-blue-600 mb-4 flex items-center"
            style={{ fontFamily: '"Luckiest Guy", cursive' }}
          >
            <i className="fas fa-lightbulb mr-3"></i>Our Super Sparkly Vision!
          </h3>
          <p className="mb-4">
            Tenge Tenge is a borderless adventure, powered by amazing people who
            know that learning is the coolest superpower ever! We're like
            digital architects, building bridges of knowledge using blockchain
            smarts. We want to make sure every child, everywhere, has the tools,
            smarts, and courage to be a super-star in the digital world,
            especially if old ways haven't helped them shine!
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={tengeblocks}
            alt="Happy kids building with colorful blocks"
            className="rounded-2xl shadow-xl transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      <div className="mt-12">
        <h3
          className="text-2xl font-bold text-blue-600 mb-6 text-center flex items-center justify-center"
          style={{ fontFamily: '"Luckiest Guy", cursive' }}
        >
          <i className="fas fa-map-marked-alt mr-3"></i>Our Awesome Adventure
          Maps!
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition animate-pop-in flex flex-col items-center text-center">
            <i className="fas fa-cloud-sun text-blue-500 text-4xl mb-3"></i>
            <h4
              className="font-bold text-xl mb-2"
              style={{ fontFamily: '"Luckiest Guy", cursive' }}
            >
              Borderless Brain Boosts
            </h4>
            <p className="text-sm">
              We're teaming up with cool platforms to bring open, super-fun,
              borderless learning to every kid, powered by creativity and smart
              AI!
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition animate-pop-in delay-100 flex flex-col items-center text-center">
            <i className="fas fa-satellite-dish text-green-500 text-4xl mb-3"></i>
            <h4
              className="font-bold text-xl mb-2"
              style={{ fontFamily: '"Luckiest Guy", cursive' }}
            >
              Super Gear for Schools!
            </h4>
            <p className="text-sm">
              Helping schools get digital classrooms, fast internet (like
              Starlink!), and sunny solar-powered learning kits, connecting
              every child to world knowledge!
            </p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition animate-pop-in delay-200 flex flex-col items-center text-center">
            <i className="fas fa-piggy-bank text-purple-500 text-4xl mb-3"></i>
            <h4
              className="font-bold text-xl mb-2"
              style={{ fontFamily: '"Luckiest Guy", cursive' }}
            >
              Fair Play Funding Fun!
            </h4>
            <p className="text-sm">
              Creating clever community ways for schools to get funds, so every
              child can learn without money worries, especially in tricky
              places!
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl shadow-sm hover:shadow-md transition animate-pop-in delay-300 flex flex-col items-center text-center">
            <i className="fas fa-paint-brush text-yellow-500 text-4xl mb-3"></i>
            <h4
              className="font-bold text-xl mb-2"
              style={{ fontFamily: '"Luckiest Guy", cursive' }}
            >
              Learning That Looks Like YOU!
            </h4>
            <p className="text-sm">
              We make sure learning feels like home, with stories, songs, and
              lessons that celebrate local cultures and languages. Learning
              should be *you*-nique!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
