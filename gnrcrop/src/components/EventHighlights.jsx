import React from "react";
import { Package, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Meet Our Celebrity Judges",
    description:
      "Our esteemed panel includes renowned personalities from the industry.",
  },
  {
    title: "Win Exciting Prizes",
    description: "Participants have the chance to win fabulous rewards.",
  },
  {
    title: "Enjoy a Glamorous Venue",
    description: "The event will be held at a stunning location.",
  },
];

const EventHighlights = () => {
  return (
    <section className="bg-[#022B45] text-white py-20 px-6 flex justify-center">
      <div className="max-w-[900px] w-full text-center">
        {/* Header */}
        <p className="text-sm font-semibold uppercase mb-2">Excitement</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Join Us for a Night of Glamour
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-12 max-w-[700px] mx-auto">
          Experience the thrill of the Miss Adhra and Miss Telangana event.
          Celebrate beauty, talent, and culture in an unforgettable evening.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <Package size={32} className="mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Link to="/register">
            <button className="bg-blue-100 text-black font-semibold py-2 px-6 rounded-full hover:bg-blue-200 transition">
              Register
            </button>
          </Link>
          <Link to="/eventinfo">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
