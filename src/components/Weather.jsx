import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const weatherIcons = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
  Fog: "🌫️",
  Haze: "🌫️",
};

function Weather({ lat, lng, city }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`,
        );
        if (!res.ok) throw new Error("Weather data not available");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (lat && lng) fetchWeather();
  }, [lat, lng]);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-5 text-white animate-pulse">
        <p className="text-sm">Loading weather...</p>
      </div>
    );
  }

  if (error || !weather) {
    return null;
  }

  const condition = weather.weather[0].main;
  const icon = weatherIcons[condition] || "🌡️";
  const temp = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const humidity = weather.main.humidity;
  const windSpeed = Math.round(weather.wind.speed);
  const description = weather.weather[0].description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-5 text-white"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs text-teal-100 mb-1">Current weather</p>
          <p className="font-semibold text-sm">{city}</p>
        </div>
        <span className="text-4xl">{icon}</span>
      </div>

      {/* Temperature */}
      <div className="mb-4">
        <p className="text-5xl font-bold">{temp}°C</p>
        <p className="text-teal-100 text-sm capitalize mt-1">{description}</p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/20 rounded-xl p-2 text-center">
          <p className="text-xs text-teal-100">Feels like</p>
          <p className="font-semibold text-sm">{feelsLike}°C</p>
        </div>
        <div className="bg-white/20 rounded-xl p-2 text-center">
          <p className="text-xs text-teal-100">Humidity</p>
          <p className="font-semibold text-sm">{humidity}%</p>
        </div>
        <div className="bg-white/20 rounded-xl p-2 text-center">
          <p className="text-xs text-teal-100">Wind</p>
          <p className="font-semibold text-sm">{windSpeed} m/s</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Weather;
