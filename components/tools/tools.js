import axios from "axios";
import axiosRetry from "axios-retry";

axiosRetry(axios, { retries: 5 });
// Exponential back-off retry delay between requests
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

const brawlhallaApi = axios.create({
  baseURL: "https://brawlhalla.fly.dev/v1",
});

export class BhApiService {
  static async GetDataByBhid(id) {
    const { data } = await brawlhallaApi.get(`/stats/id?brawlhalla_id=${id}`);

    return data;
  }

  static async GetRankedDataByBhid(id) {
    return brawlhallaApi.get(`ranked/id?brawlhalla_id=${id}`);
  }
}
