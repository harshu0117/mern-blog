import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Brand */}
                <a
                    href="/"
                    className="text-xl font-bold "
                >
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Hershey's</span>{" "}
                       Blog
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-6">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <AiOutlineSearch
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                    </div>

                    <a href="/" className="hover:text-gray-700">
                        Home
                    </a>
                    <a href="/about" className="hover:text-gray-700">
                        About
                    </a>
                    <a href="/projects" className="hover:text-gray-700">
                        Projects
                    </a>

                    {/* Moon Icon */}
                    <button
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                        aria-label="Toggle dark mode"
                    >
                        <FaMoon size={17} className="text-indigo-500" />
                    </button>

                    {/* Sign In Button */}
                    <a href="/sign-in">
                        <button className="px-4 py-2 text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-lg shadow-lg hover:opacity-90">
                            Sign In
                        </button>
                    </a>
                </div>

                {/* Hamburger Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white flex flex-col items-center space-y-4 py-4 shadow-md">
                    <a
                        href="/"
                        className="hover:text-gray-700"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="/about"
                        className="hover:text-gray-700"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="/projects"
                        className="hover:text-gray-700"
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </a>

                    {/* Moon Icon for Mobile */}
                    <button
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                        aria-label="Toggle dark mode"
                    >
                        <FaMoon size={17} className="text-indigo-500" />
                    </button>

                    {/* Sign In Button */}
                    <a href="/sign-in">
                        <button className="px-4 py-2 text-white bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-lg shadow-lg hover:opacity-90">
                            Sign In
                        </button>
                    </a>
                </div>
            )}
        </header>
    );
}
