const AbstractManager = require("./AbstractManager");

class brandManager extends AbstractManager {
  constructor() {
    super({ table: "brand" });
  }

  insert(brand) {
    return this.database.query(
      `insert into ${this.table} (title, value, logo) values (?,?,?)`,
      [brand.title, brand.value, brand.logo]
    );
  }

  update(brand) {
    return this.database.query(
      `update ${this.table} set value = ?, logo = ? where id = ?`,
      [brand.value, brand.logo, brand.id]
    );
  }
}

module.exports = brandManager;
