import { Card, CardContent } from "./ui/card";
import { Star } from "../icons";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "👩",
    rating: 5,
    text: "Wanderly made our Bali trip absolutely magical! Every detail was perfectly planned and the support team was always available. Best travel experience of my life!",
    destination: "Bali, Indonesia",
  },
  {
    id: 2,
    name: "James Chen",
    location: "London, UK",
    avatar: "👨",
    rating: 5,
    text: "Booked the Paris getaway package and it exceeded all expectations. The hotel, tours and food recommendations were spot on. Will definitely book again!",
    destination: "Paris, France",
  },
  {
    id: 3,
    name: "Amira Hassan",
    location: "Dubai, UAE",
    avatar: "👩‍💼",
    rating: 5,
    text: "The Tokyo tour was incredible! Our guide was knowledgeable and friendly. Wanderly truly knows how to create unforgettable memories.",
    destination: "Tokyo, Japan",
  },
  {
    id: 4,
    name: "Carlos Rivera",
    location: "Madrid, Spain",
    avatar: "🧑",
    rating: 4,
    text: "Great experience overall! The Santorini trip was breathtaking. Smooth booking process and excellent customer service throughout.",
    destination: "Santorini, Greece",
  },
];

function Testimonials() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-teal-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs tracking-widest uppercase text-teal-600 mb-2">
            What they say
          </p>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Travelers love Wanderly ❤️
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Real stories from real travelers who explored the world with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <Card
              key={t.id}
              className="hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-4 md:p-5 flex flex-col gap-3">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-4">
                  "{t.text}"
                </p>

                {/* Destination tag */}
                <span className="text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded-full w-fit border border-teal-100">
                  ✈️ {t.destination}
                </span>

                {/* Author */}
                <div className="flex items-center gap-3 mt-2 pt-3 border-t border-gray-100">
                  <span className="text-2xl">{t.avatar}</span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
