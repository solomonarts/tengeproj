import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ImpactSection from "./components/ImpactSection";
import PartnerSection from "./components/PartnersSection";
import GetInvolved from "./components/GetInvolved";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Main App Component
const App = () => {
  // State for mobile navigation visibility
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle mobile navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Smooth scrolling effect and mobile nav closing
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      // Close mobile nav after clicking a link, if open
      if (isNavOpen && window.innerWidth < 1024) {
        setIsNavOpen(false);
      }
    };

    // Attach click listeners to all internal links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll);
    });

    // Cleanup event listeners on component unmount
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, [isNavOpen]); // Re-run effect if isNavOpen changes

  return (
    <div className="antialiased text-gray-800">
      {/* Font Awesome CSS Link (added directly for React App within Canvas) */}
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      /> */}
      {/* Google Fonts (added directly for React App within Canvas) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Fredoka+One&display=swap"
        rel="stylesheet"
      />

      {/* <link
        href="https://fonts.googleapis.com/css2?family=Chewy&display=swap"
        rel="stylesheet"
      /> */}

      <link
        href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
        rel="stylesheet"
      />

      {/* Header Component */}
      <Header isNavOpen={isNavOpen} toggleNav={toggleNav} />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* How It Works Section - Reimagined! */}
      <ImpactSection />

      {/* Partners Section */}
      <PartnerSection />

      {/* Get Involved Section */}
      <GetInvolved />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
