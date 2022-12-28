exports.promiseMethod2cps = method => obj => (...args) => 
	(onRes, onErr) => obj[method](...args).then(onRes, onErr)
