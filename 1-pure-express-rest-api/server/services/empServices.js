var mongo = require("mongodb");

module.exports = {
	getAllEmployees:(db,cb)=>{
		db.collection("employee").find().toArray((err,data)=>{
			if(err){
				return cb(err,null);
			}
			cb(null,data);
		});
	},
	insertEmployee:(db,dt,cb)=>{
		db.collection("employee").insertOne(dt,(err,data)=>{
			if(err){
				return cb(err,null);
			}
			cb(null,data);
		});
	},
	getEmployeeByID:(db,id,cb)=>{
		db.collection("employee").findOne({"_id": new mongo.ObjectID(id)},(err,data)=>{
			if(err){
				return cb(err,null);
			}
			cb(null,data);
		});
	},
	updateEmployee:(db,id,dt,cb)=>{
		db.collection("employee").updateOne({"_id": new mongo.ObjectID(id)},{$set:dt},(err,data)=>{
			if(err){
				return cb(err,null);
			}
			cb(null,data);
		});
	},
	deleteEmployee:(db,id,cb)=>{
		db.collection("employee").deleteOne({"_id": new mongo.ObjectID(id)},(err,data)=>{
			if(err){
				return cb(err,null);
			}
			cb(null,data);
		});
	}
}