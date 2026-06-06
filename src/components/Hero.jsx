import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plane, MapPin, Search } from "../icons";
import { stats } from "../data";

function Hero() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/destinations?search=${search}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section className="bg-teal-50 py-16 md:py-20 px-4 md:px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 md:gap-5">
        {/* Tag */}
        <span className="flex items-center gap-2 text-xs tracking-widest uppercase text-teal-600 font-medium">
          <Plane className="w-4 h-4" />
          Explore the world
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Find Your Next <span className="text-teal-600">Dream</span>{" "}
          Destination
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base max-w-md">
          Handpicked tours, breathtaking destinations, and unforgettable
          experiences — all in one place.
        </p>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-xl px-4 py-2 w-full max-w-lg gap-3 mt-2">
          <div className="flex items-center gap-2 w-full">
            <MapPin className="text-teal-600 w-4 h-4 shrink-0" />
            <Input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 border-none shadow-none focus-visible:ring-0 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white gap-1 w-full sm:w-auto shrink-0"
            onClick={handleSearch}
          >
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>

        {/* Popular searches */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="text-xs text-gray-400">Popular:</span>
          {["Bali", "Paris", "Tokyo", "Dubai"].map((place) => (
            <button
              key={place}
              className="text-xs bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-500 hover:border-teal-600 hover:text-teal-600 transition"
              onClick={() => navigate(`/destinations?search=${place}`)}
            >
              {place}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-10 mt-4 w-full max-w-sm md:max-w-none">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <p className="text-lg md:text-xl font-bold text-teal-600">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
