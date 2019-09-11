
//Database  ¯\_(ツ)_/¯
var StudentsArray = [];
var TrainersArray = [];
var AssignmentsArray = [];
var AssignmentsStudentsArray = [];
var CoursesArray = [];
var CoursesStudentsArray = [];
var CoursesTrainersArray = [];
var CoursesAssignmentsArray = [];


$(document).ready(function () {
    DummyStudents();
    DummyTrainers();
    DummyAssignments();
    DummyCourses();
});






function GetPage(UserChoice) {
    switch (UserChoice) {
        case 'Student':
            $('#secondary_tables').remove();
            ResetModals();
            RefreshStudentHtml();         
            break;
        case 'Trainer':
            $('#secondary_tables').remove();
            ResetModals();
            RefreshTrainerHtml();
            break;
        case 'Course':
            $('#secondary_tables').remove();
            ResetModals();
            RefreshCourseHtml();
            break;
        case 'Assignment':
            $('#secondary_tables').remove();
            ResetModals();
            RefreshAssignmentHtml();
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
function RefreshStudentHtmlCourseModalBody(CourseId,AssignmetId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("CourseModalIncludeTable").innerHTML = xhttp.responseText;
            StudentTableCourseModal(CourseId, AssignmetId);
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


//AJAX Assignment
function RefreshAssignmentHtml() {
    ResetModals();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("MainTable").innerHTML = xhttp.responseText;
            GetAssignmentTable();
        }
    };
    xhttp.open("GET", "/JavaScript/Assignment/AssignmentTable.html", true);
    xhttp.send();
}
function RefreshAssignmentHtmlMinimal(Id) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("AssignmentMinimalTable").innerHTML = xhttp.responseText;
            GetAssignmentTableMinimal(Id);
        }
    };
    xhttp.open("GET", "/JavaScript/Assignment/AssignmentTableMinimal.html", true);
    xhttp.send();
}
function RefreshAssignmentHtmlCourseModalBody(Id) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("CourseModalIncludeTable").innerHTML = xhttp.responseText;
            AssignmentTableCourseModal(Id);
        }
    };
    xhttp.open("GET", "/JavaScript/Assignment/AssignmentTableModalBody.html", true);
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
function RefreshCourseHtmlMinimal(id) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("CourseMinimalTable").innerHTML = xhttp.responseText;
            CourseTableMinimal(id);           
        }
    };
    xhttp.open("GET", "/JavaScript/Course/CourseTableMinimal.html", true);
    xhttp.send();
}
function RefreshCourseHtmlModalBody(id, GivenCourseArr) {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("CourseModalIncludeTableTop").innerHTML = xhttp.responseText;
            CourseTableAssignmentModal(id, GivenCourseArr);
        }
    };
    xhttp.open("GET", "/JavaScript/Course/CourseTableModalBody.html", true);
    xhttp.send();
}

function ResetModals() {
    $('#AddElementModal').remove();
    $('#DeleteElementModal').remove();
    $('#EditElementModal').remove();
    $('#IncludeElementModal').remove();
    $('.modal-backdrop').remove();//Remove div Create Automaticaly When Modal Opens(It Should Close By It Self)

}

function DateBuilder(Date) {
    return [Date.getDate(), Date.getMonth()+1, Date.getFullYear()].join("/");
}
