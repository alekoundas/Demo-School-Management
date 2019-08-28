function GetAddModalTrainer() {

    var BaseModal = $.parseHTML("<div class='modal fade' id='addElementModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='false'></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' >Add New Trainer</h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("<div class='modal-body'></div>");
    var ModalBodyRowGrid = $.parseHTML("<div class='row'></div>");//Add data-trainerid From EditRow()
    var ModalBodyColGrid = $.parseHTML("<div class='col-3'></div>");
    var ModalBodyInputFname = $.parseHTML("  <input type='text' name='Fname'   class='form-control'  id='AddModalBodyInputFname'     >");
    var ModalBodyInputLname = $.parseHTML("  <input type='text' name='Lname'   class='form-control'  id='AddModalBodyInputLname'     >");
    var ModalBodyInputSubject = $.parseHTML("<input type='text' name='Subject' class='form-control'  id='AddModalBodyInputSubject'   >");


    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitAddTrainer(this);RefreshTrainerHtml();'>Add</button>");



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

    //Bootstrap Body Row 1
    $(ModalBody).append(ModalBodyRowGrid);

    //Bootstrap Col 
    $(ModalBodyColGrid).append(ModalBodyInputFname);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputFname).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputLname);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputLname).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputSubject);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputSubject).remove();

    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}












function AddTrainer() {
    $("#AddTrainerModal").modal("show");//show modal 
}


function SubmitAddTrainer(ButtonObj) {

    //Get Values From Inputs
    var Firstname = $('#AddModalBodyInputFname').val();
    var Lastname = $('#AddModalBodyInputLname').val();
    var Subject = $('#AddModalBodyInputSubject').val();


    //Initiate Regular Expretions
    var StringExp = new RegExp("^[A-Za-z]{3,15}$", '');

    //Run Tests
    var ResultFname = StringExp.test(Firstname);
    var ResultLname = StringExp.test(Lastname);
    var ResultSubject = StringExp.test(Subject);



    //Turn To red-green The Input Border Color Of The Wrong-Correct RegEx Inputs
    (ResultFname) ? $('  #AddModalBodyInputFname  ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputFname  ').removeClass("is-valid").addClass("is-invalid");
    (ResultLname) ? $('  #AddModalBodyInputLname  ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputLname  ').removeClass("is-valid").addClass("is-invalid");
    (ResultSubject) ? $('#AddModalBodyInputSubject').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputSubject').removeClass("is-valid").addClass("is-invalid");


    //Get An Array Of Every <input> In That Modal
    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-3").children("input");


    //Check Every <input> If It Has Incorrect Input

    var InputAreasComplete = true;
    for (var i = 0; i < ModalBodyCellArray.length; i++) {
        //Compare The input By name 
        switch ($(ModalBodyCellArray[i]).attr('name')) {
            case 'Fname':
                if (!ResultFname)
                    InputAreasComplete = false;
                break;
            case 'Lname':
                if (!ResultLname)
                    InputAreasComplete = false;
                break;
            case 'Subject':
                if (!ResultSubject)
                    InputAreasComplete = false;
                break;
            default:
                { }
        }
    }
    //Check If Every Input Has Correct Val In It
    if (InputAreasComplete) {
        AddTrainerToDataBase(ModalBodyCellArray);//Edit Trainer Attributes       
        RefreshTrainerHtml();//Refresh Trainer Table With The New Data
    }
}



function AddTrainerToDataBase(NewTrainerData) {
    //Find The Max Id +1 For The Next Insert To Database
    var Max_Id = -1;
    for (var i = 0; i < TrainersArray.length; i++) {
        if (TrainersArray[i].id > Max_Id) {
            Max_Id = TrainersArray[i].id;
        }
    }
    var NewTrainer = { id: Max_Id + 1 };
    for (var i = 0; i < NewTrainerData.length; i++) {
        //Compare The input By name 
        switch ($(NewTrainerData[i]).attr('name')) {
            case 'Fname':
                NewTrainer.Fname = $(NewTrainerData[i]).val();
                break;
            case 'Lname':
                NewTrainer.Lname = $(NewTrainerData[i]).val();
                break;
            case 'Subject':
                NewTrainer.Subject = $(NewTrainerData[i]).val();
                break;
            default:
                { }
        }
    }

    //Add To DB
    TrainersArray.push(NewTrainer);
}