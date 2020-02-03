
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 1, name: 'Cayde', description: 'Roughly 50lbs'},
        {id: 2, name: 'Leila', description: 'Roughly 25lbs'},
        {id: 3, name: 'Bob', description: 'Roughly 50lbs'},
        {id: 4, name: 'Chris', description: 'Roughly 25lbs'},
        {id: 5, name: 'Kyle', description: 'Roughly 50lbs'},
        {id: 6, name: 'Sam', description: 'Roughly 25lbs'},
        {id: 7, name: 'Bryan', description: 'Roughly 50lbs'},
        {id: 8, name: 'Lee', description: 'Roughly 25lbs'},
        {id: 9, name: 'Mia', description: 'Roughly 50lbs'},
        {id: 10, name: 'Crow', description: 'Roughly 25lbs'},
        {id: 11, name: 'Zevala', description: 'Roughly 50lbs'},
        {id: 12, name: 'Ceaser', description: 'Roughly 25lbs'},
        {id: 13, name: 'Cray', description: 'Roughly 50lbs'},
        {id: 14, name: 'Ming', description: 'Roughly 25lbs'},
        {id: 15, name: 'Nate', description: 'Roughly 50lbs'},
        {id: 16, name: 'Bill', description: 'Roughly 25lbs'},

        
      ]);
    });
};
