var express = require("express");
var parser = require("body-parser");
var cors = require("cors");
var app = express();
var port = 9001;
app.use(express.static('public'));
var empRouter = require("./server/routes/routes");
/*app.get("/",(req,res)=>{
	res.end("Hi");
})*/
app.use(cors());
app.use(parser.json());
app.use("/employee",empRouter);
app.listen(port,"0.0.0.0",(err)=>{
	console.log("listening on "+port)
});