const bcrypt = require("bcryptjs");

function hashPassword(password) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
}

function comparePassword(rawPassword, hashPassword) {
  return bcrypt.compareSync(rawPassword, hashPassword);
}

module.exports = {
  hashPassword,
  comparePassword,
};
