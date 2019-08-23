$(document).ready(function () {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            document.getElementById("StudentTable").innerHTML = xhttp.responseText;
            GetStudentTable();
        }
    };
    xhttp.open("GET", "/JavaScript/Student/StudentTable.html", true);
    xhttp.send();



});

function RefreshStudentHtml() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            document.getElementById("StudentTable").innerHTML = xhttp.responseText;
            GetStudentTable();
        }
    };
    xhttp.open("GET", "/JavaScript/Student/StudentTable.html", true);
    xhttp.send();
}