import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Eventsection.scss";
import sgwposter from "../assets/bg/sgw.JPG";

const eventsData = [
  {
    id: 1,
    title: "Soft Ground Wrestling",
    date: "July 13, 2025",
    location: "Mukono",
    image: sgwposter,
    description: "Join us as we celebrate Binance@8 in style.",
  },
  // {
  //   id: 2,
  //   title: "Youth Dance Jam",
  //   date: "Sep 3, 2025",
  //   location: "Makerere Open Grounds",
  //   image: "/events/dance-jam.jpg",
  //   description:
  //     "A showcase of Uganda’s most talented youth dancers and street performers.",
  // },
  // {
  //   id: 3,
  //   title: "Poetry Under The Stars",
  //   date: "Oct 5, 2025",
  //   location: "Namboole Gardens",
  //   image: "/events/poetry-stars.jpg",
  //   description:
  //     "An evening of soulful poetry and acoustic vibes in a magical outdoor setting.",
  // },
];

const EventCard = ({ event, index, onClick }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="border event-card bg-white/10 backdrop-blur-md rounded-xl border-white/20"
      onClick={onClick}
      initial={{ opacity: 0, x: -100 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <img src={event.image} alt={event.title} className="h-full object-fit" />
      <div className="event-info">
        <h3>{event.title}</h3>
        <p>
          {event.date} — {event.location}
        </p>
      </div>
    </motion.div>
  );
};

const EventsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

  const nextEvent = () => {
    setActiveIndex((prev) => (prev + 1) % eventsData.length);
  };

  const prevEvent = () => {
    setActiveIndex(
      (prev) => (prev - 1 + eventsData.length) % eventsData.length
    );
  };

  return (
    <div id="events" className="events-section">
      <h1 className="text-[38px] md:text-[54px] lg:text-[80px] font-bold">
        Upcoming Events
      </h1>
      <p className="mb-8 text-sm text-gray-400">
        We reside where the Fun Lives!!!
      </p>
      <div className="event-cards">
        {eventsData.map((event, index) => (
          <EventCard
            key={event.id}
            event={event}
            index={index}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <div className="event-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <img src={eventsData[activeIndex].image} alt="event" />
            <h3>{eventsData[activeIndex].title}</h3>
            <p>
              <strong>{eventsData[activeIndex].date}</strong> —{" "}
              {eventsData[activeIndex].location}
            </p>
            <p>{eventsData[activeIndex].description}</p>
            <div className="slider-controls">
              <button onClick={prevEvent}>Previous</button>
              <button onClick={nextEvent}>Next</button>
            </div>
          </div>
        </div>
      )}

      {/* <div
        key={gifKey}
        className="dancing-gif"
        style={{ top: gifTop }}
      >
        <img src="/dancing-boy.gif" alt="Dancing Boy" />
      </div> */}
    </div>
  );
};

export default EventsSection;
