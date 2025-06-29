// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center rounded-t-xl mt-16">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-white hover:text-blue-400 text-2xl transform hover:scale-125 transition duration-300"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://x.com/TengeTengeMovement"
            target="_blank"
            className="text-white hover:text-blue-400 text-2xl transform hover:scale-125 transition duration-300"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 text-2xl transform hover:scale-125 transition duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 text-2xl transform hover:scale-125 transition duration-300"
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
