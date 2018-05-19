const Sequelize = require('sequelize');
const { db } = require('../config/');

const User = db.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

const Message = db.define('message', {
  text: Sequelize.STRING
});

//sequelize inserts ids for you, dont use sequelize after the TA

//users have many messages

User.hasMany(Message);
Message.belongsTo(User);

db.sync();

//in terminal node db/models/index.js