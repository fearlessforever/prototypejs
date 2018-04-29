import config from './src/configs/config.js'
import express from 'express'
import route from './src/configs/route.js'

const app = express()

route(app);


app.listen( process.myconfig.port , process.myconfig.host )

console.log('Server run in localhost:'+ process.myconfig.port +' or '+process.myconfig.host+':'+ process.myconfig.port );