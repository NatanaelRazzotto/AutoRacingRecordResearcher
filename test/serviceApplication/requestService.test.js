const {
	RequestService,
} = require('../../src/serviceApplication/requestService');

describe('RequestService', () => {
	let requestService;
	beforeEach(() => {
		requestService = new RequestService();
	});

	it('Requisition users', async () => {
		const received = await requestService.request(
			'https://ergast.com/api/f1/drivers/alonso.json'
		);
		// eslint-disable-next-line no-console
		console.log(received);
		expect(received).toEqual(
			expect.objectContaining({
				MRData: expect.any(Object),
			})
		);
	});

	it('Requisition User Promisse', async () => {
		const received = await requestService.requestFetch(
			'https://ergast.com/api/f1/drivers/alonso.json'
		);
		// eslint-disable-next-line no-console
		console.log(received);
		expect(received).toEqual(
			expect.objectContaining({
				MRData: expect.any(Object),
			})
		);
	});
});
