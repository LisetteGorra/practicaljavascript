var myComputer = {
   operatingSystem: 'mac',     // these lines are called properties followed by a value
   screenSize: '15 inches', 
   purchaseYear: 2014,
};

myComputer.operatingSystem; // will return "mac"

var lisette = {  // this code will return the name only: 'Lisette'
	name: 'Lisette',
	sayName: function() {
	console.log(this.name);
  }
}

