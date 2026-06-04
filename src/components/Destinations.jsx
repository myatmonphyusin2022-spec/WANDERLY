const destinations = [
  {
    name: "Bali, Indonesia",
    region: "Southeast Asia",
    price: "$899",
    emoji: "🏝️",
    bg: "bg-teal-50",
  },
  {
    name: "Paris, France",
    region: "Europe",
    price: "$1,199",
    emoji: "🗼",
    bg: "bg-indigo-50",
  },
  {
    name: "Dubai, UAE",
    region: "Middle East",
    price: "$1,050",
    emoji: "🏜️",
    bg: "bg-orange-50",
  },
  {
    name: "Tokyo, Japan",
    region: "East Asia",
    price: "$1,300",
    emoji: "🗾",
    bg: "bg-pink-50",
  },
  {
    name: "New York, USA",
    region: "North America",
    price: "$950",
    emoji: "🗽",
    bg: "bg-blue-50",
  },
  {
    name: "Santorini, Greece",
    region: "Europe",
    price: "$1,400",
    emoji: "🏛️",
    bg: "bg-green-50",
  },
];

function Destinations() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
              Explore now
            </p>
            <h2 className="text-2xl font-bold">Popular Destinations</h2>
          </div>
          <a href="#" className="text-sm text-teal-600 hover:underline">
            See all →
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-md transition"
            >
              {/* Image */}
              <div
                className={`${dest.bg} h-40 flex items-center justify-center text-6xl`}
              >
                {dest.emoji}
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-base mb-1">{dest.name}</h3>
                <p className="text-xs text-gray-400 mb-3">📍 {dest.region}</p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-600 font-bold">
                    from {dest.price}
                  </span>
                  <button className="bg-teal-50 text-teal-600 px-4 py-2 rounded-lg text-xs hover:bg-teal-600 hover:text-white transition">
                    Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
