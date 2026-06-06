import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { MapPin, Star, Clock, Heart, ArrowRight } from "../icons";
import { destinations } from "../data";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

function DestinationCards() {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-6 md:mb-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
              Explore now
            </p>
            <h2 className="text-xl md:text-2xl font-bold">
              Popular Destinations
            </h2>
          </div>
          <Button
            variant="ghost"
            className="text-teal-600 hover:text-teal-700 gap-1 text-xs md:text-sm"
            onClick={() => navigate("/destinations")}
          >
            See all <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {destinations.slice(0, 3).map((dest) => (
            <Card
              key={dest.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-48 md:h-44 relative overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-teal-600 text-white">
                  {dest.badge}
                </Badge>
                <button
                  onClick={() => toggleWishlist(dest)}
                  className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow"
                >
                  <Heart
                    className={`w-4 h-4 transition ${
                      isWishlisted(dest.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-1">{dest.name}</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3" />
                  {dest.region}
                </p>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                  {dest.description}
                </p>
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {dest.rating} ({dest.reviews})
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3 text-teal-600" />
                    {dest.duration}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-teal-600 font-bold">
                    from {dest.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => navigate("/destinations")}
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

export default DestinationCards;
