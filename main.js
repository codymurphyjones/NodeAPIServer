//http://localhost:8080/
API_Router = require('./src/API_Router');


//Load Modules
Products = require('./src/modules/Products');
User = require('./src/modules/User');

//Register all Modules in here
API_Router.RegisterModule(User);
API_Router.RegisterModule(Products);

API_Router.StartServer();
