module.exports = {
	flightScrappper: {
		periods: 90,
		interval: 72,
		routes: [{
			from: 'LIS',
			to: 'HEL'
		}, {
			from: 'LIS',
			to: 'SKD'
		}, {
			from: 'LIS',
			to: 'AMS'
		}, {
			from: 'LIS',
			to: 'HKT'
		}, {
			from: 'LIS',
			to: 'SIN'
		}, {
			from: 'LIS',
			to: 'RAK'
		}, {
			from: 'LIS',
			to: 'CPT'
		}, {
			from: 'LIS',
			to: 'KHI'
		}, {
			from: 'LIS',
			to: 'BOM'
		}, {
			from: 'LIS',
			to: 'JKT'
		}, {
			from: 'LIS',
			to: 'BKK'
		}, {
			from: 'LIS',
			to: 'LIM'
		}, {
			from: 'LIS',
			to: 'SFO'
		}, {
			from: 'LIS',
			to: 'MNL'
		}, {
			from: 'LIS',
			to: 'SHA'
		}, {
			from: 'LIS',
			to: 'YTO'
		}, {
			from: 'LIS',
			to: 'LPB'
		}, {
			from: 'LIS',
			to: 'MAA'
		}, {
			from: 'LIS',
			to: 'TYO'
		}, {
			from: 'LIS',
			to: 'DPS'
		}, {
			from: 'LIS',
			to: 'MLE'
		}, {
			from: 'LIS',
			to: 'LAD'
		}, {
			from: 'LIS',
			to: 'DXB'
		}, {
			from: 'LIS',
			to: 'SYD'
		}, {
			from: 'LIS',
			to: 'MPM'
		}, {
			from: 'LIS',
			to: 'MOW'
		}, {
			from: 'LIS',
			to: 'RIO'
		}, {
			from: 'LIS',
			to: 'NYC'
		}],
		currency: 'EUR',
		directFlight: 'false',
		dateFormat: 'DD-MM-YYYY',
		database: 'localhost:27017/flight-scrappper',
		collection: 'flight-data',
		timeout: 50000
	},
	cronPattern: '0 0 0 */1 * *'
};