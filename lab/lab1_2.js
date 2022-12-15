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
	});
	
	var params = {
		ImageId: "ami-06ce824c157700cd2",   
		MaxCount: 1, 
		MinCount: 1, 
	};
 ec2.runInstances(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else  {
	   console.log("DnsName: "+data.Instances[0].PublicDnsName);
	   console.log("IP: "+data.Instances[0].PrivateIpAddress);
   }          // successful response
 });
	
	
}
exports.lab = task