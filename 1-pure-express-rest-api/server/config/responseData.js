module.exports = {
	successResponse:(data,msg)=>{
		return{
			status:"SUCCESS",
			msg:(msg) ? msg : "",
			data:(data) ? data : []
		}
	},
	errorResponse:(data,msg)=>{
		return{
			status:"ERROR",
			msg:(msg) ? msg : "",
			data:(data) ? data : []
		}
	}
}