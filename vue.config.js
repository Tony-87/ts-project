const path = require('path')
const webpack = require('webpack')
module.exports = {
    publicPath: './',
    filenameHashing: true,
    configureWebpack: {
        devServer: {
            disableHostCheck: true,
            // host: 'local.jd.com',
            port: '80'
        },
        plugins:[
            new webpack.ProvidePlugin({
                $:'jquery',
                jQuery:'jquery',
                'window.jQuery':'jquery' ,
                moment:'moment',
                _:'lodash'
            
            })
        ]
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].minify = false
            return args
        })
    } 
}