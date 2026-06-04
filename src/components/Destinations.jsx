import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { MapPinIcon } from "../icons";

const destinations = [
  {
    name: "Bali, Indonesia",
    region: "Southeast Asia",
    price: "$899",
    emoji: "🏝️",
    bg: "bg-teal-50",
    badge: "Trending",
  },
  {
    name: "Paris, France",
    region: "Europe",
    price: "$1,199",
    emoji: "🗼",
    bg: "bg-indigo-50",
    badge: "Popular",
  },
  {
    name: "Dubai, UAE",
    region: "Middle East",
    price: "$1,050",
    emoji: "🏜️",
    bg: "bg-orange-50",
    badge: "New",
  },
  {
    name: "Tokyo, Japan",
    region: "East Asia",
    price: "$1,300",
    emoji: "🗾",
    bg: "bg-pink-50",
    badge: "Trending",
  },
  {
    name: "New York, USA",
    region: "North America",
    price: "$950",
    emoji: "🗽",
    bg: "bg-blue-50",
    badge: "Popular",
  },
  {
    name: "Santorini, Greece",
    region: "Europe",
    price: "$1,400",
    emoji: "🏛️",
    bg: "bg-green-50",
    badge: "New",
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
          <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
            See all →
          </Button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition"
            >
              {/* Image */}
              <div
                className={`${dest.bg} h-40 flex items-center justify-center text-6xl relative`}
              >
                {dest.emoji}
                <Badge className="absolute top-3 left-3 bg-teal-600 hover:bg-teal-700 text-white">
                  {dest.badge}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-1">{dest.name}</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1 mb-3">
                  <MapPinIcon />
                  {dest.region}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-teal-600 font-bold">
                    from {dest.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-teal-50 text-teal-600 hover:bg-teal-600 hover:text-white border border-teal-200"
                    variant="outline"
                  >
                    Book now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinations;
