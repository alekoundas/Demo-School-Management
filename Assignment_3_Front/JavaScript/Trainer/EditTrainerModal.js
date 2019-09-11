function GetEditModalTrainer() {


    var BaseModal = $.parseHTML("<div class='modal fade' id='editElementModal' tabindex='-1' role='dialog' ></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' ><p id='ModalTitle'</p></h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("<div class='modal-body'></div>");
    var ModalBodyRowGrid = $.parseHTML("<div class='row'></div>");
    var ModalBodyRowGrid2 = $.parseHTML("<div class='row'></div>");
    var ModalBodyColGrid = $.parseHTML("<div class='col-4'></div>");
    var ModalBodyFnameHead = $.parseHTML("  <p><b> First Name</b></p>");
    var ModalBodyLnameHead = $.parseHTML("  <p><b> Last Name </b></p>");
    var ModalBodySubjectHead = $.parseHTML("<p><b> Subject   </b></p>");
    var ModalBodyFname = $.parseHTML("  <p onclick='ToggleModalBodyCellTrainer(this);' id='ModalBodyFname'>  </p>");
    var ModalBodyLname = $.parseHTML("  <p onclick='ToggleModalBodyCellTrainer(this);' id='ModalBodyLname'>  </p>");
    var ModalBodySubject = $.parseHTML("<p onclick='ToggleModalBodyCellTrainer(this);' id='ModalBodySubject'></p>");
    var ModalBodyInputFname = $.parseHTML("    <input type='text' name='Fname'    id='EditModalBodyInputFname'  style = 'display:none;' class='form-control'  >");
    var ModalBodyInputLname = $.parseHTML("    <input type='text' name='Lname'    id='EditModalBodyInputLname'  style = 'display:none;' class='form-control'  >");
    var ModalBodyInputSubject = $.parseHTML("  <input type='text' name='Subject'  id='EditModalBodyInputSubject'style = 'display:none;' class='form-control'  >");


    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitEditButtonTrainer(this);RefreshTrainerHtml();'>Update</button>");



    //Append Everything Together

    //Bootstrap Modal ???
    $(BaseModal).append(ModalDialog);
    $(ModalDialog).append(ModalCotent);

    //Header
    $(ModalCotent).append(ModalHeader);
    $(ModalHeader).append(ModalHeaderTitle);
    $(ModalHeader).append(ModalHeaderButton);

    //Body
    $(ModalCotent).append(ModalBody);


    //Bootstrap Row1
    $(ModalBody).append(ModalBodyRowGrid);

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyFnameHead);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyFnameHead).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyLnameHead);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyLnameHead).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodySubjectHead);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodySubjectHead).remove();





    //Bootstrap Row 2
    $(ModalBody).append(ModalBodyRowGrid2);

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputFname);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid2).append(ModalBodyFname);
    $(ModalBodyInputFname).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputLname);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid2).append(ModalBodyLname);
    $(ModalBodyInputLname).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputSubject);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid2).append(ModalBodySubject);
    $(ModalBodyInputSubject).remove();

    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}






function SubmitEditButtonTrainer(ButtonObj) {

    //Get Values From Inputs
    var Firstname = $('#EditModalBodyInputFname').val();
    var Lastname = $('#EditModalBodyInputLname').val();
    var Subject = $('#EditModalBodyInputSubject').val();



    //Initiate Regular Expretions
    var StringExp = new RegExp("^[A-Za-z]{3,15}$", '');


    //Run Tests
    var ResultFname = StringExp.test(Firstname);
    var ResultLname = StringExp.test(Lastname);
    var ResultSubject = StringExp.test(Subject);


    //Turn To red-green The Input Border Color Of The Wrong-Correct RegEx Inputs
    (ResultFname) ? $('  #EditModalBodyInputFname  ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputFname  ').removeClass("is-valid").addClass("is-invalid");
    (ResultLname) ? $('  #EditModalBodyInputLname  ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputLname  ').removeClass("is-valid").addClass("is-invalid");
    (ResultSubject) ? $('#EditModalBodyInputSubject').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputSubject').removeClass("is-valid").addClass("is-invalid");


    //Get An Array Of Every <input> In That Modal
    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-4").children("input");

    //Check Every <input> If Its Empty Or Has Incorrect Input
    var AlertErrorArr = [];
    var EditedInputsOnly = [];
    var InputAreasComplete = true;
    for (var i = 0; i < ModalBodyCellArray.length; i++) {
        //Compare The input By name 
        if ($(ModalBodyCellArray[i]).is(':visible')) {
            switch ($(ModalBodyCellArray[i]).attr('name')) {
                case 'Fname':
                    if (ResultFname) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    AlertErrorArr.push("First Name Must Have A-Za-z As Input and Length 3-15");
                    InputAreasComplete = false;
                    break;
                case 'Lname':
                    if (ResultLname) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    AlertErrorArr.push("Last Name Must Have A-Za-z As Input and Length 3-15");
                    InputAreasComplete = false;
                    break;
                case 'Subject':
                    if (ResultSubject) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    AlertErrorArr.push("Subject Must Have A-Za-z As Input and Length 3-15");
                    InputAreasComplete = false;
                    break;
                default:
                    { }
            }
        }
    }
    //Check If Every Input Has Correct Val In It
    if (InputAreasComplete) {

        for (var i = 0; i < EditedInputsOnly.length; i++)//Hides The Correct input And Show The p
            ToggleModalBodyCellTrainer(EditedInputsOnly[i]);

        EditTrainerFromDataBase(EditedInputsOnly); //Edit Trainer Attributes  
        ResetModals();
    }
    else {
        alert(AlertErrorArr);
    }
}



function EditTrainerFromDataBase(TrainerEdited) {
    //Get The Id Of The Trainer To Be Edited
    var TrainerId = $(TrainerEdited[0]).parents('div.row').attr("data-trainerid");
    //From All Trainers Find The One With Matching Id
    for (var i = 0; i < TrainersArray.length; i++) {
        if (TrainersArray[i].id == TrainerId) {
            //For Every Cell That Needs Edit Make The Changes Permanent To The TrainerArray
            for (var j = 0; j < TrainerEdited.length; j++) {
                switch ($(TrainerEdited[j]).attr('name')) {
                    case 'Fname':
                        TrainersArray[i].Fname = $(TrainerEdited[j]).val();
                        console.log(TrainersArray[i].Fname);
                        break;
                    case 'Lname':
                        TrainersArray[i].Lname = $(TrainerEdited[j]).val();
                        break;
                    case 'Subject':
                        TrainersArray[i].Subject = $(TrainerEdited[j]).val();
                        break;
                    default:
                        { }
                }
            }
        }
    }
}


function ToggleModalBodyCellTrainer(Element) {
    //Hides <p> and shows <input> And Reverse
    $(Element).css('display', 'none');
    $($(Element).siblings()).css('display', 'block');

    //toggle() Or .show-hide() Removes The in-line css display from element
    //So i Cant Check The Value Of display
}





