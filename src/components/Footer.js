// Footer Component
import xtwiter from "../assets/images/icons8-x-logo-100-w.png";
const Footer = () => {
  return (
    <footer className="p-8 mt-16 text-center text-white bg-gray-800 rounded-t-xl">
      <div className="container mx-auto">
        <div className="flex justify-center mb-6 space-x-6">
          <a
            href="#"
            className="text-2xl text-white transition duration-300 transform hover:text-blue-400 hover:scale-125"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://x.com/officialTenge"
            target="_blank"
            className="text-2xl text-white transition duration-300 transform hover:text-blue-400 hover:scale-125"
          >
            <img src={xtwiter} className="w-8 h-auto" />
          </a>
          <a
            href="#"
            className="text-2xl text-white transition duration-300 transform hover:text-blue-400 hover:scale-125"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-2xl text-white transition duration-300 transform hover:text-blue-400 hover:scale-125"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="text-sm">
          &copy; 2025 Tenge Tenge Movement. All rights reserved. Building
          futures, one block at a time!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
