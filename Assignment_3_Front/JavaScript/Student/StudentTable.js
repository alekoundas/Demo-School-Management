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
    for (var i = 0; i < StudentArray.length; i++) {

        trow = $.parseHTML("<tr></tr>");
        $("#student_tbody").append(trow);
        $(trow).append($.parseHTML("<td>" + i + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].Fname + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].Lname + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].Tuition + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].Birth.getFullYear() + "</td>"));

        $(trow).append($.parseHTML("<td>"
            + "<button onclick = 'EditRowStudent(this," + StudentArray[i].id + ");' data-toggle = 'modal' data-target='#editElementModal'   class = 'btn btn-primary' > Edit</button >"
            + "<button onclick = 'DeleteRowStudent(" + StudentArray[i].id + ");'    data-toggle = 'modal' data-target='#deleteElementModal' class = 'btn btn-danger'  > Delete</button > " 
            + "</td > "
        ));

    }
}

function EditRowStudent(row, StudentId) {
    $("#EditStudentModal").modal("show");//show modal 

    //Add data- To The row Of The Modal Body With The Student Id
    //So I Can Retrieve It Later
    $(".modal-body .row").attr("data-studentid", StudentId);

    //Retrieve Data From table
    var fname = $(row).parent().siblings("td:eq( 1 )").text();
    var lname = $(row).parent().siblings("td:eq( 2 )").text();
    var tuition = $(row).parent().siblings("td:eq( 3 )").text()
    var Birth = $(row).parent().siblings("td:eq( 4 )").text()

    $('#ModalTitle').text(fname + "  " + lname);
    $('#ModalBodyFname').text(fname);
    $('#ModalBodyLname').text(lname);
    $('#ModalBodyTuition').text(tuition);
    $('#ModalBodyBirth').text(Birth);
}



