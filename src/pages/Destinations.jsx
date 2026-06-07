import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { destinations } from "../data";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { MapPin, Search, Star, Clock, Heart, X } from "../icons";
import BookingDialog from "../components/BookingDialog";
import { useWishlist } from "../context/WishlistContext";

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

function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDest, setSelectedDest] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const { toggleWishlist, isWishlisted } = useWishlist();
  const navigate = useNavigate();

  const query = searchParams.get("search") || "";

  const handleSearch = (value) => {
    setSearchParams({ search: value });
  };

  const handleBookNow = (dest) => {
    setSelectedDest(dest);
    setBookingOpen(true);
  };

  const filtered = destinations.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(query.toLowerCase());
    const matchesRegion =
      selectedRegion === "All" || d.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((dest) => (
            <Card
              key={dest.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
              onClick={() => navigate(`/destinations/${dest.id}`)}
            >
              <div className="h-44 relative overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-teal-600 text-white">
                  {dest.badge}
                </Badge>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(dest);
                  }}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookNow(dest);
                    }}
                  >
                    Book now
                  </Button>
                </div>
              </CardContent>
            </Card>
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
  );
}

export default Destinations;
