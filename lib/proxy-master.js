var pm = require('pm');
var argv = require('optimist').argv;
var daemon = require('daemon');

if(argv.d){
	daemon();	
}

var app = pm.createMaster({
	'pidfile' : '/tmp/node-proxy-server.pid'
});

app.register('proxy-server',__dirname + '/proxy-server.js', {
	listen : argv.p || 8234,
	children: argv.ch || 1
},process.argv);

app.on('giveup', function (name, num, pause) {
	console.log('giveup', name, num, pause);
});

app.dispatch();
