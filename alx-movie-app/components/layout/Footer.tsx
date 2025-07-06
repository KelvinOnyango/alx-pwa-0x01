import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171D22] text-white py-10 px-6 md:px-10 lg:px-20 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xl md:text-4xl font-semibold mb-4 md:mb-0 hover:text-[#E2D609] transition-colors"
        >
          Cine<span className="text-[#E2D609]">Seek</span>
        </Link>

        <nav className="flex-1 flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
          <Link
            href="/"
            className="hover:text-[#E2D609] text-lg transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/movies"
            className="hover:text-[#E2D609] text-lg transition-colors duration-300"
          >
            Movies
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#E2D609] text-lg transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="hover:text-[#E2D609] text-lg transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </nav>

        <div className="flex space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E2D609] text-xl transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E2D609] text-xl transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E2D609] text-xl transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} CineSeek. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
