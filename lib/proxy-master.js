/**
 * master to manage proxy nodes
 * @type {exports}
 */

var pm = require('pm');

function proxyMaster(options){
    this._options = options
}

proxyMaster.prototype.start = function(){
    var options = this._options
    var app = pm.createMaster({
        'pidfile' : '/tmp/node-proxy-server.pid'
    })

    app.register('proxy-server',__dirname + '/proxy-server.js', {
        listen : options.port || 8234,
        children: options.instance || 1
    },process.argv)

    app.on('giveup', function (name, num, pause) {
        console.log('giveup', name, num, pause)
    })

    app.dispatch()
}

module.exports = proxyMaster