var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable:{'/tp/public/api2':{target:'http://10.2.153.118',changeOrigin: true}}
})
