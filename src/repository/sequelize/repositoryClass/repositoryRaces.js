const { ModelRaces } = require('../model/modelRaces');

class RepositoryRaces {
    async create(races) {
        const received = await ModelRaces.create(races);
        return received.dataValues;
    }

    async findAll() {
        const users = await ModelRaces.findAll();
        return users;
    }
}

module.exports = { RepositoryRaces };