const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

const Todo = sequelize.define('todo', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'active'
  }
});

module.exports = { Todo };
