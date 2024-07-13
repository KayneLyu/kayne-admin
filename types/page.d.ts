
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

/**
 * @产品配置
 */
interface IConfiguration {
  id: number,
  device: string,
  name: string,
  type: string,
  create: string,
  update: string
};
