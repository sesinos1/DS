
//IMPORTS ⬇︎
const db = require('../../data/dbConfig.js');

//EXPORTS ⬇︎
module.exports = {
    get,
    add,
    update,
    remove
}

//GET ALL MANAGER ⬇︎
function get() {
    return db( 'users' );
};
    
//ADD TO MANAGER ⬇︎
function add (step) {

   
};

//UPDATE TO MANAGER ⬇︎
function update (id, changes) {

};

//DELET FROM MANAGER ⬇︎
function remove (id) {

};