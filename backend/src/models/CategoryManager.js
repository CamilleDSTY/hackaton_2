const AbstractManager = require("./AbstractManager");

class categoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  insert(category) {
    return this.database.query(
      `insert into ${this.table} (name, min, max) values (?,?,?)`,
      [category.name, category.min, category.max]
    );
  }

  update(category) {
    return this.database.query(
      `update ${this.table} set name = ?, min = ?, max = ? where id = ?`,
      [category.name, category.min, category.max, category.id]
    );
  }
}

module.exports = categoryManager;
