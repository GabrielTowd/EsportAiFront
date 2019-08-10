import axios from "axios";

const ApiService = {
  queryAI(query) {
    let url = "http://127.0.0.1:8000/analyse";

    return new Promise(resolve => {
      axios
        .post(url, { query: query })
        .then(function(response) {
          // handle success
          resolve(response);
        })
        .catch(function(error) {
          // handle error
          throw new Error(`EsportAI ${error}`);
        });
    });
  }
};

export default ApiService;
