var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
module.exports = {
	getConnection:(cb)=>{
		mongo.connect(url,(err,db)=>{
			if(err){
				return cb(err,null)
			}
			console.log(db.db("employeeManagement"));
			cb(null,db.db("employeeManagement"))
		});
	}
}