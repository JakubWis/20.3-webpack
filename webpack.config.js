const path = require('path');

//webpack.config.js
module.exports = (env) => {
    const environment = env || 'production';

    return {
        mode: environment,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.' + environment + '.bundle.js'
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [{
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        }
                    ]
                }
            ]
        }
    }
};