function GetDeleteModalStudent() {

    var BaseModal = $.parseHTML("<div class='modal fade' id='deleteElementModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='false'></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' >Warning!</h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");

    //Modal Body Build Here
    var ModalBody = $.parseHTML("<div class='modal-body'> <p>Warning The Folowing Action Cannot Be Reversed!</p> </div>");

    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-success mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-danger ' id = 'DeleteStudentModalButton' onclick='RefreshStudentHtml();'>I Understand</button>");



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

    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}



function DeleteRowStudent(StudentId) {
    $("#DeleteStudentModal").modal("show");//show modal 
    $('#DeleteStudentModalButton').click(function (e) {
        DeleteStudentFromDataBase(StudentId);
    });  
}



function DeleteStudentFromDataBase(StudentId) {

    for (var i = 0; i < StudentsArray.length; i++) {
        if (StudentsArray[i].id == StudentId) {
            StudentsArray.splice(i, 1);
        }
    }
    ResetModals();
}