const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, role, email, hashedPassword) values (?,?,?,?,?)`,
      [
        user.firstname,
        user.lastname,
        user.role,
        user.email,
        user.hashedPassword,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, role = ?, email = ?, hashedPassword = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.role,
        user.email,
        user.hashedPassword,
        user.id,
      ]
    );
  }

  findByEmail(email) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE email=?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
