
$(document).ready(function() {
    populateData();
    document.getElementById('submitButton').addEventListener("click", saveData,false);
});

function renderData(dt) {
    //alert(dt.data.length);
    //alert($("#tblData"));
    var strHTML = "<table><tr><th>ID</th><th>Name</th><th>City</th><th>Mob</th></tr>";
    for(var intIndex=0;intIndex<dt.data.length;intIndex++){
        var d = dt.data[intIndex];
        strHTML+= "<tr><td>"+d._id+"</td><td>"+d.name+"</td><td>"+d.city+"</td><td>"+d.mobile+"</td></tr>";
    }
    strHTML += "</table>";
    $("#tblData").html(strHTML);
    //alert("done");
};

function saveDataPost(dt) {
    alert("Data Saved");
    document.getElementById("myForm").reset();
    populateData();
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

function saveData(){
    //alert("SAVE")
    var obj = {
        name:$("#name").val(),
        city:$("#city").val(),
        mobile:$("#phno").val()
    }
    $.ajax({
        type : "POST",
        url : "https://pacific-lowlands-88331.herokuapp.com/employee",
        contentType: "application/json",
        dataType: "json",
        data : JSON.stringify(obj),
        success : saveDataPost,
        error : function() {
            alert("Errr is occured");
        }
    });

}