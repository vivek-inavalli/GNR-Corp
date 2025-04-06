import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <img src={logo} className="h-[100px] w-[200px]" />
          <p className="mb-4 text-sm">
            Subscribe to our newsletter for the latest updates on the event and
            more.
          </p>
          <form className="flex items-center max-w-sm">
            {/* <input
              type="email"
              placeholder="Your email here"
              className="p-2 rounded-l-md border border-gray-400 text-black w-full"
            /> */}
            <button
              type="submit"
              className="px-4 py-2 bg-gray-100 text-black rounded font-semibold hover:bg-gray-200"
            >
              Register
            </button>
          </form>
          <p className="text-xs mt-2">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </p>
        </div>

        <div className="hidden md:block" />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#">
              <Facebook size={18} />
            </a>
            <a href="#">
              <Instagram size={18} />
            </a>
            <a href="#">
              <Twitter size={18} />
            </a>
            <a href="#">
              <Linkedin size={18} />
            </a>
            <a href="#">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 GNR Corp. All rights reserved.</p>
        <div className="space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
