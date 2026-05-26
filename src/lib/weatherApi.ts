import { WeatherData, Coordinates } from '@/types/weather'

const OPEN_WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || 'demo'
const BASE_URL = 'https://api.openweathermap.org'

// Geocoding API - Convert city name to coordinates
export async function fetchCoordinates(cityName: string): Promise<Coordinates> {
  try {
    const response = await fetch(
      `${BASE_URL}/geo/1.0/direct?q=${cityName}&limit=1&appid=${OPEN_WEATHER_API_KEY}`
    )

    if (!response.ok) throw new Error('City not found')

    const data = await response.json()
    if (data.length === 0) throw new Error('City not found')

    return {
      lat: data[0].lat,
      lon: data[0].lon,
    }
  } catch (error) {
    throw new Error('Failed to fetch coordinates')
  }
}

// One Call API - Get current, hourly, and daily forecast
export async function fetchWeatherData(
  lat: number,
  lon: number
): Promise<WeatherData> {
  try {
    const response = await fetch(
      `${BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${OPEN_WEATHER_API_KEY}`
    )

    if (!response.ok) throw new Error('Failed to fetch weather')

    const data = await response.json()

    return {
      current: {
        temp: Math.round(data.current.temp),
        feels_like: Math.round(data.current.feels_like),
        humidity: data.current.humidity,
        pressure: data.current.pressure,
        wind_speed: Math.round(data.current.wind_speed * 3.6), // Convert m/s to km/h
        wind_deg: data.current.wind_deg,
        clouds: data.current.clouds,
        description: data.current.weather[0].main,
        icon: data.current.weather[0].icon,
        uvi: data.current.uvi,
        visibility: Math.round(data.current.visibility / 1000), // Convert to km
      },
      hourly: data.hourly.slice(0, 24).map((hour: any) => ({
        dt: hour.dt,
        temp: Math.round(hour.temp),
        description: hour.weather[0].main,
        icon: hour.weather[0].icon,
        pop: hour.pop || 0,
      })),
      daily: data.daily.slice(0, 7).map((day: any) => ({
        dt: day.dt,
        temp: {
          day: Math.round(day.temp.day),
          min: Math.round(day.temp.min),
          max: Math.round(day.temp.max),
        },
        description: day.weather[0].main,
        icon: day.weather[0].icon,
        humidity: day.humidity,
        pop: day.pop || 0,
      })),
    }
  } catch (error) {
    throw new Error('Failed to fetch weather data')
  }
}

// Get weather icon URL
export function getWeatherIconUrl(iconCode: string): string {
  return `https://openweathermap.org/img/wn/${iconCode}@4x.png`
}

// Get weather description with emoji
export function getWeatherEmoji(description: string): string {
  const emojiMap: Record<string, string> = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Smoke': '💨',
    'Haze': '🌫️',
    'Dust': '🌪️',
    'Fog': '🌫️',
    'Sand': '🌪️',
    'Ash': '💨',
    'Squall': '💨',
    'Tornado': '🌪️',
  }
  return emojiMap[description] || '🌤️'
}
