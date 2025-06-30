import React, { useEffect, useState } from "react";
// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import insta from "../assets/images/icons8-instagram-logo-100.png";
// import tiktok from "../assets/images/icons8-tiktok-100.png";
import xtwitter from "../assets/images/icons8-x-logo-100.png";
// import youtb from "../assets/images/icons8-youtube-logo-100.png";
import "../assets/styles/socials.scss"; // You can style this as needed

const socialPlatforms = [
  {
    name: "X",
    icon: xtwitter,
    followers: 2200,
    color: "#ffffff",
    url: "",
  },
  //   {
  //     name: "Instagram",
  //     icon: insta,
  //     followers: 8700,
  //     color: "#e1306c",
  //     url: "",
  //   },
  //   { name: "YouTube", icon: youtb, followers: 23000, color: "#ff0000", url: "" },
  //   { name: "TikTok", icon: tiktok, followers: 9500, color: "#000000", url: "" },
];

// const AnimatedCounter = ({ target }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = target;
//     const duration = 2000; // 2 seconds
//     const stepTime = Math.max(Math.floor(duration / end), 20);

//     const timer = setInterval(() => {
//       start += Math.ceil(end / (duration / stepTime));
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, [target]);

//   return <span>{count.toLocaleString()}</span>;
// };

const Socials = () => {
  return (
    <div className="social-followers">
      {socialPlatforms.map((platform) => (
        <div
          className="platform-card"
          key={platform.name}
          style={{ borderColor: platform.color }}
        >
          <a
            href="https://x.com/officialTenge"
            target="_blank"
            rel="noreferrer noreopener"
          >
            <div className="icon" style={{ color: platform.color }}>
              <img className="w-20 h-auto m-auto" src={platform.icon} alt="" />
            </div>
          </a>
          {/* <div className="details">
            <h4>{platform.name}</h4>
            <p>
              <AnimatedCounter target={platform.followers} /> Followers
            </p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Socials;
