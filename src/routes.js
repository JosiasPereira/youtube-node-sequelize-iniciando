const {Router} = require('express');

const routes = new Router();

const UserController = require('./app/Controllers/UserController');


routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.get('/', (req, res) =>{
  res.json({message: 'hello world'})
})

module.exports = routes;