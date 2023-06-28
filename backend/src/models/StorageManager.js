const AbstractManager = require("./AbstractManager");

class storageManager extends AbstractManager {
  constructor() {
    super({ table: "storage" });
  }

  insert(storage) {
    return this.database.query(
      `insert into ${this.table} (nb_storage, value) values (?,?)`,
      [storage.nb_storage, storage.value]
    );
  }

  update(storage) {
    return this.database.query(
      `update ${this.table} set nb_storage = ?, value = ? where id = ?`,
      [storage.nb_storage, storage.value, storage.id]
    );
  }
}

module.exports = storageManager;
