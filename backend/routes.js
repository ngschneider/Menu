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

router.get("/chicken", (req,res) =>	{
	console.log("received!");
	let statement = "SELECT * FROM chicken";
	command.send([statement], (results) => {
		res.send(results);
	});
});

router.get("/sides", (req,res) =>	{
	console.log("received!");
	let statement = "SELECT * FROM sides";
	command.send([statement], (results) => {
		res.send(results);
	});
});

router.get("/drinks", (req,res) =>	{
	console.log("received!");
	let statement = "SELECT * FROM drinks";
	command.send([statement], (results) => {
		res.send(results);
	});
});
module.exports = router;
