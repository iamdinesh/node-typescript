interface Config {
  port: string | number;
}

const config: Config = {
  port: process.env.PORT || 8001
};

export default config;
