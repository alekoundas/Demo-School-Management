function GetAssignmentTable() {

    

    //Add To Body Empty Divs For Add-Edit Assignment Modal
    //Only If The Divs Doesnt Exist Yet
    if (document.getElementById("EditElementModal") == null) {
        $("body").append('<div id="EditElementModal">');
        $("#EditElementModal").append(GetEditModalAssignment()); //Append Completed modal to empty div
    }
    if (document.getElementById("AddElementModal") == null) {
        $("body").append('<div id="AddElementModal">');
        $("#AddElementModal").append(GetAddModalAssignment()); //Append Completed modal to empty div
    }
    if (document.getElementById("DeleteElementModal") == null) {
        $("body").append('<div id="DeleteElementModal">');
        $("#DeleteElementModal").append(GetDeleteModalAssignment()); //Append Completed modal to empty div
    }
    if (document.getElementById("IncludeElementModal") == null) {
        $("body").append('<div id="IncludeElementModal">');
        $("#IncludeElementModal").append(GetIncludeModalAssignment()); //Append Completed modal to empty div
    }
    if (document.getElementById("secondary_tables") == null) {
        $("#second_tables_container").append(SecondaryTablesAssignment());//Append Completed Tables to empty div
    }
    AssignmentTable(AssignmentsArray);
}

function GetAssignmentTableMinimal(Id) {

    //Fill Array If Empty
    if (AssignmentsArray.length == 0)
        DummyAssignments(AssignmentsArray);

    AssignmentTableMinimal(Id);
}

function GetAssignmentPerElement(AssignmentID) {
    RefreshStudentHtmlMinimal(AssignmentID);
    RefreshCourseHtmlMinimal(AssignmentID);
}


function DummyAssignments() {

    AssignmentsArray.push({ id: 1, Title: "Assignment 1", Description: "Simple Console Application          ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 1, 30) });
    AssignmentsArray.push({ id: 2, Title: "Assignment 2", Description: "Simple Console Application With SQL ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 2, 28) });
    AssignmentsArray.push({ id: 3, Title: "Assignment 3", Description: "Simple HTML Page                    ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 3, 30) });
    AssignmentsArray.push({ id: 4, Title: "Assignment 4", Description: "Assignment 4                        ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 4, 30) });
    AssignmentsArray.push({ id: 5, Title: "Assignment 5", Description: "Assignment 5                        ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 5, 30) });
    AssignmentsArray.push({ id: 6, Title: "Assignment 6", Description: "Team Assignment                     ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 6, 30) });



    AssignmentsStudentsArray.push({ id: 1, StudentId: 1, AssignmentId:1});
    AssignmentsStudentsArray.push({ id: 2, StudentId: 2, AssignmentId:2});
    AssignmentsStudentsArray.push({ id: 3, StudentId: 3, AssignmentId:3});
    AssignmentsStudentsArray.push({ id: 4, StudentId: 4, AssignmentId:4});
    AssignmentsStudentsArray.push({ id: 5, StudentId: 5, AssignmentId:5});
    AssignmentsStudentsArray.push({ id: 6, StudentId: 6, AssignmentId: 6});
    AssignmentsStudentsArray.push({ id: 7, StudentId: 7, AssignmentId: 1});
    AssignmentsStudentsArray.push({ id: 8, StudentId: 8, AssignmentId: 2});
    AssignmentsStudentsArray.push({ id: 9, StudentId: 9, AssignmentId: 3});
    AssignmentsStudentsArray.push({ id: 10, StudentId: 2, AssignmentId: 4});
    AssignmentsStudentsArray.push({ id: 11, StudentId: 3, AssignmentId: 5});
    AssignmentsStudentsArray.push({ id: 12, StudentId: 4, AssignmentId: 6});


}
