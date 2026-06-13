import { Badge } from "./ui/badge";
import { MapPin, Star, Clock, Heart, ArrowRight } from "../icons";
import { destinations } from "../data";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";
import AnimatedCard from "./AnimatedCard";
import { motion } from "framer-motion";

function DestinationCards() {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const navigate = useNavigate();
  const { convert } = useCurrency();

  return (
    <section className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-end mb-10 md:mb-14"
        >
          <div>
            <p className="text-xs tracking-widest uppercase text-teal-600 mb-3 font-medium">
              ✈ Explore now
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Popular Destinations
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-sm">
              Handpicked destinations loved by thousands of travelers
            </p>
          </div>
          <button
            className="hidden md:flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-medium group"
            onClick={() => navigate("/destinations")}
          >
            See all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.slice(0, 3).map((dest, index) => (
            <AnimatedCard key={dest.id} delay={index * 0.1}>
              <div
                className="group cursor-pointer"
                onClick={() => navigate(`/destinations/${dest.id}`)}
              >
                {/* Image container */}
                <div className="relative h-64 md:h-72 rounded-3xl overflow-hidden mb-4 shadow-xl">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge */}
                  <Badge className="absolute top-4 left-4 bg-teal-600/90 backdrop-blur-sm text-white border-0 rounded-full px-3">
                    {dest.badge}
                  </Badge>

                  {/* Heart button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(dest);
                    }}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 shadow hover:bg-white/40 transition-all duration-200 border border-white/30"
                  >
                    <Heart
                      className={`w-4 h-4 transition ${
                        isWishlisted(dest.id)
                          ? "fill-red-500 text-red-500"
                          : "text-white"
                      }`}
                    />
                  </button>

                  {/* Bottom info on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    {/* Glass card */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-white text-base leading-tight">
                            {dest.name}
                          </h3>
                          <p className="text-white/60 text-xs flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" />
                            {dest.region}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold text-sm">
                            {convert(dest.price)}
                          </p>
                          <p className="text-white/50 text-xs">per person</p>
                        </div>
                      </div>

                      {/* Rating and duration */}
                      <div className="flex items-center gap-3 mt-2 pt-2 border-t border-white/20">
                        <span className="flex items-center gap-1 text-xs text-white/70">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          {dest.rating}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white/70">
                          <Clock className="w-3 h-3 text-teal-400" />
                          {dest.duration}
                        </span>
                        <button
                          className="ml-auto text-xs bg-teal-500/80 hover:bg-teal-500 text-white px-3 py-1 rounded-full transition-all duration-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/destinations/${dest.id}`);
                          }}
                        >
                          View →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Mobile see all button */}
        <div className="flex md:hidden justify-center mt-8">
          <button
            className="flex items-center gap-2 text-sm text-teal-600 font-medium border border-teal-600 px-6 py-2.5 rounded-full hover:bg-teal-50 transition"
            onClick={() => navigate("/destinations")}
          >
            See all destinations
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default DestinationCards;
