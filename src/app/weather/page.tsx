'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import WeatherCard from '@/components/Weather/WeatherCard'
import HourlyForecast from '@/components/Weather/HourlyForecast'
import WeeklyForecast from '@/components/Weather/WeeklyForecast'
import SearchCity from '@/components/Weather/SearchCity'
import { fetchWeatherData, fetchCoordinates } from '@/lib/weatherApi'
import { WeatherData } from '@/types/weather'
import { FiMapPin, FiLoader } from 'react-icons/fi'

export default function WeatherDashboard() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [city, setCity] = useState('Bangkok')
  const [coordinates, setCoordinates] = useState({ lat: 13.7563, lon: 100.5018 })

  // Fetch weather data
  const loadWeather = async (cityName?: string, lat?: number, lon?: number) => {
    setLoading(true)
    setError('')

    try {
      const finalLat = lat ?? coordinates.lat
      const finalLon = lon ?? coordinates.lon

      const data = await fetchWeatherData(finalLat, finalLon)
      setWeather(data)

      if (cityName) {
        setCity(cityName)
      }
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.')
      console.error('Weather fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  // Handle city search
  const handleCitySearch = async (cityName: string) => {
    try {
      setLoading(true)
      const coords = await fetchCoordinates(cityName)
      setCoordinates(coords)
      setCity(cityName)
      await loadWeather(cityName, coords.lat, coords.lon)
    } catch (err) {
      setError('City not found. Please try another city.')
      setLoading(false)
    }
  }

  // Load initial weather on mount
  useEffect(() => {
    loadWeather()
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 bg-gradient-to-br from-dark via-dark-light to-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 gradient-text">Weather Dashboard</h1>
          <p className="text-gray-300 text-lg">Real-time weather information for any location</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <SearchCity onSearch={handleCitySearch} isLoading={loading} />
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300"
          >
            {error}
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <FiLoader className="text-4xl text-accent animate-spin" />
          </div>
        )}

        {/* Weather Content */}
        {weather && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* Current Weather */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <WeatherCard weather={weather} city={city} />
            </motion.div>

            {/* Hourly & Weekly Forecast */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <HourlyForecast data={weather.hourly} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <WeeklyForecast data={weather.daily} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  )
}
