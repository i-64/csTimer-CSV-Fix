var fs = require('fs');	// module to read from and write to a file

//read from file into data
fs.readFile("myfile.csv", 'utf8', function (err,data) {

	if (err) {
		return console.log(err);	//display error if any
	}

	var result = data.replace(/;/g, ',');	//regex to make replacement in CSV file

	//writing the corrected result to the same file
	fs.writeFile("myfile.csv", result, 'utf8', function (err) {
		if (err) return console.log(err);
	});
});