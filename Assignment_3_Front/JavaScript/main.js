//Database  ¯\_(ツ)_/¯
var StudentsArray = [];
var TrainersArray = [];
var AssignmentsArray = [];
var CoursesArray = [];





function GetPage(UserChoice) {
    switch (UserChoice) {
        case 'Student':
            ResetModals();
            RefreshStudentHtml();
            break;
        case 'Trainer':
            ResetModals();
            RefreshTrainerHtml();
            break;
        case 'Course':
            ResetModals();
            RefreshCourseHtml();
            break;
        default:
    }

}



function RefreshStudentHtml() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("MainTable").innerHTML = xhttp.responseText;
            GetStudentTable();
        }
    };
    xhttp.open("GET", "/JavaScript/Student/StudentTable.html", true);
    xhttp.send();
}

function RefreshTrainerHtml() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("MainTable").innerHTML = xhttp.responseText;
            GetTrainerTable();
        }
    };
    xhttp.open("GET", "/JavaScript/Trainer/TrainerTable.html", true);
    xhttp.send();
}

function RefreshCourseHtml() {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("MainTable").innerHTML = xhttp.responseText;
            GetCourseTable();
        }
    };
    xhttp.open("GET", "/JavaScript/Course/CourseTable.html", true);
    xhttp.send();
}

function ResetModals() {
    $('#AddElementModal').remove(); 
    $('#DeleteElementModal').remove();
    $('#EditElementModal').remove();
    $('.modal-backdrop').remove();//Remove div Create Automaticaly When Modal Opens(It Should Close By It Self)

}