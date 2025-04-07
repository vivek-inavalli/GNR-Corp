const images = [
  "https://picsum.photos/300/200?random=1",
  "https://picsum.photos/300/200?random=2",
  "https://picsum.photos/300/200?random=3",
  "https://picsum.photos/300/200?random=4",
  "https://picsum.photos/300/200?random=5",
  "https://picsum.photos/300/200?random=6",
  "https://picsum.photos/300/200?random=7",
];

const SlidingGallery = () => {
  return (
    <div className="bg-[#022B45] py-10 overflow-hidden">
      <div className="whitespace-nowrap animate-slide-right flex space-x-4 mb-6">
        {[...images, ...images].map((src, i) => (
          <img
            key={`top-${i}`}
            src={src}
            alt={`img-${i}`}
            className="w-60 h-40 object-cover rounded shadow"
          />
        ))}
      </div>

      <div className="whitespace-nowrap animate-slide-left flex space-x-4">
        {[...images, ...images].map((src, i) => (
          <img
            key={`bottom-${i}`}
            src={src}
            alt={`img-${i}`}
            className="w-60 h-40 object-cover rounded shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default SlidingGallery;
