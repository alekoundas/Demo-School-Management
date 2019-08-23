function StudentTable(StudentArray) {

    //Table Header Students
    var trow = $.parseHTML("<tr></tr>");
    $("#student_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> First Name </th>"));
    $(trow).append($.parseHTML("<th> Last Name </th>"));
    $(trow).append($.parseHTML("<th> Tuition </th>"));
    $(trow).append($.parseHTML("<th> Date Of Birth </th>"));
    $(trow).append($.parseHTML("<th> Action </th>"));
    $(trow).append($.parseHTML("<th><button onclick='AddStudent();' class=' btn btn-sm btn-success'>+</button> </td>"));
    $(trow).append($.parseHTML("<th><button onclick='RefreshStudentHtml();' class=' btn btn-sm btn-success'>+</button> </td>"));


    //Table Body Students
    for (var i = 0; i < StudentArray.length; i++) {

        trow = $.parseHTML("<tr></tr>");
        $("#student_tbody").append(trow);
        $(trow).append($.parseHTML("<td>" + i + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].Fname + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].Lname + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].Tuition + "</td>"));
        $(trow).append($.parseHTML("<td>" + StudentArray[i].DateOfBirth.getFullYear() + "</td>"));
        $(trow).append($.parseHTML("<td> <button onclick='EditRow(this,"+StudentArray[i].id+");'data-toggle='modal' data-target='#exampleModalCenter' class='btn btn-primary'>Edit</button><button class='btn btn-danger'>Delete</button> </td>"));

    }
}