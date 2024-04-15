import { http } from "@/utils/http";

type IWeatherInfo = {
  // 省份
  province: string,
  /*
   * 城市名
  */
  city: string,
  adcode: number,
  // 天气
  weather: string,
  // 天气
  temperature: number,
  // 天气
  winddirection: string,
  // 天气
  windpower: string,
  // 天气
  humidity: string,
  // 天气
  reporttime: Date,
  temperature_float: number,
  humidity_float: number
}
export const getWeatherInfo = () => {
  return http.request<IWeatherInfo>("get", 'http://localhost:3000/weather')
}
