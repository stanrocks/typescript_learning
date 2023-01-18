// https://webpack.js.org/guides/typescript/
const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.ts",
	devtool: "inline-source-map",
	// https://webpack.js.org/configuration/dev-server/#devserver
	devServer: {
		static: {
			directory: path.join(__dirname, "./"),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist",
	},
};
