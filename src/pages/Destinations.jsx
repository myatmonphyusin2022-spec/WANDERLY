import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { destinations } from "../data";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { MapPin, Search, Star, Clock, Heart, X } from "../icons";
import BookingDialog from "../components/BookingDialog";
import { useCurrency } from "../context/CurrencyContext";
import { useWishlist } from "../context/WishlistContext";
import PageTransition from "../components/PageTransition";
const regions = [
  "All",
  "Southeast Asia",
  "Europe",
  "Middle East",
  "East Asia",
  "North America",
  "Africa",
  "Australia",
  "South America",
];
import AnimatedCard from '../components/AnimatedCard'
function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDest, setSelectedDest] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { convert } = useCurrency();
  const navigate = useNavigate();

  const query = searchParams.get("search") || "";

  const handleSearch = (value) => {
    setSearchParams({ search: value });
  };

  const filtered = destinations.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(query.toLowerCase());
    const matchesRegion =
      selectedRegion === "All" || d.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <PageTransition>
    <main className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-teal-600 mb-2">
            Explore the world
          </p>
          <h1 className="text-4xl font-bold mb-3">All Destinations</h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Browse all our handpicked destinations and find your perfect
            getaway.
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-2 max-w-lg mx-auto gap-3 mb-6">
          <Search className="text-teal-600 w-4 h-4 shrink-0" />
          <Input
            type="text"
            placeholder="Search destinations..."
            className="border-none shadow-none focus-visible:ring-0 text-sm"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {query && (
            <button onClick={() => handleSearch("")}>
              <X className="w-4 h-4 text-gray-400 hover:text-red-500 transition" />
            </button>
          )}
        </div>

        {/* Region filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`text-xs px-4 py-2 rounded-full border transition ${
                selectedRegion === region
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-white text-gray-500 border-gray-200 hover:border-teal-600 hover:text-teal-600"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Results count */}
        {(query || selectedRegion !== "All") && (
          <p className="text-sm text-gray-400 text-center mb-6">
            Showing{" "}
            <span className="text-teal-600 font-semibold">
              {filtered.length}
            </span>{" "}
            {selectedRegion !== "All" && (
              <span>
                destinations in{" "}
                <span className="text-teal-600 font-semibold">
                  {selectedRegion}
                </span>
              </span>
            )}
            {query && <span> for "{query}"</span>}
          </p>
        )}

        {/* Cards grid */}
       {filtered.map((dest, index) => (
  <AnimatedCard key={dest.id} delay={index * 0.05}>
    <div
      className="group cursor-pointer"
      onClick={() => navigate(`/destinations/${dest.id}`)}
    >
      {/* rest of card code stays the same */}
    </div>
  </AnimatedCard>
))}
              {/* Image container */}
              <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden mb-4">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <Badge className="absolute top-3 left-3 bg-teal-600 text-white">
                  {dest.badge}
                </Badge>

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
                    <p className="text-white font-bold text-sm">
                      {convert(dest.price)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info below image */}
              <div className="px-1">
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      {dest.rating} ({dest.reviews})
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

        {/* No results */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-gray-400 text-sm mb-2">No destinations found!</p>
            <p className="text-xs text-gray-300 mb-4">
              Try a different region or search term
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                className="text-teal-600 border-teal-600"
                onClick={() => handleSearch("")}
              >
                Clear search
              </Button>
              <Button
                variant="outline"
                className="text-teal-600 border-teal-600"
                onClick={() => setSelectedRegion("All")}
              >
                Clear filter
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Booking Dialog */}
      <BookingDialog
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        destination={selectedDest}
      />
    </main>
     </PageTransition>
  );
}

export default Destinations;
