import config from './src/config/config.js'
import express from 'express'
import route from './src/config/route.js'

const app = express()

route(app);


app.listen( process.myconfig.port , process.myconfig.host )

console.log('Server run in localhost:'+ process.myconfig.port +' or '+process.myconfig.host+':'+ process.myconfig.port );