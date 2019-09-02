function GetStudentTable() {

    //Fill Array If Empty
    if (StudentsArray.length == 0)
        DummyStudents(StudentsArray);

    //Add To Body Empty Divs For Add-Edit Student Modal
    //Only If The Divs Doesnt Exist Yet
    if (document.getElementById("EditElementModal") == null) {
        $("body").append('<div id="EditElementModal">');
        $("#EditElementModal").append(GetEditModalStudent()); //Append Completed modal to empty div
    }
    if (document.getElementById("AddElementModal") == null) {
        $("body").append('<div id="AddElementModal">');
        $("#AddElementModal").append(GetAddModalStudent()); //Append Completed modal to empty div
    }
    if (document.getElementById("DeleteElementModal") == null) {
        $("body").append('<div id="DeleteElementModal">');
        $("#DeleteElementModal").append(GetDeleteModalStudent()); //Append Completed modal to empty div
    }
    StudentTable(StudentsArray);
}

function GetStudentTableMinimal(Id) {

    //Fill Array If Empty
    if (StudentsArray.length == 0)
        DummyStudents(StudentsArray);

    StudentTableMinimal(Id);
}




function DummyStudents(StudentsArray) {

    StudentsArray.push({ id: 1, Fname: "Oliver ", Lname: "Adams   ", Tuition: 1500, Birth: new Date(1995, 1, 2) });
    StudentsArray.push({ id: 2, Fname: "Jack   ", Lname: "Allen   ", Tuition: 1300, Birth: new Date(1996, 10, 13) });
    StudentsArray.push({ id: 3, Fname: "Harry  ", Lname: "Ford    ", Tuition: 1200, Birth: new Date(1999, 6, 19) });
    StudentsArray.push({ id: 4, Fname: "Jacob  ", Lname: "Adams   ", Tuition: 1180, Birth: new Date(1990, 11, 7) });
    StudentsArray.push({ id: 5, Fname: "Charlie", Lname: "Cole    ", Tuition: 1900, Birth: new Date(1991, 3, 25) });
    StudentsArray.push({ id: 6, Fname: "Thomas ", Lname: "Bradley ", Tuition: 2500, Birth: new Date(1989, 7, 21) });
    StudentsArray.push({ id: 7, Fname: "George ", Lname: "Davidson", Tuition: 1200, Birth: new Date(1995, 4, 12) });
    StudentsArray.push({ id: 8, Fname: "Oscar  ", Lname: "Adams   ", Tuition: 1640, Birth: new Date(1995, 7, 16) });
    StudentsArray.push({ id: 9, Fname: "James  ", Lname: "Booth   ", Tuition: 1560, Birth: new Date(1995, 3, 1) });

}
