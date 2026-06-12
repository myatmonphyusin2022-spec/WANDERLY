import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { destinations } from "../data";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import {
  MapPin,
  Star,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Heart,
  ArrowLeft,
} from "../icons";
import { useRecentlyViewed } from "../context/RecentlyViewedContext";
import BookingDialog from "../components/BookingDialog";
import { useCurrency } from "../context/CurrencyContext";
import { useWishlist } from "../context/WishlistContext";
import PageTransition from "../components/PageTransition";
import ImageCarousel from "../components/ImageCarousel";

function DestinationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { convert } = useCurrency();
  const { addToRecentlyViewed } = useRecentlyViewed();
  const [bookingOpen, setBookingOpen] = useState(false);

  // dest must be defined BEFORE useEffect
  const dest = destinations.find((d) => d.id === parseInt(id));

  // useEffect AFTER dest
  useEffect(() => {
    if (dest) {
      addToRecentlyViewed(dest);
    }
  }, [dest]);
  if (!dest) {
    return (
      <div className="text-center py-20">
        <p className="text-4xl mb-4">🔍</p>
        <p className="text-gray-400 mb-4">Destination not found!</p>
        <Button
          className="bg-teal-600 hover:bg-teal-700 text-white"
          onClick={() => navigate("/destinations")}
        >
          Back to destinations
        </Button>
      </div>
    );
  }

  return (
    <PageTransition>
      <main className="pb-16">
        {/* Hero Carousel */}
        <div className="relative">
          <ImageCarousel images={dest.images || [dest.image]} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

          {/* Back button */}
          <button
            onClick={() => navigate("/destinations")}
            className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-3 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-white/30 transition z-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {/* Wishlist button */}
          <button
            onClick={() => toggleWishlist(dest)}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:scale-110 transition-transform z-10"
          >
            <Heart
              className={`w-5 h-5 transition ${
                isWishlisted(dest.id)
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400"
              }`}
            />
          </button>

          {/* Hero content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-10">
            <div className="max-w-6xl mx-auto">
              <Badge className="bg-teal-600 text-white mb-3">
                {dest.badge}
              </Badge>
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-2">
                {dest.name}
              </h1>
              <p className="text-white/70 flex items-center gap-1 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                {dest.region}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1 text-white/80 text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {dest.rating} ({dest.reviews} reviews)
                </span>
                <span className="flex items-center gap-1 text-white/80 text-sm">
                  <Clock className="w-4 h-4" />
                  {dest.duration}
                </span>
                <span className="flex items-center gap-1 text-white/80 text-sm">
                  <Users className="w-4 h-4" />
                  Max 12 people
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
                <h2 className="text-2xl font-bold mb-4">About {dest.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {dest.description}
                </p>
              </div>

              {/* Why famous */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Why {dest.name.split(",")[0]} is so famous
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dest.famous.map((fact, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-teal-50 rounded-2xl p-4"
                    >
                      <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Top Highlights</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {dest.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="relative h-24 rounded-2xl overflow-hidden cursor-pointer"
                      style={{ background: `hsl(${i * 60 + 160}, 40%, 85%)` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center p-3">
                        <p className="text-sm font-semibold text-center text-gray-700">
                          {highlight}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="flex flex-col gap-6">
              <Card className="sticky top-24 shadow-lg border-0 overflow-hidden">
                <div className="bg-teal-600 p-6">
                  <p className="text-teal-100 text-xs mb-1">Starting from</p>
                  <p className="text-4xl font-bold text-white">
                    {convert(dest.price)}
                  </p>
                  <p className="text-teal-100 text-xs mt-1">per person</p>
                </div>

                <CardContent className="p-6 flex flex-col gap-4">
                  <div>
                    <p className="text-sm font-semibold mb-3">
                      What's included
                    </p>
                    <div className="flex flex-col gap-2">
                      {dest.includes.map((item, i) => (
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
                    onClick={() => toggleWishlist(dest)}
                  >
                    <Heart
                      className={`w-4 h-4 mr-2 ${
                        isWishlisted(dest.id) ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                    {isWishlisted(dest.id)
                      ? "Saved to wishlist"
                      : "Save to wishlist"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Similar destinations */}
          {destinations.filter(
            (d) => d.id !== dest.id && d.region === dest.region,
          ).length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">You might also like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {destinations
                  .filter((d) => d.id !== dest.id && d.region === dest.region)
                  .slice(0, 3)
                  .map((d) => (
                    <div
                      key={d.id}
                      className="group cursor-pointer"
                      onClick={() => navigate(`/destinations/${d.id}`)}
                    >
                      <div className="relative h-48 rounded-2xl overflow-hidden mb-3">
                        <img
                          src={d.image}
                          alt={d.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                          <div>
                            <h3 className="font-bold text-white text-base">
                              {d.name}
                            </h3>
                            <p className="text-white/70 text-xs flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {d.region}
                            </p>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                            <p className="text-white font-bold text-sm">
                              {convert(d.price)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Booking Dialog */}
        <BookingDialog
          open={bookingOpen}
          onClose={() => setBookingOpen(false)}
          destination={dest}
        />
      </main>
    </PageTransition>
  );
}

export default DestinationDetail;
