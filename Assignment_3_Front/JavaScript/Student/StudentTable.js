function StudentTable(StudentArray) {

    //Table Header Students
    var trow = $.parseHTML("<tr></tr>");
    $("#student_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> First Name </th>"));
    $(trow).append($.parseHTML("<th> Last Name </th>"));
    $(trow).append($.parseHTML("<th> Tuition </th>"));
    $(trow).append($.parseHTML("<th> Date Of Birth </th>"));
    $(trow).append($.parseHTML("<th> Action <button onclick='AddStudent();' data-toggle='modal' data-target='#addElementModal' class=' btn btn-sm btn-success'>+</button> <button onclick='RefreshStudentHtml();' class=' btn btn-sm btn-success'>0</button> </th>"));
    //$(trow).append($.parseHTML("<th> </td>"));
    //$(trow).append($.parseHTML("<th></td>"));


    //Table Body Students
    var Counter = 1;
    for (var i = 0; i < StudentArray.length; i++) {

        trow = $.parseHTML("<tr></tr>");
        $("#student_tbody").append(trow);
        $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].Fname + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].Lname + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].Tuition + "</td>"));
        $(trow).append($.parseHTML("<td>" + DateBuilder(StudentArray[i].Birth) + "</td>"));

        $(trow).append($.parseHTML("<td>"
            + "<button onclick = 'EditRowStudent(this," + StudentArray[i].id + ");' data-toggle = 'modal' data-target='#editElementModal'   class = 'btn btn-primary' > Edit</button >"
            + "<button onclick = 'DeleteRowStudent(" + StudentArray[i].id + ");'    data-toggle = 'modal' data-target='#deleteElementModal' class = 'btn btn-danger'  > Delete</button > "
            + "</td > "
        ));

    }
}



function StudentTableMinimal(CourseId) {

    //Table Header Students
    var trow = $.parseHTML("<tr></tr>");
    $("#student_thead_minimal").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> First Name </th>"));
    $(trow).append($.parseHTML("<th> Last Name </th>"));
    $(trow).append($.parseHTML("<th> Tuition </th>"));
    $(trow).append($.parseHTML("<th> Date Of Birth </th>"));

    var Counter = 1;
    if (CourseId) {
        //Table Body Students
        for (var i = 0; i < CoursesStudentsArray.length; i++) {
            if (CoursesStudentsArray[i].CourseId == CourseId) {
                for (var j = 0; j < StudentsArray.length; j++) {
                    if (StudentsArray[j].id == CoursesStudentsArray[i].StudentId) {
                        trow = $.parseHTML("<tr></tr>");
                        $("#student_tbody_minimal").append(trow);
                        $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                        $(trow).append($.parseHTML("<td>" + StudentsArray[j].Fname + "</td>"));
                        $(trow).append($.parseHTML("<td>" + StudentsArray[j].Lname + "</td>"));
                        $(trow).append($.parseHTML("<td>" + StudentsArray[j].Tuition + "</td>"));
                        $(trow).append($.parseHTML("<td>" + DateBuilder(StudentsArray[j].Birth) + "</td>"));
                    }
                }
            }
        }
    }
    else {
        //Table Body Students
        for (var i = 0; i < StudentsArray.length; i++) {

            trow = $.parseHTML("<tr></tr>");
            $("#course_student_tbody").append(trow);
            $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
            $(trow).append($.parseHTML("<td>" + StudentsArray[i].Fname + "</td>"));
            $(trow).append($.parseHTML("<td>" + StudentsArray[i].Lname + "</td>"));
            $(trow).append($.parseHTML("<td>" + StudentsArray[i].Tuition + "</td>"));
            $(trow).append($.parseHTML("<td>" + DateBuilder(StudentsArray[i].Birth) + "</td>"));
        }
    }
}


function StudentTableCourseModal(CourseId, AssignmentId) {
    //Table Header Students
    var trow = $.parseHTML("<tr></tr>");
    $("#modal_student_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> First Name </th>"));
    $(trow).append($.parseHTML("<th> Last Name </th>"));
    $(trow).append($.parseHTML("<th> Tuition </th>"));
    $(trow).append($.parseHTML("<th> Date Of Birth </th>"));
    $(trow).append($.parseHTML("<th> In Course </th>"));


    //Table Body Students


    //If Assignment Id Is Set 
    //The Table Assignment Per Course Per Student Will Be Returned
    //Else
    //The Table Course Per Student Will Be Returned
    if (CourseId && AssignmentId) {
        //Print Every Table Row With Checked or Not In The Checkbox
        //Every CheckBox Will Keep The StudentID @ .val()
        var CourseHitSuccess;
        var Counter = 1;
        for (var i = 0; i < StudentsArray.length; i++) {
            CourseHitSuccess = false;
            for (var j = 0; j < CoursesStudentsArray.length; j++) {
                for (var k = 0; k < AssignmentsStudentsArray.length; k++) {
                    if (CoursesStudentsArray[j].CourseId == CourseId && CoursesStudentsArray[j].StudentId == StudentsArray[i].id && AssignmentsStudentsArray[k].AssignmentId == AssignmentId && AssignmentsStudentsArray[k].StudentId == StudentsArray[i].id) {
                        trow = $.parseHTML("<tr></tr>");
                        $("#modal_student_tbody").append(trow);
                        $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                        $(trow).append($.parseHTML("<td>" + StudentsArray[i].Fname + "</td>"));
                        $(trow).append($.parseHTML("<td>" + StudentsArray[i].Lname + "</td>"));
                        $(trow).append($.parseHTML("<td>" + StudentsArray[i].Tuition + "</td>"));
                        $(trow).append($.parseHTML("<td>" + DateBuilder(StudentsArray[i].Birth) + "</td>"));
                        $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox_student' value='" + StudentsArray[i].id + "' checked></td>"));
                        CourseHitSuccess = true;
                    }
                }              
            }
            if (CourseHitSuccess == false) {
                trow = $.parseHTML("<tr></tr>");
                $("#modal_student_tbody").append(trow);
                $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                $(trow).append($.parseHTML("<td>" + StudentsArray[i].Fname + "</td>"));
                $(trow).append($.parseHTML("<td>" + StudentsArray[i].Lname + "</td>"));
                $(trow).append($.parseHTML("<td>" + StudentsArray[i].Tuition + "</td>"));
                $(trow).append($.parseHTML("<td>" + DateBuilder(StudentsArray[i].Birth) + "</td>"));
                $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox_student' value='" + StudentsArray[i].id + "' ></td>"));
            }
        }
    }
    else if (!CourseId && AssignmentId){
        //Print Every Table Row With Checked or Not In The Checkbox
        //Every CheckBox Will Keep The StudentID @ .val()
        var CourseHitSuccess;
        var Counter = 1;
        for (var j = 0; j < StudentsArray.length; j++) {
            CourseHitSuccess = false;
            for (var i = 0; i < AssignmentsStudentsArray.length; i++) {
                if (AssignmentsStudentsArray[i].AssignmentId == AssignmentId && StudentsArray[j].id == AssignmentsStudentsArray[i].StudentId) {
                    trow = $.parseHTML("<tr></tr>");
                    $("#modal_student_tbody").append(trow);
                    $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                    $(trow).append($.parseHTML("<td>" + StudentsArray[j].Fname + "</td>"));
                    $(trow).append($.parseHTML("<td>" + StudentsArray[j].Lname + "</td>"));
                    $(trow).append($.parseHTML("<td>" + StudentsArray[j].Tuition + "</td>"));
                    $(trow).append($.parseHTML("<td>" + DateBuilder(StudentsArray[j].Birth) + "</td>"));
                    $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox' value='" + StudentsArray[j].id + "' checked></td>"));
                    CourseHitSuccess = true;
                }
            }
            if (CourseHitSuccess == false) {
                trow = $.parseHTML("<tr></tr>");
                $("#modal_student_tbody").append(trow);
                $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                $(trow).append($.parseHTML("<td>" + StudentsArray[j].Fname + "</td>"));
                $(trow).append($.parseHTML("<td>" + StudentsArray[j].Lname + "</td>"));
                $(trow).append($.parseHTML("<td>" + StudentsArray[j].Tuition + "</td>"));
                $(trow).append($.parseHTML("<td>" + DateBuilder(StudentsArray[j].Birth) + "</td>"));
                $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox' value='" + StudentsArray[j].id + "' ></td>"));
            }
        }
    }
    else if (CourseId && !AssignmentId) {
        //Print Every Table Row With Checked or Not In The Checkbox
        //Every CheckBox Will Keep The StudentID @ .val()
        var CourseHitSuccess;
        var Counter = 1;
        for (var j = 0; j < StudentsArray.length; j++) {
            CourseHitSuccess = false;
            for (var i = 0; i < CoursesStudentsArray.length; i++) {
                if (CoursesStudentsArray[i].CourseId == CourseId && StudentsArray[j].id == CoursesStudentsArray[i].StudentId) {
                    trow = $.parseHTML("<tr></tr>");
                    $("#modal_student_tbody").append(trow);
                    $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                    $(trow).append($.parseHTML("<td>" + StudentsArray[j].Fname + "</td>"));
                    $(trow).append($.parseHTML("<td>" + StudentsArray[j].Lname + "</td>"));
                    $(trow).append($.parseHTML("<td>" + StudentsArray[j].Tuition + "</td>"));
                    $(trow).append($.parseHTML("<td>" + DateBuilder(StudentsArray[j].Birth) + "</td>"));
                    $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox' value='" + StudentsArray[j].id + "' checked></td>"));
                    CourseHitSuccess = true;
                }
            }
            if (CourseHitSuccess == false) {
                trow = $.parseHTML("<tr></tr>");
                $("#modal_student_tbody").append(trow);
                $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                $(trow).append($.parseHTML("<td>" + StudentsArray[j].Fname + "</td>"));
                $(trow).append($.parseHTML("<td>" + StudentsArray[j].Lname + "</td>"));
                $(trow).append($.parseHTML("<td>" + StudentsArray[j].Tuition + "</td>"));
                $(trow).append($.parseHTML("<td>" + DateBuilder(StudentsArray[j].Birth) + "</td>"));
                $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox' value='" + StudentsArray[j].id + "' ></td>"));
            }
        }
    }
  
   


    $("#modal_student_thead").append(trow);
}

