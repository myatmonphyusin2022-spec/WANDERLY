const features = [
  {
    icon: "🛡️",
    title: "Safe & trusted",
    desc: "All tours are verified and fully insured for your peace of mind.",
  },
  {
    icon: "💰",
    title: "Best price guarantee",
    desc: "We match any lower price you find, no questions asked.",
  },
  {
    icon: "🎧",
    title: "24/7 support",
    desc: "Our team is always available before and during your trip.",
  },
  {
    icon: "🗺️",
    title: "Custom itineraries",
    desc: "We build personalized travel plans that fit your style and budget.",
  },
];

function Features() {
  return (
    <section className="bg-teal-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
          Why choose us
        </p>
        <h2 className="text-2xl font-bold mb-8">
          Travel smarter with Wanderly
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="font-semibold text-sm">{feature.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
