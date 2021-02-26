const sql = require("./events");

/* sqlCommands.js
 * Allows for easy mysql commmands
 *
 */


/*
 * Input : Table name, set of columns, set of cooresponding records
 * Output : sql insert command, formatted correctly
 *
 */
	const send = (sendList,cb) => {
		 sendString = "";

		sendList.forEach((value, index) => {
			sendString += value + " ";
		} ); 
	
		sql.select(sendString, function(results){
	//		console.log(results)
			//let errorNumber = ErrorRecovery.errorRecovery(results);
	//		console.log(errorNumber[1])
			cb(results);
			
		});
	}

exports.send = send;
