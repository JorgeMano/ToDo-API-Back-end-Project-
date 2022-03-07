const express = require('express');
const { Sequelize } = require('sequelize');
const cors = require('cors');
//Model
const { Todo } = require('./models/todo.model');
//Router
const { todosRouter } = require('./routes/todo.routes');
//Util - database
const { sequelize } = require('./util/database');

// Init express APP

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/v1/todos', todosRouter);

sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('Express app running');
});
