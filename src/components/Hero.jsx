import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&auto=format&fit=crop"
          alt="Travel background"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center flex flex-col items-center gap-8">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-teal-400 font-medium bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 shadow-lg"
        >
          <Plane className="w-4 h-4" />
          Explore the world with Wanderly
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white"
        >
          Find Your{" "}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              Dream
            </span>
          </span>
          <br />
          Destination
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
        >
          Handpicked tours, breathtaking destinations, and unforgettable
          experiences — all in one place.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 w-full max-w-2xl gap-3 shadow-2xl border border-white/50 mt-2"
        >
          <div className="flex items-center gap-3 w-full">
            <MapPin className="text-teal-600 w-5 h-5 shrink-0" />
            <Input
              type="text"
              placeholder="Where do you want to go?"
              className="flex-1 border-none shadow-none focus-visible:ring-0 text-sm bg-transparent text-gray-800 placeholder:text-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <button
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white gap-2 w-full sm:w-auto rounded-xl px-6 py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
            onClick={handleSearch}
          >
            <Search className="w-4 h-4" />
            Search
          </button>
        </motion.div>

        {/* Popular searches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-2 flex-wrap justify-center"
        >
          <span className="text-xs text-white/40 font-medium">Trending:</span>
          {["Bali", "Paris", "Tokyo", "Dubai", "Maldives", "Santorini"].map(
            (place, i) => (
              <motion.button
                key={place}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="text-xs bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-white/80 hover:bg-white/20 hover:text-white hover:border-teal-400/50 transition-all duration-200"
                onClick={() => navigate(`/destinations?search=${place}`)}
              >
                {place}
              </motion.button>
            ),
          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 md:gap-16 mt-4 w-full max-w-lg"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
