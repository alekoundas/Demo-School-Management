//Database  ¯\_(ツ)_/¯
var StudentsArray = [];
var TrainersArray = [];
var AssignmentsArray = [];

var CoursesArray = [];
var CoursesStudentsArray = [];
var CoursesTrainersArray = [];





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



//AJAX Student

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
function RefreshStudentHtmlMinimal(Id) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("StudentMinimalTable").innerHTML = xhttp.responseText;
            GetStudentTableMinimal(Id);
        }
    };
    xhttp.open("GET", "/JavaScript/Student/StudentTableMinimal.html", true);
    xhttp.send();
}
function RefreshStudentHtmlCourseModalBody(Id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("CourseModalIncludeTable").innerHTML = xhttp.responseText;
            StudentTableCourseModal(Id);
        }
    };
    xhttp.open("GET", "/JavaScript/Student/StudentTableModalBody.html", true);
    xhttp.send();
}



//AJAX Trainer
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

function RefreshTrainerHtmlMinimal(Id) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("TrainerMinimalTable").innerHTML = xhttp.responseText;
            GetTrainerTableMinimal(Id);
        }
    };
    xhttp.open("GET", "/JavaScript/Trainer/TrainerTableMinimal.html", true);
    xhttp.send();
}
function RefreshTrainerHtmlCourseModalBody(Id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("CourseModalIncludeTable").innerHTML = xhttp.responseText;
            TrainerTableCourseModal(Id);
        }
    };
    xhttp.open("GET", "/JavaScript/Trainer/TrainerTableModalBody.html", true);
    xhttp.send();
}


//AJAX Course
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
    //$('#TrainerMinimalTable').remove();
    //$('#StudentMinimalTable').remove();
    $('.modal-backdrop').remove();//Remove div Create Automaticaly When Modal Opens(It Should Close By It Self)

}

function DateBuilder(Date) {
    return [Date.getDate(), Date.getMonth(), Date.getFullYear()].join("/");
}

