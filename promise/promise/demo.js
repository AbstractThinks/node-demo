var promise = new Promise(function(resolve, reject) {

  if (true){

  	setTimeout(() => {
  		resolve(1);
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

promise
	.then(value => {

		console.log("2 = " + value)
		return promise3;
		
	})
	.then(value => {
		console.log("3 = " + value);
		return 3
	})