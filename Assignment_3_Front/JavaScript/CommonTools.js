
var BaseModal = $.parseHTML("<div class='modal fade' id='exampleModalCenter' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='false'></div>");
var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

//Modal Header Build Here
var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' ><p id='ModalTitle'</h5>");
var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


//Modal Body Build Here
var ModalBody = $.parseHTML("<div class='modal-body'></div>");

var ModalBodyRowGrid = $.parseHTML("<div class='row'></div>");
var ModalBodyColGrid = $.parseHTML("<div class='col-3'></div>");
var ModalBodyFname = $.parseHTML("<p id='ModalBodyFname'></p>");
var ModalBodyLname = $.parseHTML("<p id='ModalBodyLname'></p>");
var ModalBodyTuition = $.parseHTML("<p id='ModalBodyTuition'></p>");
var ModalBodyBirth = $.parseHTML("<p id='ModalBodyBirth'></p>");
var ModalBodyInputForm = $.parseHTML("<input type='text' class='form-control'>");



//Modal Footer Build Here
var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-danger'           data-dismiss='modal'>Update</button>");



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
$(ModalBody).append(ModalBodyRowGrid);

$(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyFname);
$(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyLname);
$(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyTuition);
$(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyBirth);

//Footer
$(ModalCotent).append(ModalFooter);
$(ModalFooter).append(ModalFooterCancelbt);
$(ModalFooter).append(ModalFooterUpdatebt);







$(ModalCotent).append(ModalFooter);






