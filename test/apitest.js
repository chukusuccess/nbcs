import axios from "axios";
import axiosRetry from 'axios-retry';
import { stringify } from "postcss";

let promises = [];
let names = [];

async function GetDataByBhid(id, output) {

    let brawlhallaApi = axios.create({ baseURL: "https://brawlhalla.fly.dev/v1" });

    axiosRetry(brawlhallaApi, { retries: 5 })

    return brawlhallaApi.get(`/stats/id?brawlhalla_id=${id}`)
        .catch(err => { console.log("Erreur") })
        .then(response => {
            // console.log(response.statusText)
            console.log(response.data.data.name)
            
        }
        )
}


// var request = axios.create({ baseURL: "https://brawlhalla.fly.dev/v1" });

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

for (var i = 0; i < 100; i++) {
    // ID: 3532085
    promises.push(GetDataByBhid(3532085 + i));
};

// Promise.all(promises).then(values => {console.log(values)})

