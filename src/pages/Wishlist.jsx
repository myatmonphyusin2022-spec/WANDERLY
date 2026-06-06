import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { MapPin, Star, Clock, Heart, ArrowRight } from "../icons";
import BookingDialog from "../components/BookingDialog";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const { wishlist, toggleWishlist, isWishlisted } = useWishlist();
  const [selectedDest, setSelectedDest] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = (dest) => {
    setSelectedDest(dest);
    setBookingOpen(true);
  };

  return (
    <main className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-xs tracking-widest uppercase text-teal-600 mb-2">
            Your saved places
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            My Wishlist ❤️
          </h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            All the destinations you've saved for your next adventure.
          </p>
        </div>

        {/* Empty state */}
        {wishlist.length === 0 && (
          <div className="text-center py-16 md:py-20 flex flex-col items-center gap-4">
            <p className="text-6xl">🗺️</p>
            <p className="text-gray-400 text-sm">
              You haven't saved any destinations yet!
            </p>
            <p className="text-xs text-gray-300 max-w-xs mx-auto">
              Go to Destinations and click the ❤️ heart button to save places.
            </p>
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white gap-2 mt-2"
              onClick={() => navigate("/destinations")}
            >
              Explore destinations
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Cards */}
        {wishlist.length > 0 && (
          <>
            <p className="text-sm text-gray-400 mb-6">
              You have{" "}
              <span className="text-teal-600 font-semibold">
                {wishlist.length}
              </span>{" "}
              saved {wishlist.length === 1 ? "destination" : "destinations"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {wishlist.map((dest) => (
                <Card
                  key={dest.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Image */}
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
                    <h3 className="font-semibold text-base mb-1">
                      {dest.name}
                    </h3>
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
                        onClick={() => handleBookNow(dest)}
                      >
                        Book now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
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

export default Wishlist;
