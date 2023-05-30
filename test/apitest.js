import axios from "axios";
import axiosRetry from 'axios-retry';
import { stringify } from "postcss";

let names = [];
let promises = [];
var user;


function download(text, name, type) {
    var a = document.getElementById("a");
    var file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
}

var request = axios.create({ baseURL: "https://brawlhalla.fly.dev/v1" });

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

for (var i = 0; i < 3; i++) {
    // ID: 3532085

    axiosRetry(request, { retries: 5 })

    promises.push(
        request.get(`/stats/id?brawlhalla_id=${3532085 + i}`)
            .then(response => {
                console.log(`Id: ${3532085 + i} | Status: ${response.status}`)
                names.push(response.data.data.name);
            }
            ));
};

Promise.all(promises).then(() => console.log(names));