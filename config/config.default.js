/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1552982076756_9627';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    okcmsApi: 'https://api.iokzy.com/inc/apidown.php',
    morecmsApi: 'http://www.zdziyuan.com/inc/s_api_zuidall.php',
  };

  return {
    ...config,
    ...userConfig,
  };
};
