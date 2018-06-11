exports.keys = "123";


exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '188.0.52.109',
    //   host: '10.251.221.156',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '!QAZ2wsx',
    //   password: 'root',
      // 数据库名
      database: 'robot',
      // dateStrings: Force date types (TIMESTAMP, DATETIME, DATE) to be returned as strings rather then 
      // inflated into JavaScript Date objects. Can be true/false or an array of type names to keep as 
      // strings. (Default: false)
      // dateStrings: 'false',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  
  exports.security = {
    csrf: {
      enable: false,
    },  
  };

  exports.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    allowHeaders :'Content-Type,Content-Length, Authorization, Accept,X-Requested-With',
    credentials: false,
  };

