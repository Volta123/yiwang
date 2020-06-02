module.exports = {
    chainWebpack: config => {
        config.module.rule('pug')
            .test(/\.pug$/)
            .use('pug-html-loader')
            .loader('pug-html-loader')
            .end()
    },
    devServer: {
        proxy: "http://10.3.14.30:3000"
    },
    productionSourceMap: false
}