const AbstractManager = require("./AbstractManager");

class configMinManager extends AbstractManager {
  constructor() {
    super({ table: "config_min" });
  }

  update(configMin) {
    return this.database.query(
      `update ${this.table} set nb_ram = ?, storage = ?, network = ?, screen = ?, charger = ?,  cable = ? where id = ?`,
      [
        configMin.nb_ram,
        configMin.storage,
        configMin.network,
        configMin.screen,
        configMin.charger,
        configMin.cable,
        configMin.id,
      ]
    );
  }
}

module.exports = configMinManager;
