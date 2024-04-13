import { http } from "@/utils/http";

export const getWeatherInfo = () => {
  return http.request<IWeather>("get", 'http://localhost:3000/weather')
}
