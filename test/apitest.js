import axios from "axios";
import axiosRetry from 'axios-retry';

let promises = [];
let names = [];
let id = 3532085;

axiosRetry(axios, { retries: 5 })
// Exponential back-off retry delay between requests
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

let brawlhallaApi = axios.create({ baseURL: "https://brawlhalla.fly.dev/v1" });

function GetDataByBhid(id) {

	let brawlhallaApi = axios.create({ baseURL: "https://brawlhalla.fly.dev/v1" });

	return brawlhallaApi.get(`/stats/id?brawlhalla_id=${id}`)
		// .catch(function (error) {
		// 	console.log(error.toJSON());
		// })
		// .then(function (response) {
		// 	console.log(response.data.data.name)
		// }
		// )
}


// var request = axios.create({ baseURL: "https://brawlhalla.fly.dev/v1" });

// axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

for (var i = 0; i < 1; i++) {
    // ID: 3532085
    promises.push(GetDataByBhid(3532085 + i));
};

Promise.all(promises).then(values => {values.forEach(element => console.log(element.data.data.name))})
