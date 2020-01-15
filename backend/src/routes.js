const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.delete('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    return response.json({ message: 'Hello OmniStack 10'});
});

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello OmniStack 10'});
});

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index);

module.exports = routes;