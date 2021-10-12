const { ModelCircuits } = require('../model/modelCircuits');

class RepositoryCircuits {
    async create(Circuits) {
        const received = await ModelCircuits.create(Circuits);
        return received.dataValues;
    }

    async findAll() {
        const users = await ModelUser.findAll();
        return users;
    }
}

module.exports = { RepositoryCircuits };