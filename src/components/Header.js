// Header Component
import mainlogo from "../assets/images/tengelogo.png";
const Header = ({ isNavOpen, toggleNav }) => {
  return (
    <header className="sticky top-0 z-50 p-4 bg-white shadow-lg rounded-b-xl">
      <nav className="container flex flex-wrap items-center justify-between mx-auto">
        {/* Logo/Title */}
        <a
          href="#home"
          className="flex items-center space-x-2 text-2xl font-bold md:text-3xl text-gradient"
        >
          <img src={mainlogo} className="w-16 h-auto" />
          <span>Tenge Tenge Movement</span>
        </a>

        {/* Mobile Menu Toggle */}
        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            onClick={toggleNav}
            className="flex items-center px-3 py-2 text-blue-600 border border-blue-400 rounded hover:text-blue-800 hover:border-blue-600"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isNavOpen ? "block" : "hidden"
          }`}
          id="nav-content"
        >
          <div className="text-lg lg:flex-grow lg:text-right">
            <a
              href="#home"
              className="block p-2 mt-4 mr-4 text-gray-700 transition duration-300 ease-in-out rounded-lg lg:inline-block lg:mt-0 hover:text-blue-500 hover:bg-blue-100"
            >
              Home
            </a>
            <a
              href="#about"
              className="block p-2 mt-4 mr-4 text-gray-700 transition duration-300 ease-in-out rounded-lg lg:inline-block lg:mt-0 hover:text-blue-500 hover:bg-blue-100"
            >
              About Our Quest
            </a>
            <a
              href="#flow"
              className="block p-2 mt-4 mr-4 text-gray-700 transition duration-300 ease-in-out rounded-lg lg:inline-block lg:mt-0 hover:text-blue-500 hover:bg-blue-100"
            >
              Our Awesome Impact Flow!
            </a>
            <a
              href="#partners"
              className="block p-2 mt-4 mr-4 text-gray-700 transition duration-300 ease-in-out rounded-lg lg:inline-block lg:mt-0 hover:text-blue-500 hover:bg-blue-100"
            >
              Our Amazing Friends!
            </a>
            <a
              href="#involved"
              className="block p-2 mt-4 mr-4 text-gray-700 transition duration-300 ease-in-out rounded-lg lg:inline-block lg:mt-0 hover:text-blue-500 hover:bg-blue-100"
            >
              Join the Army!
            </a>
            <a
              href="#contact"
              className="block p-2 mt-4 text-gray-700 transition duration-300 ease-in-out rounded-lg lg:inline-block lg:mt-0 hover:text-blue-500 hover:bg-blue-100"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
