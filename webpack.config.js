module.exports = {
    entry: './src/App.jsx',
    output: {
        filename: 'bundle.js',
        path: './public'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.scss?/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
};
