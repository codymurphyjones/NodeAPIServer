API_Module = require('../API_Module');

//#File: UserManager.js
///http://localhost:8080/user/23123/
///http://localhost:8080/user/add/23123/


//Define the Module Class
//var ProductManager = {};
var ProductManager = Object.assign({},API_Module);


  
ProductManager.Create = function(Router) {  
console.log(Router.Data) ;
    var UserAcc = {
        "Username": "test123",
        "FirstName": "cody",
        "LastName": "jones",
        "Id": Router.Data[0]
    };
    
    return UserAcc;
}

ProductManager.Delete = function(Router) { 
console.log(Router.Data) ;
    var UserAcc = {
        "Username": "test123",
        "FirstName": "cody",
        "LastName": "jones",
        "Id": Router.Data[0]
    };
    
    return UserAcc;
}

ProductManager.Update = function(Router) {  
    var UserAcc = {
        "Username": "test123",
        "FirstName": "cody",
        "LastName": "jones",
        "Id": "000001"
    };
    
    return UserAcc;
}
  
ProductManager.route = function(){
    return 'product';
}

//Define the route mapping.  Route Mappings will always be defined inside the modules.  Modules are self managed and capable of accessing other modules
ProductManager.routeMapping = {
    "add": ProductManager.Create,
    "remove": ProductManager.Delete,
    "update": ProductManager.Update,
}


ProductManager.getMessage = function() {
    console.log("Products is running");
}




module.exports = ProductManager;
