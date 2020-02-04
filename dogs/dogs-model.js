const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db("dogs").select("id", "name", "description");
}

function findBy(filter) {
  return db("dogs").where(filter);
}

function add(dog) {
  return db("dogs")
    .insert(dog, "id")
    .then(id => {
      findById(id);
    });
}



function findById(id) {
  return db("dogs")
    .where({ id })
    .first();
}

function remove(id) {
    return db('dogs')
    .where('id', id)
    .del();
}

function update(id, changes) {
    return db('dogs')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  }