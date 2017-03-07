const path = require('path')
const express = require('express')
const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')
const compiler = webpack(config);

const resolve = file => path.resolve(__dirname, file)
const app = express()

app.use(WebpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
}))

app.use(WebpackHotMiddleware(compiler, {
    log: console.log
}))

const port = process.env.PORT || 8080
const host = process.env.HOST || 'iwm.baidu.com'
app.listen(port, host, () => {
    console.log(`server started at ${host}:${port}`)
})
