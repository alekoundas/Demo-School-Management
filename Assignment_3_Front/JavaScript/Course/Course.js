function GetCourseTable() {

    //Fill Array If Empty
    if (CoursesArray.length == 0)
        DummyCourses(CoursesArray);

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
    if(document.getElementById("DeleteElementModal") == null) {
        $("body").append('<div id="DeleteElementModal">');
        $("#DeleteElementModal").append(GetDeleteModalCourse()); //Append Completed modal to empty div
    }
    CourseTable(CoursesArray);
}




function DummyCourses(CoursesArray) {

    CoursesArray.push({ id: 1, Fname: "Τασος", Lname: "Παναγοπουλος", Subject: 1500 });
    CoursesArray.push({ id: 2, Fname: "Γιαννης", Lname: "Καλυβας", Subject: 1500});
    CoursesArray.push({ id: 3, Fname: "Αλεξανδρος", Lname: "Ψυχογυιος", Subject: 1500 });
    CoursesArray.push({ id: 4, Fname: "Τασος", Lname: "Γκικα", Subject: 1500 });
    CoursesArray.push({ id: 5, Fname: "Γιαννης", Lname: "Κουνασους", Subject: 1500});
    CoursesArray.push({ id: 6, Fname: "Κωστας", Lname: "Φερδεριγος", Subject: 1500});

}
