var http = require('http');
//#File: API_Router.js
var API_Router = {};


API_Router.Routes = [];

API_Router.Data = {};

  
API_Router.LoadRoute = (function(url = "") {  

    if (url == "") {
         if(this.URI_Data != null)
             return this.URI_data;
         else
              return null;   
    }
            
    var rq_data = url.replace(/^\/+/g, '').split('/');
    
    this.isFile = false;
    
    
    var request_data = rq_data.filter(function (el) {
        return el != "";
        });
    
    this.Module = request_data[0];
    if(request_data[request_data.length - 1].split(".").length > 1) {
        this.isFile = true;
        this.Module = false;
    }
    
    API_Router.Data = request_data;
    API_Router.RemoveLastDataPoint();
    
    this.URI_Data = request_data;
    return this.URI_Data;
    
})

API_Router.RemoveLastDataPoint = function(data = null) {
    var request_data = {};
    
    if(data == null)
        request_data = API_Router.Data;
    else
        request_data = data;
    
    request_data = request_data.splice(1,request_data.length - 1);
    
    
    if(data == null)
        API_Router.Data = request_data;
    
    return request_data;
}
  

API_Router.RegisterModule = (function(module_obj) {  
    this.Routes.push({ "route": module_obj.route(), "obj": module_obj });
})

API_Router.GetModule = (function() {  
    
    var route = this.Module;
    if(this.isFile)
           return false;
       
    modules = this.Routes.filter(function (el) {
    return el["route"] == route;
    });
    
    if(modules.length < 1)
        return false;
    
    return modules[0]["obj"];

})

API_Router.StartServer = (function() {
    
    //create a server object:
http.createServer(function (req, res) {
    console.log("Processing Request: " + req.url)
    var req_data = API_Router.LoadRoute(req.url);
    
    if(!API_Router.isFile) {
        res.setHeader('Content-Type', 'application/json');
        var module = API_Router.GetModule();
        var val = "";
        if(module)
            val = module.Run(API_Router);
        
        if(!module)
            val = {"Response": "There module does not exist"}
    
        res.write(JSON.stringify(val)); //write a response to the client
    }
    else {
        res.write("No output designed for real files");
    }
    
  res.end(); //end the response
}).listen(8080);
    
})
  



module.exports = API_Router;
