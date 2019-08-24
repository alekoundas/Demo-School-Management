

//Database  ¯\_(ツ)_/¯
var StudentsArray = [];

function GetStudentTable() {

    //Fill Array If Empty
    if (StudentsArray.length == 0)
        DummyStudents(StudentsArray);

    //Add To Body Empty Divs For Add-Edit Student Modal
    //Only If The Divs Doesnt Exist Yet
    if (document.getElementById("EditElementModal") == null) {
        $("body").append('<div id="EditElementModal">');
        $("#EditElementModal").append(GetEditModal()); //Append Completed modal to empty div
    }
    if (document.getElementById("AddElementModal") == null) {
        $("body").append('<div id="AddElementModal">');
        $("#AddElementModal").append(GetAddModal()); //Append Completed modal to empty div
    }

    StudentTable(StudentsArray);
    
}




function DummyStudents(StudentsArray) {

    StudentsArray.push({ id: 1, Fname: "Τασος", Lname: "Παναγοπουλος", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 2, Fname: "Γιαννης", Lname: "Καλυβας", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 3, Fname: "Αλεξανδρος", Lname: "Ψυχογυιος", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 4, Fname: "Τασος", Lname: "Γκικα", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 5, Fname: "Γιαννης", Lname: "Κουνασους", Tuition: 1500, Birth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 6, Fname: "Κωστας", Lname: "Φερδεριγος", Tuition: 1500, Birth: new Date(1995, 1, 1) });

}
