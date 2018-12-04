//http://localhost:8080/
API_Router = require('./API_Router');


//Load Modules
Products = require('./Products');
User = require('./User');

//Register all Modules in here
API_Router.RegisterModule(User);
API_Router.RegisterModule(Products);

API_Router.StartServer();
