const database = require('../../../src/repository/sequelize/db');

describe('Repository', () => {
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual('f1Base');
    });
})