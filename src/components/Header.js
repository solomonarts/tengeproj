// Header Component
const Header = ({ isNavOpen, toggleNav }) => {
  return (
    <header className="bg-white p-4 shadow-lg rounded-b-xl sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center flex-wrap">
        {/* Logo/Title */}
        <a
          href="#home"
          className="flex items-center space-x-2 text-2xl md:text-3xl font-bold text-gradient"
        >
          <i className="fas fa-cubes text-blue-500 text-3xl md:text-4xl icon-bounce"></i>
          <span>Tenge Tenge Movement</span>
        </a>

        {/* Mobile Menu Toggle */}
        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            onClick={toggleNav}
            className="flex items-center px-3 py-2 border rounded text-blue-600 border-blue-400 hover:text-blue-800 hover:border-blue-600"
          >
            <svg
              className="fill-current h-3 w-3"
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
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-500 mr-4 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-100"
            >
              Home
            </a>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-500 mr-4 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-100"
            >
              About Our Quest
            </a>
            <a
              href="#flow"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-500 mr-4 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-100"
            >
              Our Awesome Impact Flow!
            </a>
            <a
              href="#partners"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-500 mr-4 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-100"
            >
              Our Amazing Partners
            </a>
            <a
              href="#involved"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-500 mr-4 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-100"
            >
              Join the Army!
            </a>
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-blue-500 p-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-100"
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
