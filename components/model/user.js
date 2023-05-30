const { apiStats, apiRanked } = require("../data/testdata");

export default class User{
    constructor(username, bhid, country){
        this.username = username,
        this.bhid = bhid,
        this.country = country,
        this.stats = apiStats,
        this.ranked = apiRanked
    }
}