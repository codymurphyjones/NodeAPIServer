# NodeAPIServer
An NodeJS http server implementation focused on building a module oriented API server.  The purpose of this API is to ensure the larger focus on your API and the data that is being passed, over fighting with routing details and the nuance that comes with building a web server.


### Main.js Example
```
API_Router = require('./src/API_Router');


//Load Modules
Products = require('./src/modules/Products');
User = require('./src/modules/User');

//Register all Modules in here
API_Router.RegisterModule(User);
API_Router.RegisterModule(Products);

API_Router.StartServer();
```



## API_Router
The API_Router class is the backbone of the server, it will handle all of the routing details and server management.  

#### API_Router.StartServer()

    The StartServer function is what initializes the loop for the webserver, this is the last function to call in your main file, after your modules are imported and your routes are specified.
        
    StartServer runs the API_Router.LoadRoute function, this function will parse the URL into an array and allow utilization for data/route management.  API_Router.Data will give you direct access to this data.  If the the system determines the user tried to download a file, it will throw an error.

#### API_Router.RemoveLastDataPoint()

    When the data is moving its way through the program loop, sometimes the data that got you to the module you're in is no longer useful once the module is loaded.  This function lets you drop the first data point in the current array.
        
    http://localhost:8080/user/add/23123/
        
    {"user", "add", "23123"}
        
    As an example, this is the array that would exist should you connect to this URL.  The first item "user" is the module specified, once we are inside of the module, the request will not be traveling to any other modules and by removing  the "user" value, we can ensure our modules are working dynamically through the webserver rather than being index specific for all of the values we need.
        
#### API_Router.RegisterModule(module_obj)

    The RegisterModule function will register the module into the routing system.  If you have a module that hasn't been called into the RegisterModule function the module will not exist within the webserver.
        
        
## API_Module

The API_Module class is what drives the backbone of the Module system.  Utilizing the CreateModule() function after importing API_Module into your class will give you a prebuilt class that fully functions within our system.

```
//Define the Module Class
API_Module = require('../API_Module');


//Create a module by extending the API_Module class (API_Module is a javascript object, use CreateModule to extend)
var UserManager = API_Module.CreateModule('user');
```



Below is the rest of the User.js class module.  The idea of this module would be to seperate all user related API functions into this piece.

```
//Define function from Routes.  
UserManager.Create = function(Router) {  

    var UserAcc = {
        "Username": "test123",
        "FirstName": "cody",
        "LastName": "jones",
        "Id": Router.Data[0]
    };
    
    return UserAcc;
}

UserManager.Delete = function(Router) { 
//Run Delete Function
}

UserManager.Update = function(Router) {  
    //Run Update Function
}


//Specify how each function aligns to a route
UserManager.addRoute("add", UserManager.Create)
UserManager.addRoute("remove", UserManager.Delete)
UserManager.addRoute("update", UserManager.Update)
```

