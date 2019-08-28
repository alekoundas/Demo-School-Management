﻿function TrainerTable(TrainerArray) {

    //Table Header Trainers
    var trow = $.parseHTML("<tr></tr>");
    $("#trainer_thead").append(trow);
    $(trow).append($.parseHTML("<th> No. </th>"));
    $(trow).append($.parseHTML("<th> First Name </th>"));
    $(trow).append($.parseHTML("<th> Last Name </th>"));
    $(trow).append($.parseHTML("<th> Subject </th>"));
    $(trow).append($.parseHTML("<th> Action </th>"));
    $(trow).append($.parseHTML("<th><button onclick='AddTrainer();' data-toggle='modal' data-target='#addElementModal' class=' btn btn-sm btn-success'>+</button> </td>"));
    $(trow).append($.parseHTML("<th><button onclick='RefreshTrainerHtml();' class=' btn btn-sm btn-success'>0</button> </td>"));


    //Table Body Trainers
    for (var i = 0; i < TrainerArray.length; i++) {

        trow = $.parseHTML("<tr></tr>");
        $("#trainer_tbody").append(trow);
        $(trow).append($.parseHTML("<td>" + i + "</td>"));
        $(trow).append($.parseHTML("<td>" + TrainerArray[i].Fname + "</td>"));
        $(trow).append($.parseHTML("<td>" + TrainerArray[i].Lname + "</td>"));
        $(trow).append($.parseHTML("<td>" + TrainerArray[i].Subject + "</td>"));

        $(trow).append($.parseHTML("<td>"
            + "<button onclick = 'EditRowTrainer(this," + TrainerArray[i].id + ");' data-toggle = 'modal' data-target = '#editElementModal'   class = 'btn btn-primary'> Edit   </button >"
            + "<button onclick = 'DeleteRowTrainer(" + TrainerArray[i].id + ");'    data-toggle = 'modal' data-target = '#deleteElementModal' class = 'btn btn-danger' > Delete </button > " 
            + "</td > "
        ));

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