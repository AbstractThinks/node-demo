var co = require('co');


var promise1 = new Promise(function(resolve, reject) {

  if (true){
    resolve(1);
  } else {
    reject(error);
  }

});

var promise2 = new Promise(function(resolve, reject) {

  if (true){
  	setTimeout(() => {

  		resolve(2);

  	}, 1000);
  } else {
    reject(error);
  }
  
});

var promise3 = new Promise(function(resolve, reject) {

  if (true){
  	setTimeout(() => {

  		resolve(3);

  	}, 1000);
  } else {
    reject(error);
  }
  
});

co(function* () {

	var result = yield [promise1, promise2];
	return result;

}).then(function (value) {

	return promise3;
  	
}, function (err) {

  	console.error(err.stack);

}).then(value => {
  console.log(value)
});