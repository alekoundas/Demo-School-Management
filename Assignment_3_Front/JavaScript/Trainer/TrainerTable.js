﻿function TrainerTable(TrainerArray) {

    //Table Header Trainers
    var trow = $.parseHTML("<tr></tr>");
    $("#trainer_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> First Name </th>"));
    $(trow).append($.parseHTML("<th> Last Name </th>"));
    $(trow).append($.parseHTML("<th> Subject </th>"));
    $(trow).append($.parseHTML("<th> Action" +
        "<button  data-toggle='modal' data-target='#addElementModal' class=' btn btn-sm btn-success'><i class='fa fa-plus-circle'></i></button>" +
        "<button onclick='RefreshTrainerHtml();' class=' btn btn-sm btn-success'><i class=' fa fa-undo'></i></button> </th > "));


    //Table Body Trainers
    var Counter = 1;
    for (var i = 0; i < TrainerArray.length; i++) {

        trow = $.parseHTML("<tr></tr>");
        $("#trainer_tbody").append(trow);
        $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
        $(trow).append($.parseHTML("<td>" + TrainerArray[i].Fname + "</td>"));
        $(trow).append($.parseHTML("<td>" + TrainerArray[i].Lname + "</td>"));
        $(trow).append($.parseHTML("<td>" + TrainerArray[i].Subject + "</td>"));
        $(trow).append($.parseHTML("<td>"
            + "<button onclick = 'EditRowTrainer(this," + TrainerArray[i].id + ");' data-toggle = 'modal' data-target = '#editElementModal'   class = 'btn btn-Dark'> <i class='fa fa-edit '       ></i></button >"
            + "<button onclick = 'DeleteRowTrainer(" + TrainerArray[i].id + ");'    data-toggle = 'modal' data-target = '#deleteElementModal' class = 'btn btn-Dark' > <i class='fa fa-trash'       ></i></button > "
            + "</td > "                                                                                                                                                 
        ));
    }
}

function TrainerTableMinimal(CourseId) {
    //Table Header Trainers
    var trow = $.parseHTML("<tr></tr>");
    $("#trainer_thead_minimal").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> First Name </th>"));
    $(trow).append($.parseHTML("<th> Last Name </th>"));
    $(trow).append($.parseHTML("<th> Subject </th>"));

    var Counter = 1;
    if (CourseId) {
        //Table Body Trainers
        for (var i = 0; i < CoursesTrainersArray.length; i++) {
            if (CoursesTrainersArray[i].CourseId == CourseId) {
                for (var j = 0; j < TrainersArray.length; j++) {
                    if (TrainersArray[j].id == CoursesTrainersArray[i].TrainerId) {
                        trow = $.parseHTML("<tr></tr>");
                        $("#trainer_tbody_minimal").append(trow);
                        $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                        $(trow).append($.parseHTML("<td>" + TrainersArray[j].Fname + "</td>"));
                        $(trow).append($.parseHTML("<td>" + TrainersArray[j].Lname + "</td>"));
                        $(trow).append($.parseHTML("<td>" + TrainersArray[j].Subject + "</td>"));
                    }
                }
            }
        }
    }
    else {
        //Table Body Trainers
        for (var i = 0; i < TrainersArray.length; i++) {
            trow = $.parseHTML("<tr></tr>");
            $("#trainer_tbody_minimal").append(trow);
            $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
            $(trow).append($.parseHTML("<td>" + TrainersArray[i].Fname + "</td>"));
            $(trow).append($.parseHTML("<td>" + TrainersArray[i].Lname + "</td>"));
            $(trow).append($.parseHTML("<td>" + TrainersArray[i].Subject + "</td>"));
        }
    }
}




function TrainerTableCourseModal(CourseId) {
    //Table Header Trainers
    var trow = $.parseHTML("<tr></tr>");
    $("#modal_trainer_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> First Name </th>"));
    $(trow).append($.parseHTML("<th> Last Name </th>"));
    $(trow).append($.parseHTML("<th> Subject </th>"));
    $(trow).append($.parseHTML("<th> In Course </th>"));

    //Print Every Table Row With Checked or Not In The Checkbox
    //Every CheckBox Will Keep The TrainerID @ .val()
    var CourseHitSuccess;
    var Counter = 1;
    for (var j = 0; j < TrainersArray.length; j++) {
        CourseHitSuccess = false;

        for (var i = 0; i < CoursesTrainersArray.length; i++) {

            if (CoursesTrainersArray[i].CourseId == CourseId) {

                if (TrainersArray[j].id == CoursesTrainersArray[i].TrainerId) {
                    trow = $.parseHTML("<tr></tr>");
                    $("#modal_trainer_tbody").append(trow);
                    $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
                    $(trow).append($.parseHTML("<td>" + TrainersArray[j].Fname + "</td>"));
                    $(trow).append($.parseHTML("<td>" + TrainersArray[j].Lname + "</td>"));
                    $(trow).append($.parseHTML("<td>" + TrainersArray[j].Subject + "</td>"));
                    $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox' value='" + TrainersArray[j].id + "' checked></td>"));
                    CourseHitSuccess = true;
                    console.log(CourseHitSuccess + " CourseID: " + CoursesTrainersArray[i].CourseId + " TrainerID: " + CoursesTrainersArray[i].TrainerId);
                }
            }
        }
        if (CourseHitSuccess == false) {
            trow = $.parseHTML("<tr></tr>");
            $("#modal_trainer_tbody").append(trow);
            $(trow).append($.parseHTML("<td>" + Counter++ + "</td>"));
            $(trow).append($.parseHTML("<td>" + TrainersArray[j].Fname + "</td>"));
            $(trow).append($.parseHTML("<td>" + TrainersArray[j].Lname + "</td>"));
            $(trow).append($.parseHTML("<td>" + TrainersArray[j].Subject + "</td>"));
            $(trow).append($.parseHTML("<td><input type='checkbox' class='form-check-input' name='checkerbox' value='" + TrainersArray[j].id + "' ></td>"));
        }
    }
}



function EditRowTrainer(row, TrainerId) {
    $("#EditTrainerModal").modal("show");//show modal 

    //Add data- To The row Of The Modal Body With The Trainer Id
    //So I Can Retrieve It Later
    $(".modal-body .row").attr("data-trainerid", TrainerId);

    //Retrieve Data From table
    var fname = $(row).parent().siblings("td:eq( 1 )").text();
    var lname = $(row).parent().siblings("td:eq( 2 )").text();
    var subject = $(row).parent().siblings("td:eq( 3 )").text();

    $('#ModalTitle').text(fname + "  " + lname);
    $('#ModalBodyFname').text(fname);
    $('#ModalBodyLname').text(lname);
    $('#ModalBodySubject').text(subject);

}
