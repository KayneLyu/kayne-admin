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
    
  ]
};
