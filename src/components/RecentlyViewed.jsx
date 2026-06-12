import { useRecentlyViewed } from '../context/RecentlyViewedContext'
import { useNavigate } from 'react-router-dom'
import { useCurrency } from '../context/CurrencyContext'
import { MapPin, Clock } from '../icons'
import { motion } from 'framer-motion'

function RecentlyViewed() {
  const { recentlyViewed } = useRecentlyViewed()
  const navigate = useNavigate()
  const { convert } = useCurrency()

  if (recentlyViewed.length === 0) return null

  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs tracking-widest uppercase text-teal-600 mb-2 font-medium">
            👀 Your history
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Recently Viewed
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {recentlyViewed.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => navigate(`/destinations/${dest.id}`)}
            >
              <div className="relative h-36 md:h-44 rounded-2xl overflow-hidden mb-3">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-white text-sm leading-tight">
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-xs flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    {dest.region}
                  </p>
                </div>
              </div>
              <div className="px-1 flex justify-between items-center">
                <span className="text-teal-600 font-bold text-sm">
                  {convert(dest.price)}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {dest.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default RecentlyViewed