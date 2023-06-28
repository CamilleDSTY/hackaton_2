const AbstractManager = require("./AbstractManager");

class ramManager extends AbstractManager {
  constructor() {
    super({ table: "ram" });
  }

  insert(ram) {
    return this.database.query(
      `insert into ${this.table} (nb_ram, value) values (?,?)`,
      [ram.nb_ram, ram.value]
    );
  }

  update(ram) {
    return this.database.query(
      `update ${this.table} set nb_ram = ?, value = ? where id = ?`,
      [ram.nb_ram, ram.value, ram.id]
    );
  }
}

module.exports = ramManager;
