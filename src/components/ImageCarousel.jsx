import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";

function ImageCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  // Autoplay every 3 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-72 md:h-[500px]">
      {/* Embla viewport */}
      <div className="overflow-hidden h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-none w-full h-full"
              style={{ flex: "0 0 100%" }}
            >
              <img
                src={img}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index ? "bg-white w-6" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
