import { useState } from "react";
import { tours } from "../data";
import { Star, Clock, Users, CheckCircle, ArrowRight } from "../icons";
import BookingDialog from "../components/BookingDialog";

function TourCard({ tour, isSelected, onSelect, onBook }) {
  const diffStyle = {
    Easy: { pill: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
    Moderate: { pill: "bg-amber-50 text-amber-700", dot: "bg-amber-500" },
    Challenging: { pill: "bg-rose-50 text-rose-700", dot: "bg-rose-500" },
  }[tour.difficulty] ?? {
    pill: "bg-zinc-100 text-zinc-600",
    dot: "bg-zinc-400",
  };

  return (
    <article
      onClick={onSelect}
      className={`group relative flex flex-col bg-white cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 ${
        isSelected
          ? "ring-2 ring-teal-500 ring-offset-2 shadow-lg"
          : "ring-1 ring-black/5 shadow-sm"
      }`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Duration — top left */}
        <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
          <Clock className="w-3 h-3" />
          {tour.duration}
        </span>

        {/* Selected check — top right */}
        {isSelected && (
          <span className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-teal-500 shadow-md">
            <CheckCircle className="w-4 h-4 text-white" />
          </span>
        )}

        {/* Price — bottom right */}
        <div className="absolute bottom-3 right-3 rounded-xl bg-white/95 backdrop-blur-sm px-3 py-1.5 text-right shadow-sm">
          <p className="text-[9px] font-semibold uppercase tracking-widest text-zinc-400 leading-none mb-0.5">
            from
          </p>
          <p className="text-sm font-bold text-zinc-900 leading-none">
            {tour.price}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:text-teal-700 transition-colors">
          {tour.name}
        </h3>

        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
          {tour.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1 text-xs text-zinc-500">
            <Users className="w-3.5 h-3.5 text-teal-500" />
            {tour.groupSize}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-zinc-700">{tour.rating}</span>
          </span>
          {tour.difficulty && (
            <span
              className={`ml-auto flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${diffStyle.pill}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${diffStyle.dot}`} />
              {tour.difficulty}
            </span>
          )}
        </div>

        {/* Includes */}
        {tour.includes?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tour.includes.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-medium text-teal-700 ring-1 ring-teal-100"
              >
                <CheckCircle className="w-3 h-3" />
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="h-px bg-zinc-100" />

        {/* Book button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBook(tour);
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 py-2.5 text-sm font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-md active:scale-[0.98]"
        >
          Book now <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}

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
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal-600 mb-3">
            Our packages
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Tour Packages
          </h1>
          <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            Choose from our carefully crafted tour packages for every type of
            traveler.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              isSelected={selected === tour.id}
              onSelect={() =>
                setSelected((prev) => (prev === tour.id ? null : tour.id))
              }
              onBook={handleBookNow}
            />
          ))}
        </div>

        {/* Selection banner */}
        {selected && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-teal-100 bg-teal-50 px-6 py-5">
            <div>
              <p className="font-semibold text-teal-800">
                🎉 {tours.find((t) => t.id === selected)?.name} selected
              </p>
              <p className="mt-0.5 text-sm text-zinc-500">
                Ready to book? Proceed when you're set.
              </p>
            </div>
            <button
              onClick={() =>
                handleBookNow(tours.find((t) => t.id === selected))
              }
              className="flex shrink-0 items-center gap-2 rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-md active:scale-[0.98]"
            >
              Proceed to booking <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <BookingDialog
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        destination={selectedTour}
      />
    </main>
  );
}

export default Tours;
