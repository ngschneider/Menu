const express = require("express");
const router = express.Router();
const command = require("./sqlCommand");

router.get("/menu", (req,res) =>	{
	console.log("received!");
	let statement = "SELECT * FROM MenuOptions";
	command.send([statement], (results) => {
		res.send(results);
	});
});

module.exports = router;
