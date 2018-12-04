
//#File: API_Module.js
///http://localhost:8080/user/23123/
///http://localhost:8080/user/add/23123/
var API_Module = {};

API_Router.route = function(){
    return 'api_route';
}

//Module Route Manager
API_Module._routeMapping = {
    
}

API_Module.addRoute = function(route,callback) {
    this._routeMapping[route] = callback;
}

API_Module.routeMapping = function() {
    return this._routeMapping;
}

API_Module.isRoute = (function(route) {  
    var keys = this.routeMapping();
    for(var key in keys) {
        if(route == key)
            return true;
    }
    
    return false;
})

API_Module.NoRoute = function() {
    return "There was no route"
}

API_Module.Run = function(Router){
    var runMe = Router.Data[0];
    if(this.isRoute(runMe)) {
        
        Router.RemoveLastDataPoint();
        console.log(this.routeMapping());
        var val = this.routeMapping()[runMe](Router);
        return val;
    }
    else
    {
        return API_Module.NoRoute();
    }
    
    
}

API_Module.CreateModule = function(route) {
    
    var obj = Object.assign({},API_Module);
    
    obj.route = function(){
    return route;
    }
    
    return obj;
    
}



module.exports = API_Module;
