


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

    //for (var i = 0; i < StudentArray.length(); i++) {

    //}
    //Table Body Students
    var trow = $.parseHTML("<tr></tr>");
    $("#student_tbody").append(trow);
    $(trow).append($.parseHTML("<td>" + 1 + "</td>"));
    $(trow).append($.parseHTML("<td>Nikos</td>"));
    $(trow).append($.parseHTML("<td>" + Student.Lname + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.Tuition + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.DateOfBirth.getFullYear() + "</td>"));
    $(trow).append($.parseHTML("<td> <button onclick='EditRow(this);'data-toggle='modal' data-target='#exampleModalCenter' class='btn btn-primary'>Edit</button><button class='btn btn-danger'>Delete</button> </td>"));

    var trow = $.parseHTML("<tr></tr>");
    $("#student_tbody").append(trow);
    $(trow).append($.parseHTML("<td>" + 2 + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.Fname + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.Lname + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.Tuition + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.DateOfBirth.getFullYear() + "</td>"));
    $(trow).append($.parseHTML("<td> <button onclick='EditRow(this);'data-toggle='modal' data-target='#exampleModalCenter' class='btn btn-primary'>Edit</button><button class='btn btn-danger'>Delete</button> </td>"));

}