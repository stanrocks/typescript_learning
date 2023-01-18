// https://webpack.js.org/guides/typescript/
const path = require("path");
// https://www.npmjs.com/package/clean-webpack-plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "production",
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
	plugins: [
		// https://www.npmjs.com/package/clean-webpack-plugin
		/**
		 * All files inside webpack's output.path directory will be removed once, but the
		 * directory itself will not be. If using webpack 4+'s default configuration,
		 * everything under <PROJECT_DIR>/dist/ will be removed.
		 * Use cleanOnceBeforeBuildPatterns to override this behavior.
		 *
		 * During rebuilds, all webpack assets that are not used anymore
		 * will be removed automatically.
		 *
		 * See `Options and Defaults` for information
		 */
		new CleanWebpackPlugin(),
	],
};
