import store from './../store/rootStore';
// import { Cookies } from 'react-cookie';

export default class DataService {
//   private static _instance: DataService = new DataService();
//   private static cookies = new Cookies();
  countStartApi = 0;
  countEndApi = 0;

  constructor() {
    if (DataService._instance) {
      throw new Error('Use DataService.instance');
    }
    DataService._instance = this;
  }

  static get instance() {
    return DataService._instance;
  }

  async MakeAPICall(data) {
    let requestBody = {};

    if (data && data.isLoader !== false) {
      this.countStartApi += 1;
      store.dispatch({ type: 'REQUEST', status: 'REQUESTED' });
    }

    if (data && data.body) {
        requestBody = data.body;
    }

    const promise = await fetch(process.env.REACT_APP_BASE_URL + data.url, {
      method: data.body ? 'POST' : 'GET',
      headers: new Headers({
        AccessToken: '',   //cookies.get('access_token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }),
      body: data.body ? JSON.stringify(requestBody) : null
    }).then(response => response.json());
    if (promise) {
      if (data && data.isLoader !== false) {
        this.countEndApi += 1;
        if (this.countStartApi === this.countEndApi) {
          store.dispatch({ type: 'REQUEST', status: 'REQUEST_FULFILLED' });
        }
      }
    }
    return promise;
  }
}
