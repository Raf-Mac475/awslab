//stub for lab 1_2
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
	//Pobierz info o instancji ec2
	const ec2= new AWS.EC2();
	ec2.describeInstances((err, data) => {
		console.log('describeInstances');
		if (err) {
			console.error(err);
		} else
		{
			//Wyświetlanie info o instancji EC2
			console.log(data);
		}
	})
	
	var params = {
  InstanceIds: [
     "i-09676e297268a3087"
  ]
 };
 ec2.startInstances(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
	
}

exports.lab = task