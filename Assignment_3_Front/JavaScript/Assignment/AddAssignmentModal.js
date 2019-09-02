function GetAddModalAssignment() {

    var BaseModal = $.parseHTML("<div class='modal fade' id='addElementModal' tabindex='-1' role='dialog'></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' >Add New Assignment</h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("<div class='modal-body'></div>");
    var ModalBodyRowGrid = $.parseHTML("<div class='row'></div>");//Add data-assignmenttid From EditRow()
    var ModalBodyColGrid = $.parseHTML("<div class='col-3'></div>");
    var ModalBodyInputTitle = $.parseHTML("      <input type='text' name='Title'       id='AddModalBodyInputTitle'       class='form-control'  >");
    var ModalBodyInputDescription = $.parseHTML("<input type='text' name='Description' id='AddModalBodyInputDescription' class='form-control'  >");
    var ModalBodyInputSubmitD = $.parseHTML("    <input type='date' name='SubmitD'     id='AddModalBodyInputSubmitD'     class='form-control'  >");


    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitAddAssignment(this);RefreshAssignmentHtml();'>Add</button>");



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

    //Bootstrap Body Row 
    $(ModalBody).append(ModalBodyRowGrid);

    //Bootstrap Col 
    $(ModalBodyColGrid).append(ModalBodyInputTitle);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputTitle).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputDescription);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputDescription).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputSubmitD);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputSubmitD).remove();

    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}












function AddAssignment() {
    $("#AddAssignmentModal").modal("show");//show modal 
}


function SubmitAddAssignment(ButtonObj) {

    //Get Values From Inputs
    var Title = $('#AddModalBodyInputTitle').val();
    var Description = $('#AddModalBodyInputDescription').val();
    var SubmitD = $('#AddModalBodyInputSubmitD').val();


    //Initiate Regular Expretions
    var StringExp = new RegExp("^[A-Za-z]{3,15}$", '');
    var DateExp = new RegExp("^\s*([1-2][90][0-9]{2})\-(0?[1-9]|1[012])\-(3[01]|[012][0-9]|[1-9])\s*$", '');

    //Run Tests
    var ResultTitle = StringExp.test(Title);
    var ResultDescription = StringExp.test(Description);
    var ResultSubmitD = DateExp.test(SubmitD);



    //Turn To red-green The Input Border Color Of The Wrong-Correct RegEx Inputs
    (ResultTitle) ? $('      #AddModalBodyInputTitle      ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputTitle      ').removeClass("is-valid").addClass("is-invalid");
    (ResultDescription) ? $('#AddModalBodyInputDescription').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputDescription').removeClass("is-valid").addClass("is-invalid");
    (ResultSubmitD) ? $('    #AddModalBodyInputSubmitD    ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputSubmitD    ').removeClass("is-valid").addClass("is-invalid");


    //Get An Array Of Every <input> In That Modal
    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-3").children("input");


    //Check Every <input> If Its Empty Or Has Incorrect Input
    var InputAreasComplete = true;
    for (var i = 0; i < ModalBodyCellArray.length; i++) {
        //Compare The input By name 
        switch ($(ModalBodyCellArray[i]).attr('name')) {
            case 'Title':
                if (!ResultTitle)
                    InputAreasComplete = false;
                break;
            case 'Description':
                if (!ResultDescription)
                    InputAreasComplete = false;
                break;
            case 'SubmitD':
                if (!ResultSubmitD)
                    InputAreasComplete = false;
                break;
            default:
                { }
        }
    }
    console.log(InputAreasComplete);
    //Check If Every Input Has Correct Val In It
    if (InputAreasComplete) {
        AddAssignmentToDataBase(ModalBodyCellArray);
        ResetModals();
    }
}



function AddAssignmentToDataBase(NewAssignmentData) {
    //Find The Max Id +1 For The Next Insert To Database
    var Max_Id = -1;
    for (var i = 0; i < AssignmentsArray.length; i++) {
        if (AssignmentsArray[i].id > Max_Id) {
            Max_Id = AssignmentsArray[i].id;
        }
    }

    var NewAssignment = { id: Max_Id + 1 };
    for (var i = 0; i < NewAssignmentData.length; i++) {
        //Compare The input By name 
        switch ($(NewAssignmentData[i]).attr('name')) {
            case 'Title':
                NewAssignment.Title = $(NewAssignmentData[i]).val();
                break;
            case 'Description':
                NewAssignment.Description = $(NewAssignmentData[i]).val()
                break;
            case 'SubmitD':
                NewAssignment.SubDateTime = new Date($(NewAssignmentData[i]).val());
                break;
            default:
                { }
        }
    }
    AssignmentsArray.push(NewAssignment);
}