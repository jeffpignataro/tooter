const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.post('/', (req, res) => {
  res.status(200).json({ message: req.body });
});

module.exports = routes;