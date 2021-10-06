class FetchDriverUseCase {
  constructor(requestService) {
    this.requestService = requestService;
    this.url = "https://ergast.com/api/f1";
  }

  async execute(configure) {
    const urlFetch = await this.fetchDateDriver(configure);
    return urlFetch;
  }

  async fetchDateDriver(configure) {
    const fetchURL = this.preparFormatURLDriver(configure);
    this.objectResult = await this.requestService.request(fetchURL);
    return this.convertJsonToObject();
  }

  convertJsonToObject() {
    const resultado = this.objectResult.MRData.DriverTable;
    return resultado;
  }

  preparFormatURLDriver(configure) {
    return `${this.url}/drivers/${configure.filter}.json`;
  }
}

module.exports = { FetchDriverUseCase };
