module.exports = {
    entry: "./components/start.tsx",
    output: {
        path: "./app/js",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
      loaders: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        { test: /\.scss$/, loaders: ["style", "css", "sass"]}
      ]
    }
};
