function GetCourseTable() {

    //Add To Body Empty Divs For Add-Edit Course Modal
    //Only If The Divs Doesnt Exist Yet
    if (document.getElementById("EditElementModal") == null) {
        $("body").append('<div id="EditElementModal">');
        $("#EditElementModal").append(GetEditModalCourse()); //Append Completed modal to empty div
    }
    if (document.getElementById("AddElementModal") == null) {
        $("body").append('<div id="AddElementModal">');
        $("#AddElementModal").append(GetAddModalCourse()); //Append Completed modal to empty div
    }
    if (document.getElementById("DeleteElementModal") == null) {
        $("body").append('<div id="DeleteElementModal">');
        $("#DeleteElementModal").append(GetDeleteModalCourse()); //Append Completed modal to empty div
    }
    if (document.getElementById("IncludeElementModal") == null) {
        $("body").append('<div id="IncludeElementModal">');
        $("#IncludeElementModal").append(GetIncludeModalCourse()); //Append Completed modal to empty div
    }
    if (document.getElementById("secondary_tables") == null) {
        $("#second_tables_container").append(SecondaryTablesCourse());//Append Completed Tables to empty div
    }
    CoursesTable(CoursesArray);
}

function GetCoursePerElement(CourseId) {
    RefreshTrainerHtmlMinimal(CourseId);
    RefreshStudentHtmlMinimal(CourseId);
    RefreshAssignmentHtmlMinimal(CourseId);
    
}


function DummyCourses() {

    CoursesArray.push({ id: 1, Title: " CB8 - Full - C# ", Stream: "Full-Time", Type: ' C# ', StartD: new Date(2019, 1, 1), EndD: new Date(2019, 3, 30) });
    CoursesArray.push({ id: 2, Title: " CB8 - Part - C# ", Stream: "Part-Time", Type: ' C# ', StartD: new Date(2019, 1, 1), EndD: new Date(2019, 6, 30) });
    CoursesArray.push({ id: 3, Title: "CB8 - Full - JAVA", Stream: "Full-Time", Type: 'JAVA', StartD: new Date(2019, 1, 1), EndD: new Date(2019, 3, 30) });
    CoursesArray.push({ id: 4, Title: "CB8 - Part - JAVA", Stream: "Part-Time", Type: 'JAVA', StartD: new Date(2019, 1, 1), EndD: new Date(2019, 6, 30) });


    CoursesTrainersArray.push({ id: 0, CourseId: 1, TrainerId: 3 });
    CoursesTrainersArray.push({ id: 1, CourseId: 2, TrainerId: 2 });
    CoursesTrainersArray.push({ id: 2, CourseId: 3, TrainerId: 4 });
    CoursesTrainersArray.push({ id: 3, CourseId: 1, TrainerId: 1 });
    CoursesTrainersArray.push({ id: 4, CourseId: 1, TrainerId: 4 });
    CoursesTrainersArray.push({ id: 5, CourseId: 2, TrainerId: 1 });
    CoursesTrainersArray.push({ id: 6, CourseId: 1, TrainerId: 2 });
    CoursesTrainersArray.push({ id: 7, CourseId: 4, TrainerId: 2 });


    CoursesStudentsArray.push({ id: 0, CourseId: 1, StudentId: 3 });
    CoursesStudentsArray.push({ id: 1, CourseId: 2, StudentId: 2 });
    CoursesStudentsArray.push({ id: 2, CourseId: 3, StudentId: 4 });
    CoursesStudentsArray.push({ id: 3, CourseId: 1, StudentId: 1 });
    CoursesStudentsArray.push({ id: 4, CourseId: 1, StudentId: 4 });
    CoursesStudentsArray.push({ id: 5, CourseId: 2, StudentId: 7 });
    CoursesStudentsArray.push({ id: 6, CourseId: 4, StudentId: 3 });
    CoursesStudentsArray.push({ id: 7, CourseId: 4, StudentId: 2 });

    CoursesAssignmentsArray.push({ id: 0, CourseId: 1, AssignmentId: 3 });
    CoursesAssignmentsArray.push({ id: 1, CourseId: 2, AssignmentId: 2 });
    CoursesAssignmentsArray.push({ id: 2, CourseId: 3, AssignmentId: 4 });
    CoursesAssignmentsArray.push({ id: 3, CourseId: 1, AssignmentId: 1 });
    CoursesAssignmentsArray.push({ id: 4, CourseId: 1, AssignmentId: 4 });
    CoursesAssignmentsArray.push({ id: 5, CourseId: 2, AssignmentId: 1 });
    CoursesAssignmentsArray.push({ id: 6, CourseId: 4, AssignmentId: 3 });
    CoursesAssignmentsArray.push({ id: 7, CourseId: 4, AssignmentId: 2 });


}
