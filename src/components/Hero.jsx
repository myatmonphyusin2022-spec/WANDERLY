import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plane, MapPin, Search } from "../icons";
import { stats } from "../data";
import { motion } from "framer-motion";

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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&auto=format&fit=crop"
          alt="Travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center flex flex-col items-center gap-6">
        {/* Tag */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-teal-400 font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
        >
          <Plane className="w-4 h-4" />
          Explore the world with Wanderly
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
        >
          Find Your Next <span className="text-teal-400">Dream</span>{" "}
          Destination
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-base md:text-lg max-w-xl"
        >
          Handpicked tours, breathtaking destinations, and unforgettable
          experiences — all in one place.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 w-full max-w-xl gap-3 shadow-2xl mt-2"
        >
          <div className="flex items-center gap-2 w-full">
            <MapPin className="text-teal-600 w-5 h-5 shrink-0" />
            <Input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 border-none shadow-none focus-visible:ring-0 text-sm bg-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <Button
            className="bg-teal-600 hover:bg-teal-700 text-white gap-2 w-full sm:w-auto rounded-xl px-6"
            onClick={handleSearch}
          >
            <Search className="w-4 h-4" />
            Search
          </Button>
        </motion.div>

        {/* Popular searches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-2 flex-wrap justify-center"
        >
          <span className="text-xs text-white/50">Popular:</span>
          {["Bali", "Paris", "Tokyo", "Dubai", "Maldives"].map((place, i) => (
            <motion.button
              key={place}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
              className="text-xs bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-white/80 hover:bg-white/20 hover:text-white transition"
              onClick={() => navigate(`/destinations?search=${place}`)}
            >
              {place}
            </motion.button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-6 md:gap-12 mt-4 w-full max-w-lg"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-xs text-white/60 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
      >
        <p className="text-white/50 text-xs">Scroll to explore</p>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
