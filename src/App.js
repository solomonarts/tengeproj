import React from "react";

// Component for the character cards in the About section
const CharacterCard = ({ imgSrc, name, description, bgColor }) => (
  <div
    className={`${bgColor} p-8 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-300`}
  >
    <img
      src={imgSrc}
      alt={`Cartoon of ${name}`}
      className="w-32 h-32 rounded-full mx-auto border-4 border-black"
    />
    <h3 className="text-2xl font-black mt-4">{name}</h3>
    <p className="mt-2 font-semibold">{description}</p>
  </div>
);

// Component for the main Hero section
const HeroSection = () => (
  <section className="hero-bg text-white text-center py-20 px-4 relative">
    <div className="relative z-10">
      <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight">
        Crypto is too serious. <br />{" "}
        <span className="text-yellow-300">Tenge Tenge Movement</span> is here to
        mess things up.
      </h1>
      <p className="text-lg md:text-2xl mt-4 font-bold">
        We Dance, We Wrestle, We Laugh, We Meme while the market cries.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <a
          href="#videos"
          className="w-full sm:w-auto bg-yellow-400 text-black font-bold text-lg py-4 px-10 rounded-full transform hover:scale-105 transition-transform duration-300"
        >
          Watch the Madness
        </a>
        <a
          href="#community"
          className="w-full sm:w-auto bg-pink-500 text-white font-bold text-lg py-4 px-10 rounded-full transform hover:scale-105 transition-transform duration-300"
        >
          Join the Movement
        </a>
      </div>
    </div>
  </section>
);

// --- UPDATED COMPONENT ---
// Component for the YouTube Video Section
const VideoSection = () => {
  const youtubeVideoIds = [
    "zJ_3FXD5VVs",
    "dGHqhZSM6Ho",
    "1gWjHCZ8Aks",
    "r5K0RHWCwsg",
    "1b9EEP1x12E",
  ];

  return (
    <section id="videos" className="bg-gray-800 py-20 overflow-hidden">
      <h2 className="text-4xl font-black text-center text-yellow-300 uppercase mb-12 px-4">
        The Madness
      </h2>
      <div className="flex overflow-x-auto space-x-8 pb-4 no-scrollbar px-4 md:px-8">
        {youtubeVideoIds.map((id) => (
          <div
            key={id}
            className="flex-shrink-0 w-80 md:w-96 rounded-xl overflow-hidden shadow-2xl border-2 border-pink-500/50 transform hover:scale-105 transition-transform duration-300"
          >
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title={`Tenge Tenge Video ${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Component for the About section
const AboutSection = () => (
  <section id="about" className="about-bg py-20 px-4 text-center">
    <h2 className="text-4xl font-black text-gray-800">
      It's the Tenge Tenge Movement
    </h2>
    <p className="font-comic text-xl md:text-2xl mt-6 max-w-3xl mx-auto leading-relaxed text-gray-700">
      Tenge Tenge Movement isn’t just about vibes; it’s a global wave of joy,
      laughter, and pure, unapologetic fun.
      <br />
      <br />
      We are here to break the monotony, shake off the stress, and remind the
      crypto world how to smile again, one dance, one meme, one wild moment at a
      time.
      <br />
      <br />
      No pressure, no charts, no serious talk.
      <br />
      <br />
      Just real people, real energy, and a movement built to lift spirits when
      the market can’t.
    </p>
    <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <CharacterCard
        imgSrc="https://placehold.co/150x150/f43f5e/ffffff?text=TENGE&font=comic"
        name="Tenge – The Rebellious Nephew"
        description="Dancing. Loud. Laughing at the market."
        bgColor="bg-yellow-300 text-black"
      />
      <CharacterCard
        imgSrc="https://placehold.co/150x150/1f2937/ffffff?text=CZ&font=comic"
        name="CZ – The Silent Big Cousin"
        description="Doesn’t say much, but when he moves... BOOM."
        bgColor="bg-gray-800 text-white"
      />
      <CharacterCard
        imgSrc="https://placehold.co/150x150/22d3ee/ffffff?text=HE+YI&font=comic"
        name="He Yi – The Strategic Big Sis"
        description="Calm, calculating, always 3 steps ahead."
        bgColor="bg-cyan-300 text-black"
      />
    </div>
  </section>
);

// Component for the User Submission banner
const SubmissionBanner = () => (
  <section id="community" className="py-12 px-4 bg-gray-900">
    <div className="submission-banner text-center py-12 px-6 rounded-3xl shadow-2xl">
      <h2
        className="text-4xl md:text-5xl font-black text-gray-900"
        style={{ textShadow: "2px 2px 4px rgba(255,255,255,0.5)" }}
      >
        Want to Get Featured? <br /> Show us your Vibes!
      </h2>
      <p className="text-gray-800 font-bold text-lg mt-4">
        Dance, meme, wrestle, roast.
        <br />
        If you vibe hard enough, we’ll repost you.
      </p>
      <div className="mt-8">
        <a
          href="https://x.com/intent/tweet?text=%23TengeTenge%20%40OfficialTenge%20"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white font-bold text-lg py-4 px-10 rounded-full transform hover:scale-105 transition-transform duration-300 inline-block"
        >
          Submit Your Vibe
        </a>
        <p className="text-gray-800 font-semibold mt-4">
          Post on X with #TengeTenge & tag @OfficialTenge
        </p>
      </div>
    </div>
  </section>
);

// Component for the Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white text-center py-12 px-4">
    <a
      href="https://x.com/OfficialTenge"
      target="_blank"
      rel="noopener noreferrer"
      className="transform hover:scale-110 transition-transform inline-block mb-4"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </svg>
    </a>
    <p className="text-sm opacity-60">
      Disclaimer: This is just for fun. Don’t take us seriously unless you are
      CZ.
    </p>
  </footer>
);

// Main App component that brings everything together
export default function App() {
  return (
    <>
      <style>{`
                html {
                    scroll-behavior: smooth;
                }
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #111827;
                    color: #f3f4f6;
                }
                .font-comic {
                    font-family: 'Comic Neue', cursive;
                }
                .hero-bg {
                    background-color: #1a1a1a;
                    overflow: hidden;
                    position: relative;
                }
                .hero-bg::before {
                    content: '😂🔥💃😂🔥💃😂🔥💃😂🔥💃😂🔥💃😂🔥💃';
                    position: absolute;
                    top: 10%;
                    left: -20%;
                    width: 200%;
                    font-size: 4rem;
                    opacity: 0.05;
                    animation: scroll-emojis 20s linear infinite;
                    z-index: 0;
                }
                @keyframes scroll-emojis {
                    from { transform: translateX(0%); }
                    to { transform: translateX(-50%); }
                }
                .about-bg {
                    background-color: #fefce8;
                    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
                }
                .submission-banner {
                    background: linear-gradient(90deg, #fef08a, #f472b6, #67e8f9, #fef08a);
                    background-size: 400% 400%;
                    animation: gradient-flow 5s ease infinite;
                }
                @keyframes gradient-flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

      <div className="bg-gray-900">
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <SubmissionBanner />
        <Footer />
      </div>
    </>
  );
}
