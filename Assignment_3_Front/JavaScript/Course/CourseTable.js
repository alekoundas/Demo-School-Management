function CourseTable(CourseArray) {

    //Table Header Courses
    var trow = $.parseHTML("<tr></tr>");
    $("#course_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> First Name </th>"));
    $(trow).append($.parseHTML("<th> Last Name </th>"));
    $(trow).append($.parseHTML("<th> Subject </th>"));
    $(trow).append($.parseHTML("<th> Action <button onclick='AddCourse();' data-toggle='modal' data-target='#addElementModal' class=' btn btn-sm btn-success'>+</button><button onclick='RefreshCourseHtml();' class=' btn btn-sm btn-success'>🔄</button> </th>"));
    //$(trow).append($.parseHTML("<button onclick='AddCourse();' data-toggle='modal' data-target='#addElementModal' class=' btn btn-sm btn-success'>+</button> "));
    //$(trow).append($.parseHTML("<button onclick='RefreshCourseHtml();' class=' btn btn-sm btn-success'>0</button> </th>"));


    //Table Body Courses
    for (var i = 0; i < CourseArray.length; i++) {

        trow = $.parseHTML("<tr></tr>");
        $("#course_tbody").append(trow);
        $(trow).append($.parseHTML("<td>" + i + "</td>"));
        $(trow).append($.parseHTML("<td>" + CourseArray[i].Fname + "</td>"));
        $(trow).append($.parseHTML("<td>" + CourseArray[i].Lname + "</td>"));
        $(trow).append($.parseHTML("<td>" + CourseArray[i].Subject + "</td>"));

        $(trow).append($.parseHTML("<td>"
            + "<button onclick = 'EditRowCourse(this," + CourseArray[i].id + ");' data-toggle = 'modal' data-target = '#editElementModal'   class = 'btn btn-primary'> Edit   </button >"
            + "<button onclick = 'DeleteRowCourse(" + CourseArray[i].id + ");'    data-toggle = 'modal' data-target = '#deleteElementModal' class = 'btn btn-danger' > Delete </button > " 
            + "</td > "
        ));

    }
}

function EditRowCourse(row, CourseId) {
    $("#EditCourseModal").modal("show");//show modal 

    //Add data- To The row Of The Modal Body With The Course Id
    //So I Can Retrieve It Later
    $(".modal-body .row").attr("data-courseid", CourseId);

    //Retrieve Data From table
    var fname = $(row).parent().siblings("td:eq( 1 )").text();
    var lname = $(row).parent().siblings("td:eq( 2 )").text();
    var subject = $(row).parent().siblings("td:eq( 3 )").text();

    $('#ModalTitle').text(fname + "  " + lname);
    $('#ModalBodyFname').text(fname);
    $('#ModalBodyLname').text(lname);
    $('#ModalBodySubject').text(subject);

}
