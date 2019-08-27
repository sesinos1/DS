
exports.seed = function(knex) {
  return knex("manage").insert([
    {  date: 10/10/2010, time: 23.13, code: 33, value: 14, user_id: 1 },
    {  date: 10/10/2010, time: 13.13, code: 33, value: 10, user_id: 1 },
    {  date: 10/10/2010, time: 3.13, code: 33, value: 15, user_id: 1 },
    {  date: 10/10/2010, time: 21.13, code: 33, value: 17, user_id: 1 },
    {  date: 10/10/2010, time: 12.13, code: 33, value: 10, user_id: 1 },
    {  date: 10/10/2010, time: 15.13, code: 33, value: 12, user_id: 1 },
    {  date: 10/10/2010, time: 11.13, code: 33, value: 13, user_id: 1 },
    {  date: 10/10/2010, time: 22.13, code: 33, value: 14, user_id: 1 }
  ]);
};
