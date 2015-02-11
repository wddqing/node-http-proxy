/**
 * tu run proxy-server
 * Created by wddqing on 15/2/3.
 */

//var ProxyMaster = require('../lib/proxy-master')

//var proxymaster = new ProxyMaster()

//proxymaster.start();
var http = require('http')
http.createServer(function(req,res){
    res.end('hello')
}).listen(8888)
console.dir(process.argv)
