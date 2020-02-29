const phantomServer = require('./phantomServer.js');
phantomServer.onReady = function () {
	console.log('Ready!')
}

phantomServer.on255 = function (data) {
	console.log('got 255', data);
	setInterval(() => {
		phantomServer.get113([197, 81, 142, 173, 213, 218, 115, 82, 42, 166, 213, 143, 49], 900, (_113, botID) => {
			console.log(new Uint8Array(_113), botID);
		});
	}, 1000);
}

phantomServer.onProtocolVersion = function (protocolVersion) {
	console.log(protocolVersion)
}