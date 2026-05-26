'use client'

import { motion } from 'framer-motion'
import { DailyData } from '@/types/weather'
import { getWeatherIconUrl, getWeatherEmoji } from '@/lib/weatherApi'
import Image from 'next/image'
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'

interface WeeklyForecastProps {
  data: DailyData[]
}

export default function WeeklyForecast({ data }: WeeklyForecastProps) {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <motion.div
      className="bg-dark-light border border-accent/20 rounded-2xl p-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-6 gradient-text">7 Day Forecast</h3>

      <div className="space-y-3">
        {data.map((day, index) => {
          const date = new Date(day.dt * 1000)
          const dayName = dayNames[date.getDay()]
          const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

          return (
            <motion.div
              key={day.dt}
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 rounded-xl hover:border-accent/50 transition-all duration-200"
              whileHover={{ x: 10, borderColor: '#a78bfa' }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {/* Day and Date */}
              <div className="min-w-[80px]">
                <p className="font-bold text-white">{dayName}</p>
                <p className="text-xs text-gray-400">{dateStr}</p>
              </div>

              {/* Weather Icon */}
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={getWeatherIconUrl(day.icon)}
                  alt={day.description}
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>

              {/* Description */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{getWeatherEmoji(day.description)}</span>
                  <p className="text-sm text-gray-300">{day.description}</p>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                  <FiDroplets size={14} className="text-blue-400" />
                  <span>Humidity: {day.humidity}%</span>
                  {day.pop > 0 && (
                    <>
                      <span>•</span>
                      <span>Rain: {Math.round(day.pop * 100)}%</span>
                    </>
                  )}
                </div>
              </div>

              {/* Temperature Range */}
              <div className="min-w-[100px] text-right">
                <div className="flex items-center justify-end gap-1 mb-1">
                  <FiTrendingUp size={16} className="text-red-400" />
                  <span className="font-bold text-lg text-white">{day.temp.max}°</span>
                </div>
                <div className="flex items-center justify-end gap-1">
                  <FiTrendingDown size={16} className="text-blue-400" />
                  <span className="text-gray-400">{day.temp.min}°</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
