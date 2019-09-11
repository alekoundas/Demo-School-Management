function GetIncludeModalAssignment() {

    var BaseModal = $.parseHTML("<div class='modal fade' id='includeElementModal' tabindex='-1' role='dialog' ></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' >Include Assignment Per Course Per Student</h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");

    //Radio Buttons To Select Body
    var ModalBodyClassRadio = $.parseHTML("<div id='AssignmentPerCoursePerStudentModalBodyTopBt'></div>");
    var ModalBodyRadioInputStudent = $.parseHTML("<button   id='StudentRadio' onclick='ShowAssignmentTableInModal(this)' class = 'btn btn-primary'name='RadioBt'>  Students  </button>");
    var ModalBodyRadioInputCourse = $.parseHTML("<button   id='CourseRadio' onclick='ShowAssignmentTableInModal(this)' class = 'btn btn-primary'name='RadioBt'>  Courses  </button>");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("       <div class= 'modal-body'> </div>");
    var ModalBodyRowGrid = $.parseHTML("<div class= 'row'       > </div>");
    var ModalBodyTitle = $.parseHTML("  <p>Select a Course To Edit</p>");
    var ModalBodyTitle2 = $.parseHTML("  <p class='text-muted'>Here You Can Update Assignment Per Students Or Assignment Per Course Per Student.By Clicking Update The Changes Been Made Are Saved To The DataBase And Refresheses The Tables.You Can Select A Course(Courses Included To Assignment) To See The Students Per Assignment Per Course.Also Modal Doesnt Auto Dismish On Submit</p>");

    //Tables
    var ModalBodyTableCourse = $.parseHTML(" <div id='CourseModalIncludeTableTop' ></div>");
    var ModalBodyTableStudent = $.parseHTML("<div id='CourseModalIncludeTable' style='display:none'></div>");



    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitIncludeAssignment(this);'>Update Changes</button>");



    //Append Everything Together

    //Bootstrap Modal ???
    $(BaseModal).append(ModalDialog);
    $(ModalDialog).append(ModalCotent);

    //Header
    $(ModalCotent).append(ModalHeader);
    $(ModalHeader).append(ModalHeaderTitle);
    $(ModalHeader).append(ModalHeaderButton);

    //Body
    $(ModalCotent).append(ModalBodyClassRadio);
    $(ModalBodyClassRadio).append(ModalBodyRadioInputStudent);
    $(ModalBodyClassRadio).append(ModalBodyRadioInputCourse);
    $(ModalCotent).append(ModalBody);


    //Bootstrap Body Row 1
    $(ModalBodyRowGrid).append(ModalBodyTitle);
    $(ModalBodyRowGrid).clone().appendTo(ModalBody).append(ModalBodyTitle2);
    $(ModalBodyTitle).remove();//Remove the input because clone() will cary any next inputs with it


    //Bootstrap Body Row 2
    $(ModalBodyRowGrid).append(ModalBodyTableCourse);
    $(ModalBodyRowGrid).clone().appendTo(ModalBody);
    $(ModalBodyTableCourse).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Body Row 3
    $(ModalBodyRowGrid).append(ModalBodyTableStudent);
    $(ModalBodyRowGrid).clone().appendTo(ModalBody);
    $(ModalBodyTableStudent).remove();//Remove the input because clone() will cary any next inputs with it


    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;

}

//global var
var AssignmentID;
var CourseID;



function IncludeRowAssignment(Assignmentid) {
    AssignmentID = Assignmentid;
    //Display Course Table In Modal
    RefreshCourseHtmlModalBody(AssignmentID, CoursesAssignmentsArray);

}





function ShowAssignmentTableInModal(LablelObj) {
    if ($(LablelObj).text().trim() == "Students") {
        RefreshStudentHtmlCourseModalBody(null, AssignmentID);
        $("#CourseModalIncludeTableTop").hide();
        $("#CourseModalIncludeTable").show();

    }
    if ($(LablelObj).text().trim() == "Courses") {
        $("#CourseModalIncludeTableTop").show();

        RefreshCourseHtmlModalBody(AssignmentID, CoursesAssignmentsArray);
    }

}















//Called By include Button In Modal
//Find The Changes Made By The User
function SubmitIncludeAssignment(SubmitBt, TempDb) {
    var UpdateStudentsCourse = [];
    var UpdateCoursesAssignmnet = [];
    if (SubmitBt != null) {

        //Course Only
        $('table [name="checkerbox_assignment_include"]').each(function (i, chk) {
            if (chk.checked)
                UpdateCoursesAssignmnet.push($(chk).val());
        });
        CoursesAssignmentsArray = UpdateAssignmentCourseData(UpdateCoursesAssignmnet, "course", CoursesAssignmentsArray);

        //Students Only
        if ($('#CourseModalIncludeTable').is(':visible') && !$('#CourseModalIncludeTableTop').is(':visible')) {
            $('table [name="checkerbox"]').each(function (i, chk) {
                if (chk.checked)
                    UpdateStudentsCourse.push($(chk).val());
            });
            console.log(UpdateStudentsCourse);
            UpdateAssignmentCourseData(UpdateStudentsCourse, "student_assignment", AssignmentsStudentsArray);
        }

        //Students Per Course Per Assignment Only
        if ($('#CourseModalIncludeTable').is(':visible') && $('#CourseModalIncludeTableTop').is(':visible')) {
            $('table [name="checkerbox_student"]').each(function (i, chk) {
                if (chk.checked)
                    UpdateStudentsCourse.push($(chk).val());
            });
            UpdateAssignmentCourseData(UpdateStudentsCourse, "student_course", CoursesStudentsArray);
        }
    }
    else {
        //Courses Only
        $('table [name="checkerbox_assignment_include"]').each(function (i, chk) {
            if (chk.checked)
                UpdateCoursesAssignmnet.push($(chk).val());
        });
        TemporaryDb = UpdateAssignmentCourseData(UpdateCoursesAssignmnet, "course", TempDb);
        return UpdateAssignmentCourseData(UpdateCoursesAssignmnet, "course", TempDb);
    }
    RefreshCourseHtmlModalBody(AssignmentID, CoursesAssignmentsArray);
}

//Will Show Student Table To Edit 
//Only Show Table On Checked Courses
//Use 2 Diferent Databases So I Can Refresh Dynamicaly The Table
var TemporaryDb = CoursesAssignmentsArray;
function SelectedCourseInAssignmentAdd(InputObj, Checked, CourseId) {

    CourseID = CourseId;
    TemporaryDb = SubmitIncludeAssignment(null, TemporaryDb);
    if (Checked) {
        console.log(CourseID, AssignmentID);
        RefreshStudentHtmlCourseModalBody(CourseID,AssignmentID);
        
        $(InputObj).siblings().css('background-color', 'white');
        $("#CourseModalIncludeTable").css('display', 'block');
        $(InputObj).css('background-color', 'rgba(0, 58, 219, 0.36)');
    }
    else {
        $("#CourseModalIncludeTable").empty();
        $("#CourseModalIncludeTable").css('display', 'none');
        $(InputObj).siblings().css('background-color', 'white');

    }
}



















//Returns a Combined Table Without Double Entries 
function UpdateAssignmentCourseData(UpdatedData, Type, GivenArray) {
    if (Type == "student_course") {

        //Remove From DataBase Elements With The CourseID Selected.So I can Add The New Elements From The Same CourseID
        var FilteredCoursesStudentsArray = CoursesStudentsArray.filter(function (Element) {
            return Element.CourseId != CourseID;
        });
        var FilteredAssignmentsStudentsArray = AssignmentsStudentsArray.filter(function (Element) {
            return Element.AssignmentId != AssignmentID;
        });

        CoursesStudentsArray = FilteredCoursesStudentsArray;
        AssignmentsStudentsArray = FilteredAssignmentsStudentsArray;

        console.log(FilteredCoursesStudentsArray);
        console.log(FilteredAssignmentsStudentsArray);


        for (var i = 0; i < UpdatedData.length; i++) {
            var MaxId = Math.max.apply(Math, CoursesStudentsArray.map(function (Element) { return Element.id; }));
            CoursesStudentsArray.push({ id: MaxId + 1, CourseId: CourseID, StudentId: parseInt(UpdatedData[i]) })
        }
        for (var i = 0; i < UpdatedData.length; i++) {
            var MaxId = Math.max.apply(Math, AssignmentsStudentsArray.map(function (Element) { return Element.id; }));
            AssignmentsStudentsArray.push({ id: MaxId + 1, AssignmentId: AssignmentID, StudentId: parseInt(UpdatedData[i]) })
        }
    }
    if (Type == "student_assignment") {
        //Remove From DataBase Elements With The CourseID Selected.So I can Add The New Elements From The Same CourseID
        console.log(UpdatedData);
        var FilteredAssignmentsStudentsArray = AssignmentsStudentsArray.filter(function (Element) {
            return Element.AssignmentId != AssignmentID;
        });

        AssignmentsStudentsArray = FilteredAssignmentsStudentsArray;

        for (var i = 0; i < UpdatedData.length; i++) {
            var MaxId = Math.max.apply(Math, AssignmentsStudentsArray.map(function (Element) { return Element.id; }));
            AssignmentsStudentsArray.push({ id: MaxId + 1, AssignmentId: AssignmentID, StudentId: parseInt(UpdatedData[i]) })

        }
    }

    if (Type == "course") {
        //Remove From DataBase Elements With The CourseID Selected.So I can Add The New Elements From The Same CourseID
        var FilteredItems = GivenArray.filter(function (Element) {
            return Element.AssignmentId != AssignmentID;

        });
        GivenArray = FilteredItems;
        for (var i = 0; i < UpdatedData.length; i++) {
            var MaxId = Math.max.apply(Math, GivenArray.map(function (Element) { return Element.id; }));
            GivenArray.push({ id: MaxId + 1, AssignmentId: AssignmentID, CourseId: parseInt(UpdatedData[i]) })
        }
    }
    return GivenArray;
}