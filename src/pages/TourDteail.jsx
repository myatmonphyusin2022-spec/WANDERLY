import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tours } from "../data";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useCurrency } from "../context/CurrencyContext";
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
  const { convert } = useCurrency();
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
      <div className="relative h-72 md:h-[500px] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />

        {/* Back button */}
        <button
          onClick={() => navigate("/tours")}
          className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-3 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-white/30 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Wishlist button */}
        <button
          onClick={() => toggleWishlist(tourAsDestination)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-5 h-5 transition ${
              isWishlisted(tour.id)
                ? "fill-red-500 text-red-500"
                : "text-gray-400"
            }`}
          />
        </button>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-2">
              {tour.name}
            </h1>
            <p className="text-white/70 text-sm mb-4 max-w-xl">
              {tour.description}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1 text-white/80 text-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                {tour.rating} rating
              </span>
              <span className="flex items-center gap-1 text-white/80 text-sm">
                <Clock className="w-4 h-4" />
                {tour.duration}
              </span>
              <span className="flex items-center gap-1 text-white/80 text-sm">
                <Users className="w-4 h-4" />
                {tour.groupSize}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">About this tour</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* What's included */}
            <div>
              <h2 className="text-2xl font-bold mb-6">What's included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.includes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-teal-50 rounded-2xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
                    <p className="text-sm font-medium text-teal-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why book */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Why book with us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Expert local guides with years of experience",
                  "Small group sizes for a personalized experience",
                  "All logistics handled — just show up and enjoy",
                  "24/7 support before and during your trip",
                  "Flexible cancellation up to 48 hours before",
                  "Best price guarantee — we match any lower price",
                ].map((reason, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-gray-50 rounded-2xl p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-6">
            <Card className="sticky top-24 shadow-lg border-0 overflow-hidden">
              {/* Price header */}
              <div className="bg-teal-600 p-6">
                <p className="text-teal-100 text-xs mb-1">Starting from</p>
               <p className="text-white font-bold text-sm">{convert(tour.price)}</p>
                <p className="text-teal-100 text-xs mt-1">per person</p>
              </div>

              <CardContent className="p-6 flex flex-col gap-4">
                {/* Quick info */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Duration</span>
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Group size</span>
                    <span className="font-medium">{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Rating</span>
                    <span className="font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      {tour.rating}
                    </span>
                  </div>
                </div>

                {/* Includes */}
                <div>
                  <p className="text-sm font-semibold mb-3">Includes</p>
                  <div className="flex flex-col gap-2">
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
                </div>

                <Button
                  className="bg-teal-600 hover:bg-teal-700 text-white w-full gap-2 rounded-xl"
                  onClick={() => setBookingOpen(true)}
                >
                  Book now
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-teal-600 text-teal-600 rounded-xl"
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

        {/* Other tours */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Other tours you might like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours
              .filter((t) => t.id !== tour.id)
              .slice(0, 3)
              .map((t) => (
                <div
                  key={t.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/tours/${t.id}`)}
                >
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                      <div>
                        <h3 className="font-bold text-white text-base">
                          {t.name}
                        </h3>
                        <p className="text-white/70 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {t.duration}
                        </p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                        <p className="text-white font-bold text-sm">
                          {convert(tour.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
