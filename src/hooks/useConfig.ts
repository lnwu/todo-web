type Config = {
  [key in typeof process.env.REACT_APP_STAGE]: {
    env: string;
    api: string;
  };
};

export const useConfig = () => {
  const config: Config = {
    local: {
      env: "本地环境",
      api: "http://api.lnwu.site:8080",
    },
    development: {
      env: "开发测试环境",
      api: "http://api.lnwu.site:8080",
    },
    staging: {
      env: "稳定体验环境",
      api: "http://api.lnwu.site:8081",
    },
    production: {
      env: "线上环境",
      api: "http://api.lnwu.site:8081",
    },
  };

  return config[process.env.REACT_APP_STAGE];
};
