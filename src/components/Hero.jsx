import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { PlaneIcon, MapPinIcon } from "../icons";

function Hero() {
  return (
    <section className="bg-teal-50 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
        {/* Tag */}
        <span className="flex items-center gap-2 text-xs tracking-widest uppercase text-teal-600 font-medium">
          <PlaneIcon />
          Explore the world
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Find Your Next <span className="text-teal-600">Dream</span>{" "}
          Destination
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base max-w-md">
          Handpicked tours, breathtaking destinations, and unforgettable
          experiences — all in one place.
        </p>

        {/* Search bar */}
        <div className="flex items-center bg-white border border-gray-200 rounded-xl px-4 py-2 w-full max-w-lg gap-3 mt-2">
          <span className="text-teal-600">
            <MapPinIcon />
          </span>
          <Input
            type="text"
            placeholder="Where do you want to go?"
            className="flex-1 border-none shadow-none outline-none focus-visible:ring-0 text-sm text-gray-700"
          />
          <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg">
            Search
          </Button>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-4">
          <div className="text-center">
            <p className="text-xl font-bold text-teal-600">120+</p>
            <p className="text-xs text-gray-500">Destinations</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-teal-600">8K+</p>
            <p className="text-xs text-gray-500">Happy travelers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold text-teal-600">50+</p>
            <p className="text-xs text-gray-500">Tour packages</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
