import FetchRequest from "./_FetchRequest";
import { buildURL, buildQueryParams } from "./_Utils";

const BASE_URL = process.env.VUE_APP_API_HOST;

async function _sendRequest(url, request) {
  const response = await fetch(url, request);
  return new Promise((resolve, reject) => {
    try {
      if (response.status / 100 != 2) {
        throw new Error(`Got HTTP ${response.status} when fetching ${url}.`);
      }
      resolve(response);
    } catch (err) {
      console.error(err);
      reject(response);
    }
  });
}

export default {
  get(url, query, extraHeaders = {}) {
    let request = FetchRequest.GET;
    request.headers = {
      ...request.headers,
      ...extraHeaders,
    };
    return _sendRequest(buildURL(url) + buildQueryParams(query), request);
  },
  post(url, body = {}, extraHeaders = {}) {
    let request = FetchRequest.POST;
    request.headers = {
      ...request.headers,
      ...extraHeaders,
    };
    if (body instanceof FormData) {
      request.body = body;
    } else if (body instanceof Object) {
      request.body = JSON.stringify(body);
      request.headers["Content-type"] = FetchRequest.CONTENT_TYPES.json;
    }
    return _sendRequest(buildURL(url), request);
  },
  put(url, body = {}, extraHeaders = {}) {
    let request = FetchRequest.PUT;
    request.headers = {
      ...request.headers,
      ...extraHeaders,
    };
    if (body instanceof FormData) {
      request.body = body;
    } else if (body instanceof Object) {
      request.body = JSON.stringify(body);
      request.headers["Content-type"] = FetchRequest.CONTENT_TYPES.json;
    }
    return _sendRequest(buildURL(url), request);
  },
  delete(url, query, extraHeaders = {}) {
    let request = FetchRequest.DELETE;
    request.headers = {
      ...request.headers,
      ...extraHeaders,
    };
    return _sendRequest(buildURL(url) + buildQueryParams(query), request);
  },
  BASE_URL,
};
