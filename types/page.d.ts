/**
 * @采购订单
 */
interface ITableData {
  order: number;
  date: string;
  status: string;
  endDate: string;
  tips: string;
  applicant: string;
};

/**
 * @高德天气数据
 */
interface IWeather {
  status: number,
  count: number,
  info: string,
  infocode: number,
  lives: [
    {
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
      reporttime: string,
      temperature_float: number,
      humidity_float: number
    }
  ]
};
