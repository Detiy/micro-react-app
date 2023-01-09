const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`
    config.output.libraryTarget = `umd`
    config.output.globalObject = "window"
    return config
  },
  devServe: (_) => {
    const config = _
    config.header = {
      "Access-Control-Allow-Origin": "*"
    }
    config.historyApiFallback = true
    config.hot = false
    config.watchContentbase = false
    config.liveReload = false
    return config
  }
}