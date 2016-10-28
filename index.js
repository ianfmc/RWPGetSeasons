
var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    
	var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName : 'Season'
    };
    docClient.scan(params, context, function(err, data) {
    	if (err) {
    		callback(err);
    	}
    	else {
    		callback(null, data);
    	}
    });
};