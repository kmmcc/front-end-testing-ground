const Sequelize = require('sequelize');

const db = new Sequelize('practice', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

console.log('SUCESS CONNET 2 DB!')

db.authenticate()
  .then(() => {
    console.log('success connect 2 database')
  });
  .catch(err => {
    console.error('oh snap! the db is busted.')
  });

module.exports = {
  db
}

//object - module exports - its an object, putting it in object lets you pluck it off