import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from '../icons'

function ImageCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  if (!images || images.length === 0) return null

  return (
    <div className="relative h-72 md:h-[500px] overflow-hidden">

      {/* Carousel viewport */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative flex-none w-full h-full"
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {/* Prev button */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full p-2 hover:bg-white/30 transition"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Next button */}
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full p-2 hover:bg-white/30 transition"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              selectedIndex === index
                ? 'bg-white w-6'
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Image counter */}
      <div className="absolute top-4 right-14 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
        {selectedIndex + 1} / {images.length}
      </div>

    </div>
  )
}

export default ImageCarousel