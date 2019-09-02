function AssignmentTable(AssignmentArray) {

    //Table Header Assignments
    var trow = $.parseHTML("<tr></tr>");
    $("#assignment_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> Title </th>"));
    $(trow).append($.parseHTML("<th> Description </th>"));
    $(trow).append($.parseHTML("<th> Submit Due </th>"));
    $(trow).append($.parseHTML("<th> Action <button onclick='AddAssignment();' data-toggle='modal' data-target='#addElementModal' class=' btn btn-sm btn-success'>+</button> <button onclick='RefreshAssignmentHtml();' class=' btn btn-sm btn-success'>0</button> </th>"));
    //$(trow).append($.parseHTML("<th> </td>"));
    //$(trow).append($.parseHTML("<th></td>"));


    //Table Body Assignments
    var Counter = 1;
    for (var i = 0; i < AssignmentArray.length; i++) {

        trow = $.parseHTML("<tr></tr>");
        $("#assignment_tbody").append(trow);
        $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
        $(trow).append($.parseHTML("<td>" + AssignmentsArray[i].Title + "</td>"));
        $(trow).append($.parseHTML("<td>" + AssignmentsArray[i].Description + "</td>"));
        $(trow).append($.parseHTML("<td>" + DateBuilder(AssignmentsArray[i].SubDateTime) + "</td>"));

        $(trow).append($.parseHTML("<td>"
            + "<button onclick = 'EditRowAssignment(this," + AssignmentArray[i].id + ");' data-toggle = 'modal' data-target='#editElementModal'   class = 'btn btn-primary' > Edit</button >"
            + "<button onclick = 'DeleteRowAssignment(" + AssignmentArray[i].id + ");'    data-toggle = 'modal' data-target='#deleteElementModal' class = 'btn btn-danger'  > Delete</button > "
            + "</td > "
        ));

    }
}



function AssignmentTableMinimal(CourseId) {

    //Table Header Assignments
    var trow = $.parseHTML("<tr></tr>");
    $("#course_assignment_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> Title </th>"));
    $(trow).append($.parseHTML("<th> Description </th>"));
    $(trow).append($.parseHTML("<th> Submit Due </th>"));
    var Counter = 1;
    if (CourseId) {
        for (var j = 0; j < AssignmentsArray.length; j++) {
            
            for (var i = 0; i < CoursesAssignmentsArray.length; i++) {
                if (CoursesAssignmentsArray[i].CourseId == CourseId) {
                    if (AssignmentsArray[j].id == CoursesAssignmentsArray[i].AssignmentId) {
                        trow = $.parseHTML("<tr></tr>");
                        $("#course_assignment_tbody").append(trow);
                        $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                        $(trow).append($.parseHTML("<td>" + AssignmentsArray[j].Title + "</td>"));
                        $(trow).append($.parseHTML("<td>" + AssignmentsArray[j].Description + "</td>"));
                        $(trow).append($.parseHTML("<td>" + DateBuilder(AssignmentsArray[j].SubDateTime) + "</td>"));
                    }
                }
            }
        }
    }
}


function AssignmentTableCourseModal(CourseId) {
    //Table Header Assignments
    var trow = $.parseHTML("<tr></tr>");
    $("#modal_assignment_thead").append(trow)
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> Title </th>"));
    $(trow).append($.parseHTML("<th> Description </th>"));
    $(trow).append($.parseHTML("<th> Submit Due </th>"));
    $(trow).append($.parseHTML("<th> In Course </th>"));

    console.log(AssignmentsArray.length);
    //Table Body Assignments

    //Print Every Table Row With Checked or Not In The Checkbox
    //Every CheckBox Will Keep The AssignmentID @ .val()
    var Counter = 1;
    var CourseHitSuccess;
    for (var j = 0; j < AssignmentsArray.length; j++) {
        CourseHitSuccess = false;
        for (var i = 0; i < CoursesAssignmentsArray.length; i++) {
            if (CoursesAssignmentsArray[i].CourseId == CourseId) {
                if (AssignmentsArray[j].id == CoursesAssignmentsArray[i].AssignmentId) {
                    trow = $.parseHTML("<tr></tr>");
                    $("#modal_assignment_tbody").append(trow);
                    $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                    $(trow).append($.parseHTML("<td>" + AssignmentsArray[j].Title + "</td>"));
                    $(trow).append($.parseHTML("<td>" + AssignmentsArray[j].Description + "</td>"));
                    $(trow).append($.parseHTML("<td>" + DateBuilder(AssignmentsArray[j].SubDateTime) + "</td>"));
                    $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox' value='" + AssignmentsArray[j].id + "' checked></td>"));
                    CourseHitSuccess = true;
                    console.log(CourseHitSuccess + " CourseID: " + CoursesAssignmentsArray[i].CourseId + " AssignmentID: " + CoursesAssignmentsArray[i].AssignmentId);
                }
            }
        }
        if (CourseHitSuccess == false) {
            trow = $.parseHTML("<tr></tr>");
            $("#modal_assignment_tbody").append(trow);
            $(trow).append($.parseHTML("<td>" + j + "</td>"));
            $(trow).append($.parseHTML("<td>" + AssignmentsArray[j].Title + "</td>"));
            $(trow).append($.parseHTML("<td>" + AssignmentsArray[j].Description + "</td>"));
            $(trow).append($.parseHTML("<td>" + DateBuilder(AssignmentsArray[j].SubDateTime) + "</td>"));
            $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox' value='" + AssignmentsArray[j].id + "' ></td>"));
        }
    }

}

