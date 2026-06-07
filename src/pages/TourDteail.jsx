import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tours } from "../data";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  Star,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Heart,
} from "../icons";
import BookingDialog from "../components/BookingDialog";
import { useWishlist } from "../context/WishlistContext";

function TourDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [bookingOpen, setBookingOpen] = useState(false);

  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return (
      <div className="text-center py-20">
        <p className="text-4xl mb-4">🔍</p>
        <p className="text-gray-400 mb-4">Tour not found!</p>
        <Button
          className="bg-teal-600 hover:bg-teal-700 text-white"
          onClick={() => navigate("/tours")}
        >
          Back to tours
        </Button>
      </div>
    );
  }

  const tourAsDestination = {
    id: tour.id,
    name: tour.name,
    region: "Worldwide",
    price: tour.price,
    rating: tour.rating,
    reviews: 0,
    duration: tour.duration,
    image: tour.image,
    description: tour.description,
    includes: tour.includes,
  };

  return (
    <main className="pb-16">
      {/* Hero image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Back button */}
        <button
          onClick={() => navigate("/tours")}
          className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-3 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-white/30 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {tour.name}
          </h1>
          <p className="text-white/80 text-sm">{tour.description}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8">
        {/* Quick info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <Card>
            <CardContent className="p-4 flex flex-col gap-1">
              <p className="text-xs text-gray-400">Rating</p>
              <p className="font-semibold flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                {tour.rating}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col gap-1">
              <p className="text-xs text-gray-400">Duration</p>
              <p className="font-semibold flex items-center gap-1">
                <Clock className="w-4 h-4 text-teal-600" />
                {tour.duration}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col gap-1">
              <p className="text-xs text-gray-400">Group size</p>
              <p className="font-semibold flex items-center gap-1">
                <Users className="w-4 h-4 text-teal-600" />
                {tour.groupSize}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex flex-col gap-1">
              <p className="text-xs text-gray-400">Price</p>
              <p className="font-semibold text-teal-600">from {tour.price}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Description */}
            <div>
              <h2 className="text-xl font-bold mb-3">About this tour</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* What's included */}
            <div>
              <h2 className="text-xl font-bold mb-4">What's included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.includes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-teal-50 rounded-xl px-4 py-3"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
                    <p className="text-sm font-medium text-teal-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why book */}
            <div>
              <h2 className="text-xl font-bold mb-4">Why book with us</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Expert local guides with years of experience",
                  "Small group sizes for a personalized experience",
                  "All logistics handled — just show up and enjoy",
                  "24/7 support before and during your trip",
                  "Flexible cancellation policy up to 48 hours before",
                ].map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-500">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-6">
            <Card className="sticky top-24">
              <CardContent className="p-6 flex flex-col gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-teal-600">
                    {tour.price}
                  </p>
                  <p className="text-xs text-gray-400">per person</p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold">Includes</p>
                  {tour.includes.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <Button
                  className="bg-teal-600 hover:bg-teal-700 text-white w-full gap-2"
                  onClick={() => setBookingOpen(true)}
                >
                  Book now
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full text-teal-600 border-teal-600"
                  onClick={() => toggleWishlist(tourAsDestination)}
                >
                  <Heart
                    className={`w-4 h-4 mr-2 ${isWishlisted(tour.id) ? "fill-red-500 text-red-500" : ""}`}
                  />
                  {isWishlisted(tour.id)
                    ? "Saved to wishlist"
                    : "Save to wishlist"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <BookingDialog
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        destination={tourAsDestination}
      />
    </main>
  );
}

export default TourDetail;
