import { useState } from "react";
import { tours } from "../data";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Star, Clock, Users, CheckCircle, ArrowRight } from "../icons";
import BookingDialog from "../components/BookingDialog";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";
import PageTransition from "../components/PageTransition";
import AnimatedCard from '../components/AnimatedCard'
function Tours() {
  const [selected, setSelected] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const navigate = useNavigate();
  const { convert } = useCurrency();

  const handleBookNow = (tour) => {
    setSelectedTour({
      id: tour.id,
      name: tour.name,
      region: "Worldwide",
      price: tour.price,
      rating: tour.rating,
      reviews: 0,
      duration: tour.duration,
      image: tour.image,
      description: tour.description,
    });
    setBookingOpen(true);
  };

  return (
    <PageTransition>
    <main className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-teal-600 mb-2 font-medium">
            🗺️ Our packages
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Tour Packages</h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Choose from our carefully crafted tour packages for every type of
            traveler.
          </p>
        </div>

        {/* Cards */}
        {tours.map((tour, index) => (
  <AnimatedCard key={tour.id} delay={index * 0.05}>
    <div
      className="group cursor-pointer"
      onClick={() => navigate(`/tours/${tour.id}`)}
    >
      {/* rest of card code stays the same */}
    </div>
  </AnimatedCard>
))}
              {/* Image container */}
              <div
                className={`relative h-56 md:h-64 rounded-2xl overflow-hidden mb-4 border-2 transition-all duration-300 ${
                  selected === tour.id
                    ? "border-teal-600"
                    : "border-transparent"
                }`}
              >
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {selected === tour.id && (
                  <Badge className="absolute top-3 right-3 bg-teal-600 text-white">
                    Selected ✓
                  </Badge>
                )}

                {/* Bottom info on image */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">
                      {tour.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-white/70 text-xs">
                        <Clock className="w-3 h-3" />
                        {tour.duration}
                      </span>
                      <span className="flex items-center gap-1 text-white/70 text-xs">
                        <Users className="w-3 h-3" />
                        {tour.groupSize}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
                    <p className="text-white font-bold text-sm">
                      {convert(tour.price)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info below image */}
              <div className="px-1">
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                  {tour.description}
                </p>

                {/* Includes */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {tour.includes.slice(0, 3).map((item, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {tour.rating}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-teal-600 border-teal-600 rounded-lg text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(tour.id);
                      }}
                    >
                      Select
                    </Button>
                    <Button
                      size="sm"
                      className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs gap-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(tour);
                      }}
                    >
                      Book now
                      <ArrowRight className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected tour message */}
        {selected && (
          <div className="mt-10 p-6 bg-teal-50 border border-teal-200 rounded-2xl text-center">
            <p className="text-teal-700 font-semibold mb-2">
              🎉 Great choice! You selected{" "}
              {tours.find((t) => t.id === selected)?.name}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Ready to book? Click below to get started!
            </p>
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white gap-2"
              onClick={() =>
                handleBookNow(tours.find((t) => t.id === selected))
              }
            >
              Proceed to booking
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Booking Dialog */}
      <BookingDialog
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        destination={selectedTour}
      />
    </main>
    </PageTransition>
  );
}

export default Tours;
