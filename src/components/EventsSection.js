import React, { useState } from "react";
import "../styles/Eventsection.scss";

const eventsData = [
  {
    id: 1,
    title: "Art & Music Festival",
    date: "Aug 12, 2025",
    location: "Kampala Cultural Centre",
    image: "/events/art-music.jpg",
    description:
      "Join us for a vibrant day of art exhibits, live music, and community performances.",
  },
  {
    id: 2,
    title: "Youth Dance Jam",
    date: "Sep 3, 2025",
    location: "Makerere Open Grounds",
    image: "/events/dance-jam.jpg",
    description:
      "A showcase of Uganda’s most talented youth dancers and street performers.",
  },
  {
    id: 3,
    title: "Poetry Under The Stars",
    date: "Oct 5, 2025",
    location: "Namboole Gardens",
    image: "/events/poetry-stars.jpg",
    description:
      "An evening of soulful poetry and acoustic vibes in a magical outdoor setting.",
  },
];

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
      <h2>Upcoming Events</h2>
      <div className="event-cards">
        {eventsData.map((event, index) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => handleCardClick(index)}
          >
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p>
                {event.date} — {event.location}
              </p>
            </div>
          </div>
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
    </div>
  );
};

export default EventsSection;
