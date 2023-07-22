import request from "./_RequestBuilder";
import { jsonify } from "./_Utils";

const PREFIX = "parrot-db";

export default {
  async getLatestData() {
    const response = await request.get(`${PREFIX}/latest`);
    return jsonify(response);
  },
  async getDailyDataOfCountry(countryCode) {
    const response = await request.get(`${PREFIX}/daily/${countryCode}`);
    return jsonify(response);
  },
};
