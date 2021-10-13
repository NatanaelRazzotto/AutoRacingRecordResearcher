const { RepositoryRaces } = require('../../repository/sequelize/repositoryClass/repositoryRaces');
const {
    FetchCircuitUseCase,
} = require("../../UseCase/circuitUseCase/fetchCircuitUseCase")

class FetchRacesUseCase {
    constructor(requestService) {
        this.repositoryRaces = new RepositoryRaces();
        this.fetchCircuitUseCase = new FetchCircuitUseCase();
    }
    async persistenceOfObjects(Resultados) {
        const circuitPersistido = await this.fetchCircuitUseCase.persistenceOfObjects(Resultados.Circuit);
        const objectResult = this.preparObjectRaces(Resultados, circuitPersistido.circuitId);
        const persisted = await this.repositoryRaces.create(objectResult);
        return persisted;
    }

    preparObjectRaces(Races, idCircuit) {
        const objectRaces = {
            year: Races.season,
            round: Races.round,
            circuitId: idCircuit,//indianapolis,
            name: Races.raceName,//raceName
            date: Races.date,
            time: Races.time,
            url: Races.url
        }
        return objectRaces;
    }
}
module.exports = { FetchRacesUseCase };