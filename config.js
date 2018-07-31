var fs = require('fs')
  , path = require('path')
  , storeDir= path.join(__dirname, 'tmp')
if (!fs.existsSync(storeDir)) fs.mkdirSync(storeDir)

module.exports = {
  servers: [
    {
      type: 'http',
      config: {
        port: 80,
        staticDir: path.join(__dirname, 'pages')
      }
    },
    {
      type: 'osc',
      config: {
        port: 9000
      }
    },
    {
      type: 'websockets',
      config: {
        port: 80,
        maxSockets: 20
      }
    }
  ],
  connections: {
    store: storeDir
  }
}
