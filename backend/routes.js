const express = require("express");
const router = express.Router();
const command = require("./sqlCommand");

router.get("/burger", (req,res) =>	{
	console.log("received!");
	let statement = "SELECT * FROM burger";
	command.send([statement], (results) => {
		res.send(results);
	});
});

module.exports = router;
