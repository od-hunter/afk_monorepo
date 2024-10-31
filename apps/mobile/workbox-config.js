module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,png,ttf,svg,ico,html,json,webmanifest}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};