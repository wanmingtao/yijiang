var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable:{'/tp/public/api2':{target:'119.29.203.150',changeOrigin: true}}
})
