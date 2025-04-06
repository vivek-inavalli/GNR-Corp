const HeroSection = () => {
  return (
    <section className="bg-[#022B45] text-white py-16 px-4 text-center comfortaa">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          Welcome to Miss Andhra Pradesh & <br className="hidden md:block" />
          Miss Telangana 2025
        </h1>
        <p className="text-sm md:text-base mb-8 text-gray-200">
          Join us for an unforgettable celebration of beauty, culture, and
          talent at the Miss Andhra Pradesh &
          <br className="hidden md:block" />
          Miss Telangana 2023 event. Witness the crowning of the new queens who
          will represent our
          <br className="hidden md:block" />
          vibrant states!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-200 text-black font-semibold py-2 px-6 rounded-full border border-black shadow hover:bg-blue-300 transition">
            Register
          </button>
          <button className="bg-gray-100 text-black font-semibold py-2 px-6 rounded-full border border-black shadow hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
