'use client'

import { motion } from 'framer-motion'
import { WeatherData } from '@/types/weather'
import { getWeatherIconUrl, getWeatherEmoji } from '@/lib/weatherApi'
import { FiDroplets, FiWind, FiEye, FiTrendingUp, FiGauge } from 'react-icons/fi'
import Image from 'next/image'

interface WeatherCardProps {
  weather: WeatherData
  city: string
}

export default function WeatherCard({ weather, city }: WeatherCardProps) {
  const { current } = weather
  const uvIndex = current.uvi
  const uvLevel =
    uvIndex < 3 ? 'Low' : uvIndex < 6 ? 'Moderate' : uvIndex < 8 ? 'High' : 'Very High'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Main Weather Card */}
      <motion.div
        className="lg:col-span-2 bg-gradient-to-br from-accent/20 to-accent-light/10 border border-accent/30 rounded-2xl p-8 backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">{city}</h2>
            <p className="text-gray-400 mb-4">{current.description}</p>
            <div className="text-7xl font-bold gradient-text">{current.temp}°C</div>
            <p className="text-gray-400 mt-2">Feels like {current.feels_like}°C</p>
          </div>
          <div className="relative w-48 h-48 mt-4 md:mt-0">
            <Image
              src={getWeatherIconUrl(current.icon)}
              alt={current.description}
              width={192}
              height={192}
              priority
              className="w-full h-full"
            />
            <div className="absolute -top-2 -right-2 text-6xl"> {getWeatherEmoji(current.description)}</div>
          </div>
        </div>
      </motion.div>

      {/* Weather Details Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:col-span-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* Humidity */}
        <WeatherDetailBox
          icon={<FiDroplets className="text-2xl text-blue-400" />}
          label="Humidity"
          value={`${current.humidity}%`}
          description="Relative humidity"
        />

        {/* Wind Speed */}
        <WeatherDetailBox
          icon={<FiWind className="text-2xl text-cyan-400" />}
          label="Wind Speed"
          value={`${current.wind_speed} km/h`}
          description={`Direction: ${getWindDirection(current.wind_deg)}`}
        />

        {/* Visibility */}
        <WeatherDetailBox
          icon={<FiEye className="text-2xl text-purple-400" />}
          label="Visibility"
          value={`${current.visibility} km`}
          description="Clear view distance"
        />

        {/* Pressure */}
        <WeatherDetailBox
          icon={<FiGauge className="text-2xl text-orange-400" />}
          label="Pressure"
          value={`${current.pressure} hPa`}
          description="Atmospheric pressure"
        />

        {/* UV Index */}
        <WeatherDetailBox
          icon={<FiTrendingUp className="text-2xl text-yellow-400" />}
          label="UV Index"
          value={uvIndex.toFixed(1)}
          description={uvLevel}
        />

        {/* Cloud Coverage */}
        <WeatherDetailBox
          icon={<div className="text-2xl">☁️</div>}
          label="Cloud Coverage"
          value={`${current.clouds}%`}
          description="Sky coverage"
        />
      </motion.div>
    </div>
  )
}

interface WeatherDetailBoxProps {
  icon: React.ReactNode
  label: string
  value: string
  description: string
}

function WeatherDetailBox({
  icon,
  label,
  value,
  description,
}: WeatherDetailBoxProps) {
  return (
    <div className="bg-dark-light border border-accent/20 rounded-xl p-4 hover:border-accent/50 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <p className="text-sm text-gray-400">{label}</p>
      </div>
      <p className="text-2xl font-bold mb-1">{value}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  )
}

function getWindDirection(degrees: number): string {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  const index = Math.round((degrees % 360) / 22.5)
  return directions[index % 16]
}
