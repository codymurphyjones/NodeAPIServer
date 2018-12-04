//#File: UserManager.js
///http://localhost:8080/user/23123/
///http://localhost:8080/user/add/23123/


//Define the Module Class
API_Module = require('../API_Module');


//Create a module by extending the API_Module class (API_Module is a javascript object, use CreateModule to extend)
var UserManager = API_Module.CreateModule('user');


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



module.exports = UserManager;
