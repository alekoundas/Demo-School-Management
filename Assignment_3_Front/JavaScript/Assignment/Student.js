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
    if(document.getElementById("DeleteElementModal") == null) {
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

    StudentsArray.push({ id: 1, Fname: "Alex", Lname: "Psychoson", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 2, Fname: "Giannis", Lname: "Kalivas", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 3, Fname: "Tasos", Lname: "Panago", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 4, Fname: "Maria", Lname: "Gkikas", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 5, Fname: "Γιαννης", Lname: "Pappas", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 6, Fname: "Katerina", Lname: "Mastoras", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 7, Fname: "Gianna", Lname: "Xouliaris", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 8, Fname: "Κωστας", Lname: "Pappas", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 9, Fname: "Anthi", Lname: "Gkikas", Tuition: 1500, Birth: new Date(1995, 1, 1) });

}
