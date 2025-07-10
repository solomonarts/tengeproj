import React, { useEffect, useState } from "react";
import "./App.css";
import custcursor from "./assets/icons/tengelogo.png";
import dancing1 from "./assets/bg/tenge1.gif";
import EventsSection from "./components/EventsSection";
import applogo from "./assets/icons/tengelogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="tt-navbar">
      <div className="flex items-center tt-logo ">
        <img src={applogo} className="w-16 h-auto" /> Tengetenge
      </div>
      <nav className={`tt-menu ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#contact">Contact</a>
      </nav>
      <div
        className="tt-menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>
    </header>
  );
};

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
    >
      <img src={custcursor} alt="cursor" />
    </div>
  );
};

const DancingBoy = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 7000); // How long it stays on screen
    }, 1 * 60 * 1000); // Every 2 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    visible && (
      <div className="dancing-boy">
        <img src={dancing1} alt="Dancing Boy" />
      </div>
    )
  );
};

// Component for the character cards in the About section
const CharacterCard = ({ imgSrc, name, description, bgColor }) => (
  <div
    className={`${bgColor} p-8 rounded-2xl shadow-2xl transform hover:-translate-y-2 transition-transform duration-300`}
  >
    <img
      src={imgSrc}
      alt={`Cartoon of ${name}`}
      className="w-32 h-32 mx-auto border-4 border-black rounded-full"
    />
    <h3 className="mt-4 text-2xl font-black">{name}</h3>
    <p className="mt-2 font-semibold">{description}</p>
  </div>
);

// Component for the main Hero section
const HeroSection = () => (
  <section
    id="home"
    className="relative px-4 py-20 text-center text-white hero-bg"
  >
    <div className="relative z-10">
      <h1 className="text-4xl font-black leading-tight uppercase md:text-6xl">
        Crypto is too serious. <br />{" "}
        <span className="text-yellow-300">Tenge Tenge Movement</span> is here to
        mess things up.
      </h1>
      <p className="mt-4 text-lg font-bold md:text-2xl">
        We Dance, We Wrestle, We Laugh, We Meme while the market cries.
      </p>
      <div className="flex flex-col items-center justify-center mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
        <a
          href="#videos"
          className="w-full px-10 py-4 text-lg font-bold text-black transition-transform duration-300 transform bg-yellow-400 rounded-full sm:w-auto hover:scale-105"
        >
          Watch the Madness
        </a>
        <a
          href="#community"
          className="w-full px-10 py-4 text-lg font-bold text-white transition-transform duration-300 transform bg-pink-500 rounded-full sm:w-auto hover:scale-105"
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
    "jaJXxdb2qes",
    "1b9EEP1x12E",
  ];

  return (
    <section id="videos" className="py-20 overflow-hidden bg-gray-800">
      <h2 className="px-4 mb-12 text-4xl font-black text-center text-yellow-300 uppercase">
        The Madness
      </h2>
      <div className="flex px-4 pb-4 space-x-8 overflow-x-auto no-scrollbar md:px-8">
        {youtubeVideoIds.map((id) => (
          <div
            key={id}
            className="flex-shrink-0 overflow-hidden transition-transform duration-300 transform border-2 shadow-2xl w-80 md:w-96 rounded-xl border-pink-500/50 hover:scale-105"
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
  <section id="about" className="px-4 py-20 text-center about-bg">
    <h2 className="text-4xl font-black text-gray-800">
      It's the Tenge Tenge Movement
    </h2>
    <p className="max-w-3xl mx-auto mt-6 text-xl leading-relaxed text-gray-700 font-comic md:text-2xl">
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
    <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto mt-16 md:grid-cols-3">
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
  <section id="community" className="px-4 py-12 bg-gray-900">
    <div className="px-6 py-12 text-center shadow-2xl submission-banner rounded-3xl">
      <h2
        className="text-4xl font-black text-gray-900 md:text-5xl"
        style={{ textShadow: "2px 2px 4px rgba(255,255,255,0.5)" }}
      >
        Want to Get Featured? <br /> Show us your Vibes!
      </h2>
      <p className="mt-4 text-lg font-bold text-gray-800">
        Dance, meme, wrestle, roast.
        <br />
        If you vibe hard enough, we’ll repost you.
      </p>
      <div className="mt-8">
        <a
          href="https://x.com/intent/tweet?text=%23TengeTenge%20%40OfficialTenge%20"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 text-lg font-bold text-white transition-transform duration-300 transform bg-gray-900 rounded-full hover:scale-105"
        >
          Submit Your Vibe
        </a>
        <p className="mt-4 font-semibold text-gray-800">
          Post on X with #TengeTenge & tag @OfficialTenge
        </p>
      </div>
    </div>
  </section>
);

// Component for the Footer
const Footer = () => (
  <footer
    id="contact"
    className="px-4 py-12 text-center text-white bg-gray-900"
  >
    <a
      href="https://x.com/OfficialTenge"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mb-4 transition-transform transform hover:scale-110"
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
        <Navbar />
        <CustomCursor />
        <DancingBoy />
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <EventsSection />
        <SubmissionBanner />
        <Footer />
      </div>
    </>
  );
}
