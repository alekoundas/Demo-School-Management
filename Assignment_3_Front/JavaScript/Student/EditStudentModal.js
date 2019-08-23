function GetEditModal() {


    var BaseModal = $.parseHTML("<div class='modal fade' id='exampleModalCenter' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='false'></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' ><p id='ModalTitle'</h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("<div class='modal-body'></div>");
    var ModalBodyRowGrid = $.parseHTML("<div class='row'></div>");//Add data-studentid From EditRow()
    var ModalBodyColGrid = $.parseHTML("<div class='col-3'></div>");
    var ModalBodyFname = $.parseHTML("  <p onclick='ToggleModalBodyCell(this);' id='ModalBodyFname'>  </p>");
    var ModalBodyLname = $.parseHTML("  <p onclick='ToggleModalBodyCell(this);' id='ModalBodyLname'>  </p>");
    var ModalBodyTuition = $.parseHTML("<p onclick='ToggleModalBodyCell(this);' id='ModalBodyTuition'></p>");
    var ModalBodyBirth = $.parseHTML("  <p onclick='ToggleModalBodyCell(this);' id='ModalBodyBirth'>  </p>");
    var ModalBodyInputFname = $.parseHTML("  <input type='text' name='Fname'    id='ModalBodyInputFname'  style = 'display:none;' class='form-control'  >");
    var ModalBodyInputLname = $.parseHTML("  <input type='text' name='Lname'    id='ModalBodyInputLname'  style = 'display:none;' class='form-control'  >");
    var ModalBodyInputTuition = $.parseHTML("<input type='text' name='Tuition'  id='ModalBodyInputTuition'style = 'display:none;' class='form-control'  >");
    var ModalBodyInputBirth = $.parseHTML("  <input type='text' name='Birth'    id='ModalBodyInputBirth'  style = 'display:none;' class='form-control'  >");


    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitBtClick(this);RefreshStudentHtml();'>Update</button>");



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
    //Bootstrap Row
    $(ModalBody).append(ModalBodyRowGrid);

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputFname);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyFname);
    $(ModalBodyInputFname).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputLname);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyLname);
    $(ModalBodyInputLname).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputTuition);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyTuition);
    $(ModalBodyInputTuition).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputBirth);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyBirth);
    $(ModalBodyInputBirth).remove();

    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}




function ToggleModalBodyCell(Element) {
    //Hides <p> and shows <input> And Reverse
    $(Element).css('display', 'none');
    $($(Element).siblings()).css('display', 'block');

    //toggle() Or .show-hide() Removes The in-line css display from element
    //So i Cant Check The Value Of display
}


function EditRow(row, StudentId) {
    $("#EditElementModal").modal("show");//show modal 

    //Add data- To The row Of The Modal Body With The Student Id
    //So I Can Retrieve It Later
    $(".modal-body .row").attr("data-studentid", StudentId);

    //Retrieve Data From table
    var fname = $(row).parent().siblings("td:eq( 1 )").text();
    var lname = $(row).parent().siblings("td:eq( 2 )").text();
    var tuition = $(row).parent().siblings("td:eq( 3 )").text()
    var Birth = $(row).parent().siblings("td:eq( 4 )").text()

    $('#ModalTitle').text(fname + "  " + lname);
    $('#ModalBodyFname').text(fname);
    $('#ModalBodyLname').text(lname);
    $('#ModalBodyTuition').text(tuition);
    $('#ModalBodyBirth').text(Birth);
}

