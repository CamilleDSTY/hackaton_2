const AbstractManager = require("./AbstractManager");

class modelManager extends AbstractManager {
  constructor() {
    super({ table: "model" });
  }

  insert(model) {
    return this.database.query(
      `insert into ${this.table} (name, image, brand_id) values (?,?,?)`,
      [model.name, model.image, model.brand_id]
    );
  }

  update(model) {
    return this.database.query(
      `update ${this.table} set name = ?, image = ?, brand_id = ? where id = ?`,
      [model.name, model.image, model.brand_id, model.id]
    );
  }

  findAllModels() {
    return this.database.query(
      `select m.name, m.image,m.id, b.title, b.id as brand_id from  ${this.table} as m join brand as b on b.id = m.brand_id`
    );
  }
}

module.exports = modelManager;
