import Link from "next/link";
import Button from "../commons/Button";

const Header: React.FC = () => {
  return (
    <header className="h-28 flex items-center bg-[#171D22] px-4 md:px-16 lg:px-44 text-white sticky top-0 z-50">
      <div className="flex items-center justify-between w-full">
        <Link
          href="/"
          className="text-xl md:text-4xl font-semibold hover:text-[#E2D609] transition-colors"
        >
          Cine<span className="text-[#E2D609]">Seek</span>
        </Link>

        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          <Link
            href="/"
            className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold"
          >
            Home
          </Link>
          <Link
            href="/movies"
            className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold"
          >
            Movies
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#E2D609] px-4 md:px-8 text-xl transition-colors duration-300 font-semibold"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
          </div>
          <Button
            title="Sign in"
            action={() => console.log("Sign in clicked")}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
