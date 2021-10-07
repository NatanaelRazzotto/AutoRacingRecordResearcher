const {
	RequestService,
} = require('../../../src/serviceApplication/requestService');
const {
	FetchResultRaceUseCase,
} = require('../../../src/UseCase/raceResultUseCase/fetchResultRaceUseCase');

describe('RaceResultUseCase', () => {
	const requestService = new RequestService();
	let fetchResultRaceUseCase;
	beforeAll(() => {
		fetchResultRaceUseCase = new FetchResultRaceUseCase(requestService);
	});

	it('Serach URL ', async () => {
		const configureFilter = {
			year: 2020,
			round: 17,
			grid: 3,
		};
		const resultRace = await fetchResultRaceUseCase.fecthResults(
			configureFilter
		);
		console.log(resultRace);
		expect(resultRace.MRData.RaceTable).toEqual(
			expect.objectContaining({
				season: expect.any(String),
			}),
			expect.arrayContaining([
				expect.objectContaining({
					round: expect.any(String),
				}),
			])
		);
	});

	it('Fetch Data execute ', async () => {
		const configureFilter = {
			year: 2020,
			round: 17,
			grid: 3,
		};
		const resultRace = await fetchResultRaceUseCase.fetchExecute(
			configureFilter
		);
		// eslint-disable-next-line no-console
		console.log(resultRace);
		expect(resultRace.Results).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					number: expect.any(String),
					position: expect.any(String),
					positionText: expect.any(String),
					Driver: expect.any(Object),
					Constructor: expect.any(Object),
				}),
			])
		);
	});

	it('Fetch Data ', async () => {
		const configureFilter = {
			year: 1960,
			round: 5,
		};
		const resultRace = await fetchResultRaceUseCase.executeGerador(
			configureFilter
		);
		// eslint-disable-next-line no-console
		console.log(resultRace);
		expect(resultRace.Results).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					number: expect.any(String),
					position: expect.any(String),
					positionText: expect.any(String),
					Driver: expect.any(Object),
					Constructor: expect.any(Object),
				}),
			])
		);
	});
});
