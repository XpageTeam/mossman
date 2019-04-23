module.exports = {
	formats: 'local woff woff2',
	custom: {
		"Montserrat": {
			variants: {
				normal: {
					300: {
						url: {
							woff: "../fonts/Montserrat/montserrat-light.woff",
							woff2: "../font/Montserrat/montserrat-light.woff2"
						}
					},
					400: {
						url: {
							woff: "../fonts/Montserrat/montserrat-regular.woff",
							woff2: "../font/Montserrat/montserrat-regular.woff2"
						}
					},
					500: {
						url: {
							woff: "../fonts/Montserrat/montserrat-medium.woff",
							woff2: "../font/Montserrat/montserrat-medium.woff2"
						}
					},
					700: {
						url: {
							woff: "../fonts/Montserrat/montserrat-bold.woff",
							woff2: "../fonts/Montserrat/montserrat-bold.woff2",
						}
					}
				}
			}
		},
	}
}