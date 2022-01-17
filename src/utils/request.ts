import {requestParamsT, getParamsT, postParamsT} from '../types';
export default class Request {
  static get(params: getParamsT) {
    return this.request({method: 'GET', ...params});
  }

  static post(params: postParamsT) {
    return this.request({method: 'POST', ...params});
  }

  static async request({url, method, body}: requestParamsT) {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const options = {
      method,
      body,
      headers: {...defaultHeaders},
    };

    if (method === 'GET') {
      delete options.body;
    }

    return fetch(url, options).then(response => {
      return response.json().then(payload => {
        const optionalErrorMessage = payload?.statusMessage;

        if (
          response.status === 500 ||
          (optionalErrorMessage
            ? optionalErrorMessage.toLowerCase()
            : ''
          ).includes('error')
        ) {
          throw payload;
        }

        if (response.status === 200 && payload.error) {
          throw payload;
        }

        if (response.ok) {
          if (response.status === 404) {
            return Promise.resolve();
          }

          return payload;
        }

        if (response.status === 404) {
          return Promise.resolve();
        }

        throw response;
      });
    });
  }
}
