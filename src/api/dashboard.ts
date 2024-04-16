import { http } from "@/utils/http";

export type IWeatherInfo = {
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
  // 风向
  winddirection: string,
  // 风力级别，单位：级
  windpower: string,
  //空气湿度
  humidity: string,
  // 数据发布的时间
  reporttime: Date,
  temperature_float: number,
  humidity_float: number
}
export const getWeatherInfo = () => {
  return http.request<IWeatherInfo>("get", 'http://localhost:3000/weather')
}
export const getSentence = () => {
  return http.request("get", 'http://localhost:3000/sentence')
}
