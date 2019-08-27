exports.seed = function(knex) {
  return knex("users").insert([
    { username: "rowValue12", password: "password" },
    { username: "rowValue22", password: "password" },
    { username: "rowValue32", password: "password" }
  ]);
};
