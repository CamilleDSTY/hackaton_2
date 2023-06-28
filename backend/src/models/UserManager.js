const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, role, mail, hashedPassword) values (?,?,?,?,?)`,
      [user.firstname, user.lastname, user.role, user.mail, user.hashedPassword]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, role = ?, mail = ?, hashedPassword = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.role,
        user.mail,
        user.hashedPassword,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
