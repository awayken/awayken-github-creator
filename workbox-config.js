module.exports = {
	globDirectory: 'awayken.github.io/',
	globPatterns: [
		'**/*.{js,html,css}'
	],
	swDest: 'awayken.github.io/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};