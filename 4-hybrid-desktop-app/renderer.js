// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.$ = require('jquery');
const con = require('electron').remote.getGlobal('console')

function renderData(dt) {
    //alert(dt.data.length);
    //alert($("#tblData"));
    var strHTML = "<table><tr><th>Name</th><th>City</th><th>Mob</th><th>Delete</th></tr>";
    for(var intIndex=0;intIndex<dt.data.length;intIndex++){
        var d = dt.data[intIndex];
        strHTML+= "<tr><td>"+d.name+"</td><td>"+d.city+"</td><td>"+d.mobile+"</td>";
        //strHTML+= "<td><input class='edit' type='button' id='edit_"+d._id+"' value='Edit' /></td>";
        strHTML+= "<td><input class='delete' type='button' onclick='deleteData(event)' id='delete_"+d._id+"' value='Delete' /></td>";
        strHTML+= "</tr>";
    }
    strHTML += "</table>";
    $("#tblData").html(strHTML);
    
};

function populateData() {
    $.ajax({
        type : "GET",
        url : "https://pacific-lowlands-88331.herokuapp.com/employee",
        contentType: "application/json",
            dataType: "json",
        success : renderData,
        error : function() {
            alert("Errr is occured");
        }
    });
};

window.deleteData = function(ev) {
	//alert(1);
	var id = ev.target.id.split("_")[1]
    $.ajax({
        type : "DELETE",
        url : "https://pacific-lowlands-88331.herokuapp.com/employee/"+id,
        contentType: "application/json",
            dataType: "json",
        success : populateData,
        error : function() {
            alert("Errr is occured");
        }
    });
};

	con.log("gd");
	populateData();

	//document.querySelector('.delete').addEventListener('click', deleteData)


 //$(body).on('click',deleteData);