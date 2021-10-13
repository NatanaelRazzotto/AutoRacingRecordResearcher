const { RepositoryCircuits } = require('../../repository/sequelize/repositoryClass/repositoryCircuits');

class FetchCircuitUseCase {
    constructor(requestService) {
        this.repositoryCircuits = new RepositoryCircuits();
    }
    async persistenceOfObjects(object) {
        const objectResult = this.preparObjectCircuit(object);
        const persisted = await this.repositoryCircuits.create(objectResult);
        return persisted;
    }

    preparObjectCircuit(Circuit) {
        const objectCircuit = {
            circuitRef: Circuit.circuitId,//circuitId
            name: Circuit.circuitName,//circuitName
            location: Circuit.Location.locality,//locality
            country: Circuit.Location.country,//country
            lat: Circuit.Location.lat,//lat
            lng: Circuit.Location.long,//long
            url: Circuit.url//url
        }
        return objectCircuit;
    }
}
module.exports = { FetchCircuitUseCase };