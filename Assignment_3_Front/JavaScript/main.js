$(document).ready(function () {



    var Student = {
        Fname: "Alex",
        Lname: "Psychoson",
        Tuition: 1500,
        DateOfBirth: "1/2/95"
    };




    //Table Header Students
    var trow = $.parseHTML("<tr></tr>");
    $("#student_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> First Name </th>"));
    $(trow).append($.parseHTML("<th> Last Name </th>"));
    $(trow).append($.parseHTML("<th> Tuition </th>"));
    $(trow).append($.parseHTML("<th> Date Of Birth </th>"));
    $(trow).append($.parseHTML("<th> Action </th>"));

    //Table Body Students
    var trow = $.parseHTML("<tr></tr>");
    $("#student_tbody").append(trow);
    $(trow).append($.parseHTML("<td>" + 1 + "</td>"));
    $(trow).append($.parseHTML("<td>Nikos</td>"));
    $(trow).append($.parseHTML("<td>" + Student.Lname + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.Tuition + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.DateOfBirth + "</td>"));
    $(trow).append($.parseHTML("<td> <button onclick='EditRow(this);'data-toggle='modal' data-target='#exampleModalCenter' >Edit</button><button >Delete</button> </td>"));

    var trow = $.parseHTML("<tr></tr>");
    $("#student_tbody").append(trow);
    $(trow).append($.parseHTML("<td>" + 2 + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.Fname + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.Lname + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.Tuition + "</td>"));
    $(trow).append($.parseHTML("<td>" + Student.DateOfBirth + "</td>"));
    $(trow).append($.parseHTML("<td> <button onclick='EditRow(this);'data-toggle='modal' data-target='#exampleModalCenter' >Edit</button><button >Delete</button> </td>"));






    console.log(trow);


});









function EditRow(row) {
    //var Column_Num = parseInt($(row).parent().parent().index());
    
    //ModalBuild($('tbody').children("tr:eq( " + Column_Num + " )").children("td:eq( 1 )").text(), $('tbody').children("tr:eq( " + Column_Num + " )").children("td:eq( 2 )").text())



    $("#modal").append(BaseModal); //Append Completed modal to empty div
    $($(row).attr("data-target")).modal("show");//show modal 


    var fname = $(row).parent().siblings("td:eq( 1 )").text();
    var lname = $(row).parent().siblings("td:eq( 2 )").text();
    var tuituion = $(row).parent().siblings("td:eq( 3 )").text()
    var Birth = $(row).parent().siblings("td:eq( 4 )").text()


    $('#ModalTitle').text(fname + "  " + lname );
    $('#ModalBodyFname').text(fname);
    $('#ModalBodyLname').text(lname);
    $('#ModalBodyTuition').text(tuituion);
    $('#ModalBodyBirth').text(Birth);



    console.log($(row).parent().siblings("td:eq( 2 )").text());
    console.log();
    
}