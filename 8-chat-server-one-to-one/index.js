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
var allConn = [];

io.sockets.on("connection",(socket)=>{
	console.log("new conection",socket.request._query["email"]);
	allConn.push({id:socket.id,name:socket.request._query["email"]})
	socket.emit("joined",{id:socket.id,msg:"welcome to conversation",data:allConn});
	socket.broadcast.emit("visitor",{data:allConn});

	socket.on("send",(dt)=>{
		socket.to(dt.toID).emit("receive",dt);
	})
})