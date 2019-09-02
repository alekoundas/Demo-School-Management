function GetIncludeModalCourse() {

    var BaseModal = $.parseHTML("<div class='modal fade' id='includeElementModal' tabindex='-1' role='dialog' ></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' >Include New Course</h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("       <div class= 'modal-body'> </div>");
    var ModalBodyRowGrid = $.parseHTML("<div class= 'row'       > </div>");//Set data-Courseid From EditRow()
    var ModalBodyTitle = $.parseHTML("<p>Select Student Or Trainer To Be Included To Course</p>");

    //Radio Buttons
    var ModalBodyClassRadio = $.parseHTML("<div class='radio'></div>");
    var ModalBodyRadioInputStudent = $.parseHTML("   <label class='radio-inline' for='StudentRadio'    onclick='ShowCourseTableInModal(this)'> <input type='radio'  id='StudentRadio'    name='RadioBt'>  Students   </label>");
    var ModalBodyRadioInputTrainer = $.parseHTML("   <label class='radio-inline' for='TrainerRadio'    onclick='ShowCourseTableInModal(this)'> <input type='radio'  id='TrainerRadio'    name='RadioBt'>  Trainers   </label>");
    var ModalBodyRadioInputAssignment = $.parseHTML("<label class='radio-inline' for='AssignmentRadio' onclick='ShowCourseTableInModal(this)'> <input type='radio'  id='AssignmentRadio' name='RadioBt'> Assignments </label>");

    //Student-Traner Table
    var ModalBodyTableElement = $.parseHTML("<div id='CourseModalIncludeTable'></div>");//Will Display Student Or Trainer Table Based On Radio Option


    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitIncludeCourse(this);RefreshCourseHtml();'>Include</button>");



    //Append Everything Together

    //Bootstrap Modal ???
    $(BaseModal).append(ModalDialog);
    $(ModalDialog).append(ModalCotent);

    //Header
    $(ModalCotent).append(ModalHeader);
    $(ModalHeader).append(ModalHeaderTitle);
    $(ModalHeader).append(ModalHeaderButton);

    //Body
    $(ModalCotent).append(ModalBody);


    //Bootstrap Body Row 1
    $(ModalBodyRowGrid).append(ModalBodyTitle);
    $(ModalBodyRowGrid).clone().appendTo(ModalBody);
    $(ModalBodyTitle).remove();//Remove the input because clone() will cary any next inputs with it


    //Bootstrap Body Row 2
    $(ModalBodyRowGrid).append(ModalBodyClassRadio);
    $(ModalBodyClassRadio).append(ModalBodyRadioInputStudent);
    $(ModalBodyClassRadio).append(ModalBodyRadioInputTrainer);
    $(ModalBodyClassRadio).append(ModalBodyRadioInputAssignment);
    $(ModalBodyRowGrid).clone().appendTo(ModalBody);
    $(ModalBodyClassRadio).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Body Row 3
    $(ModalBodyRowGrid).append(ModalBodyTableElement);
    $(ModalBodyRowGrid).clone().appendTo(ModalBody);
    $(ModalBodyTableElement).remove();//Remove the input because clone() will cary any next inputs with it


    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}


var CourseID;

function IncludeRowCourse(Courseid) {
    CourseID = Courseid;
}

function ShowCourseTableInModal(RadioObj) {
    if ($(RadioObj).text().trim() == "Students") {
        RefreshStudentHtmlCourseModalBody(CourseID);
    }
    if ($(RadioObj).text().trim() == "Trainers") {
        RefreshTrainerHtmlCourseModalBody(CourseID);
    }
    if ($(RadioObj).text().trim() == "Assignments") {
        RefreshAssignmentHtmlCourseModalBody(CourseID);
    }
}







function SubmitIncludeCourse(SubmitBt) {
    var UpdateStudentsCourse = [];
    var UpdateTrainersCourse = [];
    var UpdateAssignmentsCourse = [];
    if ($('#StudentRadio').is(':checked')) {
        $('table [type="checkbox"]').each(function (i, chk) {
            if (chk.checked) 
                UpdateStudentsCourse.push($(chk).val());
        });
        UpdateCourseData(UpdateStudentsCourse, "student");
    }
    if ($('#TrainerRadio').is(':checked')) {
        $('table [type="checkbox"]').each(function (i, chk) {
            if (chk.checked) 
                UpdateTrainersCourse.push($(chk).val());
        });
        UpdateCourseData(UpdateTrainersCourse, "trainer");
    }
    if ($('#AssignmentRadio').is(':checked')) {
        $('table [type="checkbox"]').each(function (i, chk) {
            if (chk.checked) 
                UpdateAssignmentsCourse.push($(chk).val());
        });
        UpdateCourseData(UpdateAssignmentsCourse, "assignment");
    }

} 


function UpdateCourseData(UpdatedData, Type) {
    if (Type == "student") {
        //Remove From DataBase Elements With The CourseID Selected.So I can Add The New Elements From The Same CourseID
        var FilteredItems = CoursesStudentsArray.filter(function (Element) {
            return Element.CourseId != CourseID;

        });
        CoursesStudentsArray = FilteredItems;
        for (var i = 0; i < UpdatedData.length; i++) {
            var MaxId = Math.max.apply(Math, CoursesStudentsArray.map(function (Element) { return Element.id; }));
            CoursesStudentsArray.push({ id: MaxId + 1, CourseId: CourseID, StudentId: parseInt(UpdatedData[i]) })
        }      
    }  
    if (Type == "trainer") {
        //Remove From DataBase Elements With The CourseID Selected.So I can Add The New Elements From The Same CourseID
        var FilteredItems = CoursesTrainersArray.filter(function (Element) {
            return Element.CourseId != CourseID;

        });
        CoursesTrainersArray = FilteredItems;
        for (var i = 0; i < UpdatedData.length; i++) {
            var MaxId = Math.max.apply(Math, CoursesTrainersArray.map(function (Element) { return Element.id; }));
            CoursesTrainersArray.push({ id: MaxId + 1, CourseId: CourseID, TrainerId: parseInt(UpdatedData[i]) })
        }       
    }
    if (Type == "assignment") {
        //Remove From DataBase Elements With The CourseID Selected.So I can Add The New Elements From The Same CourseID
        var FilteredItems = CoursesAssignmentsArray.filter(function (Element) {
            return Element.CourseId != CourseID;

        });
        CoursesAssignmentsArray = FilteredItems;
        for (var i = 0; i < UpdatedData.length; i++) {
            var MaxId = Math.max.apply(Math, CoursesAssignmentsArray.map(function (Element) { return Element.id; }));
            CoursesAssignmentsArray.push({ id: MaxId + 1, CourseId: CourseID, AssignmentId: parseInt(UpdatedData[i]) })
        }
    }

    GetCoursePerElement(CourseID);
    ResetModals();
}