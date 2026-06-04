import { useState } from "react";
import { tours } from "../data";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Star, Clock, Users, CheckCircle, ArrowRight } from "../icons";

function Tours() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-teal-600 mb-2">
            Our packages
          </p>
          <h1 className="text-4xl font-bold mb-3">Tour Packages</h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Choose from our carefully crafted tour packages for every type of
            traveler.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className={`overflow-hidden hover:shadow-md transition cursor-pointer border-2 ${
                selected === tour.id ? "border-teal-600" : "border-transparent"
              }`}
              onClick={() => setSelected(tour.id)}
            >
              {/* Image */}
              <div
                className={`${tour.bg} h-44 flex items-center justify-center text-6xl relative`}
              >
                {tour.emoji}
                {selected === tour.id && (
                  <Badge className="absolute top-3 right-3 bg-teal-600 text-white">
                    Selected ✓
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-3">{tour.name}</h3>

                {/* Details */}
                <div className="flex items-center gap-4 mb-3">
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
              Ready to book? Contact us and we'll get you started!
            </p>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white gap-2">
              Proceed to booking
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Tours;
