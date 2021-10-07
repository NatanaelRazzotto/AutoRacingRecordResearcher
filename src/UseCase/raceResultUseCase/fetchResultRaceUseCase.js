const {
  RandomNumberService,
} = require("../../serviceDomain/randomNumberService");
const {
  UrlService,
} = require("../../serviceDomain/urlService");

class FetchResultRaceUseCase {
  constructor(requestService) {
    this.races = [];
    this.requestService = requestService;
    this.randomNumberService = new RandomNumberService();
  }

  async execute(configureFilter) {
    const fetch = await this.fecthResults(configureFilter);
    const table = this.getRaceTable(fetch);
    const results = this.getResults(table);
    return results;
  }

  async executeGerador(configure) {
    this.configurations = configure;
    const configureFilter = this.generateParamURL();
    const resultExecute = await this.fetchExecute(configureFilter);
    return resultExecute;
  }

  async fetchExecute(configureFilter) {
    const fetchData = await this.fecthResults(configureFilter); // .MRData.RaceTable
    this.fetch = fetchData.MRData.RaceTable;
    // const table = this.getRaceTable();
    const results = this.getResults();
    return results;
  }

  /* async execute(configureFilter) {
    const fetch = await this.fecthResults(configureFilter);
    const table = this.getRaceTable(fetch);
    const results = this.getResults(table);
    return results;
  }

  async executeGerador(configure) {
    const configureFilter = this.generateParamURL(configure);
    const fetch = await this.fecthResults(configureFilter);
    const table = this.getRaceTable(fetch);
    const results = this.getResults(table);
    return results;
  } */

  async fecthResults(configureFilter) {
    const urlSearch = UrlService.generateURLresults(configureFilter);
    console.log(urlSearch);
    const resultFetch = await this.requestService.requestFetch(urlSearch);
    return resultFetch;
  }

  generateParamURL() {
    const numberRound = RandomNumberService.generate(this.configurations.round);
    const yearRace = RandomNumberService.generateYear(
      1951,
      this.configurations.year
    );
    const configureFilter = {
      year: yearRace,
      round: numberRound,
      grid: 3,
    };
    return configureFilter;
  }

  /* generateParamURL(configure) {
    const numberRound = RandomNumberService.generate(configure.round);
    const yearRace = RandomNumberService.generateYear(1951, configure.year);
    const configureFilter = {
      year: yearRace,
      round: numberRound,
      grid: 3,
    };
    return configureFilter;
  } */

  // metodo legado
  //  getRaceTable() {
  //   const object = this.fetch.Races;
  //   return object;
  // }

  getResults() {
    //   var obj = Races.forEach(this.resultsRace)
    // var race = Races[0];
    // race.Results = race.Results.splice(0,5)
    // let index;
    const Resultados = this.fetch.Races[0];
    /*  const results = Resultados.Results;
    for (index = 0; index < results.length; index++) {
      console.log("--Teste--");
      console.log(results[index]);
    } */
    return Resultados;
  }

  resultsRace(item) {
    // this.races[index] = item;
    this.races.push(item);
    return true;
  }
}
module.exports = { FetchResultRaceUseCase };
