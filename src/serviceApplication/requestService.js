// import fetch from "node-fetch";

const fetch = require("node-fetch");

class RequestService {
  // eslint-disable-next-line class-methods-use-this
  async request(rota) {
    const response = await fetch(rota);
    const jsonResult = await response.json();
    return jsonResult;
    // return await response.json();
  }

  async requestFetch(FetchAPI) {
    this.urlFetchAPI = FetchAPI;
    const requestURL = await this.requestPromisse();
    return requestURL;
  }

  requestPromisse() {
    const requestFetch = fetch(this.urlFetchAPI)
      .then(response => response.json())
      .then(result => result)
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
    return requestFetch;
  }

}

module.exports = { RequestService };
