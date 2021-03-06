const env = process.env;
export default {
  //mongodbUri: 'mongodb://localhost:27017/test',
  port: env.PORT || 80,
  host: env.HOST || "0.0.0.0",
  get serverUrl() {
    return `https://${this.host}:${this.port}`;
  }
};
