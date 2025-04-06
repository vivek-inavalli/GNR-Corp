// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../public/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white px-2 py-2 flex justify-between items-center z-50 shadow-md rubik h-[90px]">
      <div className="flex items-center space-x-6">
        <div className="text-2xl font-bold text-blue-600">
          <img src={logo} alt="logo" className="h-[100px] w-[200px]" />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#events" className="text-gray-700 hover:text-blue-600">
            Event Info
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">
            About Us
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              Media <ChevronDown size={16} className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded-md shadow-lg z-10">
                <a
                  href="#youtube"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  YouTube
                </a>
                <a
                  href="#instagram"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Instagram
                </a>
                <a
                  href="#twitter"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Twitter
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Link to="/register">
          <button className="bg-blue-200 text-black font-bold py-2 px-6 rounded-full border-0  shadow-md hover:bg-blue-300">
            Register
          </button>
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white border-t md:hidden z-20 overflow-hidden"
          >
            <a
              href="#events"
              className="block px-4 py-2 border-b hover:bg-gray-100"
            >
              Event Page
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 border-b hover:bg-gray-100"
            >
              Contact Us
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 border-b hover:bg-gray-100"
            >
              Us
            </a>

            <div className="border-b">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Media
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 pb-2 overflow-hidden"
                  >
                    <a
                      href="#youtube"
                      className="block py-1 hover:underline  ml-3"
                    >
                      YouTube
                    </a>
                    <a
                      href="#instagram"
                      className="block py-1 hover:underline ml-3"
                    >
                      Instagram
                    </a>
                    <a
                      href="#twitter"
                      className="block py-1 hover:underline ml-3"
                    >
                      Twitter
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="px-4 py-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Register
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
