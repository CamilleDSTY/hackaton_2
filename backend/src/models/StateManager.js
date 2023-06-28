const AbstractManager = require("./AbstractManager");

class stateManager extends AbstractManager {
  constructor() {
    super({ table: "state" });
  }

  insert(state) {
    return this.database.query(
      `insert into ${this.table} (title, pond) values (?,?)`,
      [state.title, state.pond]
    );
  }

  update(state) {
    return this.database.query(
      `update ${this.table} set title = ?, pond = ? where id = ?`,
      [state.title, state.pond, state.id]
    );
  }
}

module.exports = stateManager;
