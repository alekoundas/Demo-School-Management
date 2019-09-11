function CoursesTable(CoursesArray) {
    //Table Header Courses
    var trow = $.parseHTML("<tr></tr>");
    $("#course_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> Title </th>"));
    $(trow).append($.parseHTML("<th> Stream </th>"));
    $(trow).append($.parseHTML("<th> Type </th>"));
    $(trow).append($.parseHTML("<th> Start Day </th>"));
    $(trow).append($.parseHTML("<th> End Day </th>"));
    $(trow).append($.parseHTML("<th> Action " +
        "<button class=' btn btn-sm btn-success' data-toggle='modal' data-target='#addElementModal' ><i class='fa fa-plus-circle'></i></button>" +
        "<button onclick='RefreshCourseHtml();' class=' btn btn-sm btn-success'>                     <i class='fa fa-undo'>       </i></button> </th > "));

    //Table Body Courses
    var Counter = 1;
    for (var i = 0; i < CoursesArray.length; i++) {

        trow = $.parseHTML("<tr onclick='GetCoursePerElement(" + CoursesArray[i].id + ")'></tr>");
        $("#course_tbody").append(trow);
        $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
        $(trow).append($.parseHTML("<td>" + CoursesArray[i].Title + "</td>"));
        $(trow).append($.parseHTML("<td>" + CoursesArray[i].Stream + "</td>"));
        $(trow).append($.parseHTML("<td>" + CoursesArray[i].Type + "</td>"));
        $(trow).append($.parseHTML("<td>" + DateBuilder(CoursesArray[i].StartD) + "</td>"));
        $(trow).append($.parseHTML("<td>" + DateBuilder(CoursesArray[i].EndD) + "</td>"));

        $(trow).append($.parseHTML("<td>"
            + "<button onclick = 'EditRowCourse(this," + CoursesArray[i].id + ");' data-toggle = 'modal' data-target = '#editElementModal   ' class = 'btn btn-Dark'> <i class='fa fa-edit '       ></i> </button > "
            + "<button onclick = 'DeleteRowCourse(   " + CoursesArray[i].id + ");' data-toggle = 'modal' data-target = '#deleteElementModal ' class = 'btn btn-Dark '> <i class='fa fa-trash'       ></i> </button > "
            + "<button onclick = 'IncludeRowCourse(  " + CoursesArray[i].id + ");' data-toggle = 'modal' data-target = '#includeElementModal' class = 'btn btn-Dark'> <i class='fas fa-cog fa-spin'></i> </button > "
            + "</td > "
        ));
    }
}

function CourseTableMinimal(ID) {
    //Table Header Courses
    var trow = $.parseHTML("<tr></tr>");
    $("#course_thead_minimal").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> Title </th>"));
    $(trow).append($.parseHTML("<th> Stream </th>"));
    $(trow).append($.parseHTML("<th> Type </th>"));
    $(trow).append($.parseHTML("<th> Start Day </th>"));
    $(trow).append($.parseHTML("<th> End Day </th>"));

    //Table Body Courses
    var Counter = 1;
    if (ID) {
        for (var i = 0; i < CoursesAssignmentsArray.length; i++) {
            if (CoursesAssignmentsArray[i].AssignmentId == ID) {
                for (var j = 0; j < CoursesArray.length; j++) {
                    if (CoursesArray[j].id == CoursesAssignmentsArray[i].CourseId) {
                        trow = $.parseHTML("<tr></tr>");
                        $("#course_tbody_minimal").append(trow);
                        $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                        $(trow).append($.parseHTML("<td>" + CoursesArray[j].Title + "</td>"));
                        $(trow).append($.parseHTML("<td>" + CoursesArray[j].Stream + "</td>"));
                        $(trow).append($.parseHTML("<td>" + CoursesArray[j].Type + "</td>"));
                        $(trow).append($.parseHTML("<td>" + DateBuilder(CoursesArray[j].StartD) + "</td>"));
                        $(trow).append($.parseHTML("<td>" + DateBuilder(CoursesArray[j].EndD) + "</td>"));
                    }
                }
            }
        }
    }
    else {
        //Table Body Courses
        for (var i = 0; i < CoursesArray.length; i++) {

            trow = $.parseHTML("<tr></tr>");
            $("#course_tbody_minimal").append(trow);
            $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
            $(trow).append($.parseHTML("<td>" + CoursesArray[i].Title + "</td>"));
            $(trow).append($.parseHTML("<td>" + CoursesArray[i].Stream + "</td>"));
            $(trow).append($.parseHTML("<td>" + CoursesArray[i].Type + "</td>"));
            $(trow).append($.parseHTML("<td>" + DateBuilder(CoursesArray[i].StartD) + "</td>"));
            $(trow).append($.parseHTML("<td>" + DateBuilder(CoursesArray[i].EndD) + "</td>"));
        }
    }
}


//For use in Assignments Add Modal
function CourseTableAssignmentModal(AssignmentId, GivenCourseArr) {
    //Table Header Courses
    var trow = $.parseHTML("<tr></tr>");
    $("#modal_course_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> Title </th>"));
    $(trow).append($.parseHTML("<th> Stream </th>"));
    $(trow).append($.parseHTML("<th> Type </th>"));
    $(trow).append($.parseHTML("<th> Start Day </th>"));
    $(trow).append($.parseHTML("<th> End Day </th>"));

    //Print Every Table Row With Checked or Not In The Checkbox
    //Every CheckBox Will Keep The CourseID @ .val()
    var CourseHitSuccess;
    var Counter = 1;
    for (var j = 0; j < CoursesArray.length; j++) {
        CourseHitSuccess = false;
        for (var i = 0; i < GivenCourseArr.length; i++) {
            if (GivenCourseArr[i].AssignmentId == AssignmentId && CoursesArray[j].id == GivenCourseArr[i].CourseId) {
                //if true -> is checked
                trow = $.parseHTML("<tr onclick='SelectedCourseInAssignmentAdd(this,true," + CoursesArray[j].id + ")'></tr>");
                $("#modal_course_tbody").append(trow);
                $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                $(trow).append($.parseHTML("<td>" + CoursesArray[j].Title + "</td>"));
                $(trow).append($.parseHTML("<td>" + CoursesArray[j].Stream + "</td>"));
                $(trow).append($.parseHTML("<td>" + CoursesArray[j].Type + "</td>"));
                $(trow).append($.parseHTML("<td>" + DateBuilder(CoursesArray[j].StartD) + "</td>"));
                $(trow).append($.parseHTML("<td>" + DateBuilder(CoursesArray[j].EndD) + "</td>"));
                $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox_assignment_include' value='" + CoursesArray[j].id + "' checked></td>"));
                CourseHitSuccess = true;
            }
        }
        if (CourseHitSuccess == false) {
            //if false -> is Not checked
            trow = $.parseHTML("<tr onclick='SelectedCourseInAssignmentAdd(this,false," + CoursesArray[j].id + ")'></tr>");
            $("#modal_course_tbody").append(trow);
            $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
            $(trow).append($.parseHTML("<td>" + CoursesArray[j].Title + "</td>"));
            $(trow).append($.parseHTML("<td>" + CoursesArray[j].Stream + "</td>"));
            $(trow).append($.parseHTML("<td>" + CoursesArray[j].Type + "</td>"));
            $(trow).append($.parseHTML("<td>" + DateBuilder(CoursesArray[j].StartD) + "</td>"));
            $(trow).append($.parseHTML("<td>" + DateBuilder(CoursesArray[j].EndD) + "</td>"));
            $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox_assignment_include' value='" + CoursesArray[j].id + "' ></td>"));
        }
    }
}









function SecondaryTablesCourse() {
    var Row = $.parseHTML("<div class='row' id='secondary_tables'></div>");
    var ColStudentMinimalTable = $.parseHTML("   <div class='col-7 col-lg-5  col-xl-3 container' id='StudentMinimalTable'   ></div>");
    var ColTrainerMinimalTable = $.parseHTML("   <div class='col-7 col-lg-5  col-xl-3 container' id='TrainerMinimalTable'   ></div>");
    var ColAssignmentMinimalTable = $.parseHTML("<div class='col-7 col-lg-6  col-xl-3 container' id='AssignmentMinimalTable'></div>");


    //Append Everything Together I a Row  
    $(Row).append(ColStudentMinimalTable);
    $(Row).append(ColTrainerMinimalTable);
    $(Row).append(ColAssignmentMinimalTable);

    return Row;
}


