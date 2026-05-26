'use client'

import { motion } from 'framer-motion'
import { HourlyData } from '@/types/weather'
import { getWeatherIconUrl, getWeatherEmoji } from '@/lib/weatherApi'
import Image from 'next/image'

interface HourlyForecastProps {
  data: HourlyData[]
}

export default function HourlyForecast({ data }: HourlyForecastProps) {
  return (
    <motion.div
      className="bg-dark-light border border-accent/20 rounded-2xl p-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-6 gradient-text">24 Hour Forecast</h3>

      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {data.map((hour, index) => {
            const date = new Date(hour.dt * 1000)
            const hour24 = date.getHours()
            const isProbabilityRain = hour.pop > 0

            return (
              <motion.div
                key={hour.dt}
                className="flex-shrink-0 bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-xl p-4 min-w-[120px] hover:border-accent/50 transition-all duration-200"
                whileHover={{ scale: 1.05, borderColor: '#a78bfa' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <p className="text-sm font-semibold text-gray-300 mb-2">
                  {String(hour24).padStart(2, '0')}:00
                </p>

                <div className="relative w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                  <Image
                    src={getWeatherIconUrl(hour.icon)}
                    alt={hour.description}
                    width={48}
                    height={48}
                    className="w-10 h-10"
                  />
                </div>

                <p className="text-xl font-bold text-center mb-2">{hour.temp}°</p>

                {isProbabilityRain && (
                  <div className="text-xs text-blue-400 text-center mt-2">
                    🌧️ {Math.round(hour.pop * 100)}%
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center mt-1 line-clamp-1">
                  {getWeatherEmoji(hour.description)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
