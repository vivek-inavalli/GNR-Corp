const RegisterSection = () => {
  return (
    <div
      className="bg-[#022B45] bg-cover bg-center py-20 px-4 text-white flex justify-center"
      style={{ backgroundImage: "url('/your-background-image.jpg')" }} // Replace with your actual image path
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-4xl font-semibold mb-4">Register for the Event</h2>
        <p className="mb-8 text-lg">
          Join us for the Miss Adhra and Miss Telangana event. Register your
          interest today!
        </p>
        <button className="bg-blue-200 text-black font-semibold px-6 py-2 rounded-full hover:bg-blue-300">
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterSection;
