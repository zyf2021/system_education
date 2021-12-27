const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    plugins: [
        new NodePolyfillPlugin()
    ],
    resolve:
        {
            fallback: 
                { 
                    http: require.resolve("stream-http"),
                    path: require.resolve("path-browserify"),
                    fs: false,
                    zlib: require.resolve("browserify-zlib"),

                }
        }
}