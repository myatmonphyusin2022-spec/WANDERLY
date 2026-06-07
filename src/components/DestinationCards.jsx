import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MapPin, Star, Clock, Heart, ArrowRight } from "../icons";
import { destinations } from "../data";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

function DestinationCards() {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-8 md:mb-10">
          <div>
            <p className="text-xs tracking-widest uppercase text-teal-600 mb-2 font-medium">
              ✈ Explore now
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.slice(0, 3).map((dest) => (
            <div
              key={dest.id}
              className="group cursor-pointer"
              onClick={() => navigate(`/destinations/${dest.id}`)}
            >
              {/* Image container */}
              <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden mb-4">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge */}
                <Badge className="absolute top-3 left-3 bg-teal-600 text-white">
                  {dest.badge}
                </Badge>

                {/* Heart button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(dest);
                  }}
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-4 h-4 transition ${
                      isWishlisted(dest.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Bottom info on image */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">
                      {dest.name}
                    </h3>
                    <p className="text-white/70 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {dest.region}
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                    <p className="text-white font-bold text-sm">{dest.price}</p>
                  </div>
                </div>
              </div>

              {/* Card info below image */}
              <div className="px-1">
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      {dest.rating}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3 text-teal-600" />
                      {dest.duration}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/destinations/${dest.id}`);
                    }}
                  >
                    View details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationCards;
