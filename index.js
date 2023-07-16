const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

app.get("/find", (req, res) => {
	let num = req.query.number;
	let msg = num % 2 == 0 ? "even" : "odd";
	let message = "number = " + num + " result " + msg + " " + new Date().toString() + "\n";
	fs.appendFile("log.txt", message, (err) => {
		if (err)
		console.log(err);
	})
	res.json({"msg":msg})
});

app.listen(9000, () => { console.log("server ready at 9000"); } )