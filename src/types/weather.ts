export interface WeatherData {
  current: {
    temp: number
    feels_like: number
    humidity: number
    pressure: number
    wind_speed: number
    wind_deg: number
    clouds: number
    description: string
    icon: string
    uvi: number
    visibility: number
  }
  hourly: HourlyData[]
  daily: DailyData[]
}

export interface HourlyData {
  dt: number
  temp: number
  description: string
  icon: string
  pop: number
}

export interface DailyData {
  dt: number
  temp: {
    day: number
    min: number
    max: number
  }
  description: string
  icon: string
  humidity: number
  pop: number
}

export interface Coordinates {
  lat: number
  lon: number
}
