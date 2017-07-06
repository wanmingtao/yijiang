var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  proxyTable:{'/tp/public/api1':{target:'http://localhost',changeOrigin: true}}
})
