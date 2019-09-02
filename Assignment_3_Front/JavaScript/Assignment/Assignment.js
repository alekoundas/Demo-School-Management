function GetAssignmentTable() {

    //Fill Array If Empty
    if (AssignmentsArray.length == 0)
        DummyAssignments();

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
    if(document.getElementById("DeleteElementModal") == null) {
        $("body").append('<div id="DeleteElementModal">');
        $("#DeleteElementModal").append(GetDeleteModalAssignment()); //Append Completed modal to empty div
    }
    AssignmentTable(AssignmentsArray);
}

function GetAssignmentTableMinimal(Id) {

    //Fill Array If Empty
    if (AssignmentsArray.length == 0)
        DummyAssignments(AssignmentsArray);

    AssignmentTableMinimal(Id);
}




function DummyAssignments() {

    AssignmentsArray.push({ id: 1, Title: "Assignment 1", Description: "Build A Simple Console Application          ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 1, 30) });
    AssignmentsArray.push({ id: 2, Title: "Assignment 2", Description: "Build A Simple Console Application With SQL ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 2, 28) });
    AssignmentsArray.push({ id: 3, Title: "Assignment 3", Description: "Build A Simple HTML Page                    ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 3, 30) });
    AssignmentsArray.push({ id: 4, Title: "Assignment 4", Description: "Assignment 4                                ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 4, 30) });
    AssignmentsArray.push({ id: 5, Title: "Assignment 5", Description: "Assignment 5                                ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 5, 30) });
    AssignmentsArray.push({ id: 6, Title: "Assignment 6", Description: "Team Assignment                             ", OralMark: null, TotalMark: null, SubDateTime: new Date(2019, 6, 30) });

}
