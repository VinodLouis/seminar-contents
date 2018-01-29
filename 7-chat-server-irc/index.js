var express = require("express");
var socket = require("socket.io");
var app = express();
var port = 9001;

app.use(express.static("public"));
var io  = socket.listen(
	app.listen(port,"0.0.0.0",function(err,dt){
		if(err){
			console.log("error");
			return;
		}
		console.log("socket is listening")
	})
);


io.sockets.on("connection",(socket)=>{
	console.log("new conection",socket.request._query["email"]);
	socket.emit("joined",{msg:"welcome to conversation"});
	socket.broadcast.emit("visitor",{msg:socket.request._query["email"] + " joined the conversation"});

	socket.on("send",(dt)=>{
		socket.broadcast.emit("receive",dt);
	})
})