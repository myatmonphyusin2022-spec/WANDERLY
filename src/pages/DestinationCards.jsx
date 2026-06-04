import { useState } from "react";
import { destinations } from "../data";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { MapPin, Search, Star, Clock, Heart } from "../icons";

function Destinations() {
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState([]);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="py-16 px-6">
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
        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-2 max-w-lg mx-auto gap-3 mb-10">
          <Search className="text-teal-600 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search destinations..."
            className="border-none shadow-none focus-visible:ring-0 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dest) => (
            <Card
              key={dest.id}
              className="overflow-hidden hover:shadow-md transition"
            >
              {/* Image */}
              <div
                className={`${dest.bg} h-44 flex items-center justify-center text-6xl relative`}
              >
                {dest.emoji}
                <Badge className="absolute top-3 left-3 bg-teal-600 text-white">
                  {dest.badge}
                </Badge>
                <button
                  onClick={() => toggleLike(dest.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow"
                >
                  <Heart
                    className={`w-4 h-4 ${liked.includes(dest.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                  />
                </button>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-base mb-1">{dest.name}</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3" />
                  {dest.region}
                </p>
                <p className="text-xs text-gray-500 mb-3">{dest.description}</p>

                {/* Rating and duration */}
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
            <p className="text-gray-400 text-sm">
              No destinations found for "{search}"
            </p>
            <Button
              variant="outline"
              className="mt-4 text-teal-600 border-teal-600"
              onClick={() => setSearch("")}
            >
              Clear search
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Destinations;
