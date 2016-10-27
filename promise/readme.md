###co


co 函数库其实就是将两种自动执行器（Thunk 函数和 Promise 对象），包装成一个库。使用 co 的前提条件是，Generator 函数的 yield 命令后面，只能是 Thunk 函数或 Promise 对象。

```javascript

	var promise2 = new Promise(function(resolve, reject) {
	  ....
	  if (true){
	  	setTimeout(() => {
	
	  		resolve(2);
	  		
	  	}, 1000);
	  } else {
	    reject(error);
	  }
	  .....
	});

    co(function* () {

		var result = yield [promise1, promise2];
		//返回的参数为下一个then函数的入参
		return result; //[例：result = 1]
	
	}).then(function (value) {
		
	  	console.log(value); // 1
	    //返回的参数为下一个then函数的入参
		return 2;

	}, function (err) {
	  	console.error(err.stack);
	}).then(function (value) {

	  	console.log(value);  //2

	}, function (err) {
	  	console.error(err.stack);
	});


```


例：

```javascript

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
	  	
	}).then(value => {
	
	  console.log(value)
	
	});


```