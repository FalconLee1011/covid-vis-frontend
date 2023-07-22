const BASE_URL = process.env.VUE_APP_API_HOST;

function buildURL(url) {
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `${BASE_URL}${url}`;
}

function buildQueryParams(params = {}) {
  const keys = Object.keys(params);
  let query = "";
  keys.forEach((key, index) => {
    const value = params[key];
    query += `${key}=${value}${index == keys.length - 1 ? "" : "&"}`;
  });
  if (query.length) return `?${query}`;
  else return "";
}

async function jsonify(fetchResponse) {
  try {
    return await fetchResponse.clone().json();
  } catch (e) {
    console.warn(`Failed parsing ${fetchResponse.url} as JSON`);
    console.warn(e);
    console.log(fetchResponse);
    return await fetchResponse.text();
  }
}

export { buildURL, buildQueryParams, jsonify };
