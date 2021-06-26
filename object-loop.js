const obj = { a: 1, b: 2 };

//approach 1
Object.keys(obj).forEach(key => {
	console.log("key: ", key);
  	console.log("Value: ", obj[key]);
} );


// approach 2
Object.entries(obj).forEach(
    ([key, value]) => console.log(key, value)
);
