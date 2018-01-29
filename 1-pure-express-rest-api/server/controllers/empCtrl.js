var empService = require("../services/empServices");
var dbConnec = require("../config/config");
var responseData = require("../config/responseData");
var empService = require("../services/empServices");

module.exports = {
	getAllEmployees:(req,res)=>{
		dbConnec.getConnection((err,db)=>{
			if(err){
				return res.send(responseData.errorResponse([],err));
			}
			empService.getAllEmployees(db,(err,data)=>{
				if(err){
					return res.send(responseData.errorResponse([],err));
				}
				res.send(responseData.successResponse(data,""));	
			});
		});
	},
	insertEmployee:(req,res)=>{
		dbConnec.getConnection((err,db)=>{
			if(err){
				return res.send(responseData.errorResponse([],err));
			}
			var dt = req.body;
			empService.insertEmployee(db,dt,(err,data)=>{
				if(err){
					return res.send(responseData.errorResponse([],err));
				}
				res.send(responseData.successResponse(data,""));	
			});
		});
	},
	getEmployeeByID:(req,res)=>{
		dbConnec.getConnection((err,db)=>{
			if(err){
				return res.send(responseData.errorResponse([],err));
			}
			var dt = req.params.id;
			empService.getEmployeeByID(db,dt,(err,data)=>{
				if(err){
					return res.send(responseData.errorResponse([],err));
				}
				res.send(responseData.successResponse(data,""));	
			});
		});	
	},
	updateEmployee:(req,res)=>{
		dbConnec.getConnection((err,db)=>{
			if(err){
				return res.send(responseData.errorResponse([],err));
			}
			var id = req.params.id;
			var dt = req.body;
			empService.updateEmployee(db,id,dt,(err,data)=>{
				if(err){
					return res.send(responseData.errorResponse([],err));
				}
				res.send(responseData.successResponse(data,""));	
			});
		});
	},
	deleteEmployee:(req,res)=>{
		dbConnec.getConnection((err,db)=>{
			if(err){
				return res.send(responseData.errorResponse([],err));
			}
			var id = req.params.id;
			empService.deleteEmployee(db,id,(err,data)=>{
				if(err){
					return res.send(responseData.errorResponse([],err));
				}
				res.send(responseData.successResponse(data,""));	
			});
		});
	}
}