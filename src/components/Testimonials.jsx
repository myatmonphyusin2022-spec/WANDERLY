import { Card, CardContent } from './ui/card'
import { Shield, DollarSign, Headphones, Map } from '../icons'

const features = [
  {
    id: 1,
    icon: <Shield className="w-6 h-6" />,
    title: "Safe & trusted",
    desc: "All tours are verified and fully insured for your peace of mind.",
  },
  {
    id: 2,
    icon: <DollarSign className="w-6 h-6" />,
    title: "Best price guarantee",
    desc: "We match any lower price you find, no questions asked.",
  },
  {
    id: 3,
    icon: <Headphones className="w-6 h-6" />,
    title: "24/7 support",
    desc: "Our team is always available before and during your trip.",
  },
  {
    id: 4,
    icon: <Map className="w-6 h-6" />,
    title: "Custom itineraries",
    desc: "We build personalized travel plans that fit your style and budget.",
  },
]

function Features() {
  return (
    <section className="bg-teal-50 dark:bg-teal-950 py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
            Why choose us
          </p>
          <h2 className="text-xl md:text-2xl font-bold">
            Travel smarter with Wanderly
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="hover:shadow-md transition dark:bg-gray-900 dark:border-gray-800">
              <CardContent className="p-4 md:p-5 flex flex-col gap-3">
                <span className="text-teal-600">
                  {feature.icon}
                </span>
                <h3 className="font-semibold text-sm">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features