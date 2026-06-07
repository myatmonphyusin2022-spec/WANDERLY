import { useState } from "react";
import { tours } from "../data";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Star, Clock, Users, CheckCircle, ArrowRight } from "../icons";
import BookingDialog from "../components/BookingDialog";

function Tours() {
  const [selected, setSelected] = useState(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

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
    <main className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-teal-600 mb-2">
            Our packages
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Tour Packages</h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Choose from our carefully crafted tour packages for every type of
            traveler.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className={`overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 ${
                selected === tour.id ? "border-teal-600" : "border-transparent"
              }`}
              onClick={() => setSelected(tour.id)}
            >
              {/* Image */}
              <div className="h-48 md:h-44 relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {selected === tour.id && (
                  <Badge className="absolute top-3 right-3 bg-teal-600 text-white">
                    Selected ✓
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-2">{tour.name}</h3>

                {/* Description */}
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                  {tour.description}
                </p>

                {/* Details */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3 text-teal-600" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Users className="w-3 h-3 text-teal-600" />
                    {tour.groupSize}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    {tour.rating}
                  </span>
                </div>

                {/* Includes */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.includes.map((item, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs bg-teal-50 text-teal-600 px-2 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-teal-600 font-bold">
                    from {tour.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 text-white gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookNow(tour);
                    }}
                  >
                    Book now
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
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
  );
}

export default Tours;
