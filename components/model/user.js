import GetDataByBhid from "../tools/tools";

const { apiStats, apiRanked } = require("../data/testdata");

export default class User{
    constructor(username, bhid, country){
        this.username = username,
        this.bhid = bhid,
        this.country = country

        // this.getData();
    }

    getData() {
        GetDataByBhid(this.bhid).then(response => this.stats = response.data.data)
    }
}