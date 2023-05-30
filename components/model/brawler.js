class Brawler {
    constructor() {
      this.brawlhalla_id = 0;
      this.name = "";
      this.xp = 0;
      this.level = 0;
      this.xp_percentage = 0;
      this.games = 0;
      this.wins = 0;
      this.damagebomb = "";
      this.damagemine = "";
      this.damagespikeball = "";
      this.damagesidekick = "";
      this.hitsnowball = 0;
      this.kobomb = 0;
      this.komine = 0;
      this.kospikeball = 0;
      this.kosidekick = 0;
      this.kosnowball = 0;
      this.legends = [];
      this.clan = new Clan();
      this.lastSynced = 0;
    }
  }