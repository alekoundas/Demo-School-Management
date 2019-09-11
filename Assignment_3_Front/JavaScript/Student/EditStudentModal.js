function GetEditModalStudent() {


    var BaseModal = $.parseHTML("<div class='modal fade' id='editElementModal' tabindex='-1' role='dialog' ></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' ><p id='ModalTitle'</p></h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("<div class='modal-body'></div>");
    var ModalBodyRowGrid = $.parseHTML("<div class='row'></div>");//Add data-studentid From EditRow()
    var ModalBodyColGrid = $.parseHTML("<div class='col-3'></div>");
    var ModalBodyColGrid2 = $.parseHTML("<div class='col-3'></div>");
    var ModalBodyFnameHead = $.parseHTML("  <p><b> FirstName </b></p>");
    var ModalBodyLnameHead = $.parseHTML("  <p><b> Last Name </b></p>");
    var ModalBodyTuitionHead = $.parseHTML("<p><b> Tuition   </b></p>");
    var ModalBodyBirthHead = $.parseHTML("  <p><b>  Birth    </b></p>");
    var ModalBodyFname = $.parseHTML("  <p onclick='ToggleModalBodyCellStudent(this);' id='ModalBodyFname'>  </p>");
    var ModalBodyLname = $.parseHTML("  <p onclick='ToggleModalBodyCellStudent(this);' id='ModalBodyLname'>  </p>");
    var ModalBodyTuition = $.parseHTML("<p onclick='ToggleModalBodyCellStudent(this);' id='ModalBodyTuition'></p>");
    var ModalBodyBirth = $.parseHTML("  <p onclick='ToggleModalBodyCellStudent(this);' id='ModalBodyBirth'>  </p>");
    var ModalBodyInputFname = $.parseHTML("  <input type='text' name='Fname'  oninvalid='this.setCustomValidity('Enter User Name Here')'  id='EditModalBodyInputFname'  style = 'display:none;' class='form-control'  >");
    var ModalBodyInputLname = $.parseHTML("  <input type='text' name='Lname'    id='EditModalBodyInputLname'  style = 'display:none;' class='form-control'  >");
    var ModalBodyInputTuition = $.parseHTML("<input type='text' name='Tuition'  id='EditModalBodyInputTuition'style = 'display:none;' class='form-control'  >");
    var ModalBodyInputBirth = $.parseHTML("  <input type='date' name='Birth'    id='EditModalBodyInputBirth'  style = 'display:none;' class='form-control'  >");


    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitEditButtonStudent(this);RefreshStudentHtml();'>Update</button>");


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


    //Bootstrap Row 1
    $(ModalBody).append(ModalBodyRowGrid);

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyFnameHead);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyFname);
    $(ModalBodyFnameHead).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyLnameHead);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyLname);
    $(ModalBodyLnameHead).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyTuitionHead);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyTuition);
    $(ModalBodyTuitionHead).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyBirthHead);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyBirth);
    $(ModalBodyBirthHead).remove();


    //Bootstrap Row2
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




function EditRowStudent(row, StudentId) {
    $("#EditStudentModal").modal("show");//show modal 

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





function SubmitEditButtonStudent(ButtonObj) {

    //Get Values From Inputs
    var Firstname = $('#EditModalBodyInputFname').val();
    var Lastname = $('#EditModalBodyInputLname').val();
    var Tuition = $('#EditModalBodyInputTuition').val();
    var Birth = $('#EditModalBodyInputBirth').val();


    //Initiate Regular Expretions
    var StringExp = new RegExp("^[A-Za-z]{3,15}$", '');
    var NumberExp = new RegExp("^[0-9]{1,6}$", '');
    var DateExp = new RegExp("^\s*([1-2][90][0-9]{2})\-(0?[1-9]|1[012])\-(3[01]|[012][0-9]|[1-9])\s*$", '');


    //Run Tests
    var ResultFname = StringExp.test(Firstname);
    var ResultLname = StringExp.test(Lastname);
    var ResultTuition = NumberExp.test(Tuition);
    var ResultBirth = DateExp.test(Birth);


    //Turn To red-green The Input Border Color Of The Wrong-Correct RegEx Inputs
    (ResultFname) ? $('  #EditModalBodyInputFname  ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputFname  ').removeClass("is-valid").addClass("is-invalid");
    (ResultLname) ? $('  #EditModalBodyInputLname  ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputLname  ').removeClass("is-valid").addClass("is-invalid");
    (ResultTuition) ? $('#EditModalBodyInputTuition').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputTuition').removeClass("is-valid").addClass("is-invalid");
    (ResultBirth) ? $('  #EditModalBodyInputBirth  ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputBirth  ').removeClass("is-valid").addClass("is-invalid");


    //Get An Array Of Every <input> In That Modal
    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-3").children("input");

    //Check Every <input> If Its Empty Or Has Incorrect Input
    var EditedInputsOnly = [];
    var AlertErrorArr = [];
    var InputAreasComplete = true;
    for (var i = 0; i < ModalBodyCellArray.length; i++)
    {
        //Compare The input By name 
        if ($(ModalBodyCellArray[i]).is(':visible'))
        {
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
                case 'Tuition':
                    if (ResultTuition) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    AlertErrorArr.push("Tuition Must Have 0-9  As Input and Length 1-6");
                    InputAreasComplete = false;
                    break;
                case 'Birth':
                    if (ResultBirth) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    AlertErrorArr.push("Birth Day Must Be Greater Than 19YY/MM/DD ");
                    InputAreasComplete = false;
                    break;
                default:
                    { }
            }
        }
    }
    //Check If Every Input Has Correct Val In It
    if (InputAreasComplete)
    {      
        for (var i = 0; i < EditedInputsOnly.length; i++)//Hides The Correct input And Show The p
            ToggleModalBodyCellStudent(EditedInputsOnly[i]);
      
        EditStudent(EditedInputsOnly); //Edit Student Attributes       
        ResetModals();
    }
    else {
        alert(AlertErrorArr);
    }
}



function EditStudent(StudentEdited) {
    //Get The Id Of The Student To Be Edited
    var StudentId = $(StudentEdited[0]).parents('div.row').attr("data-studentid");

    //From All Students Find The One With Matching Id
    for (var i = 0; i < StudentsArray.length; i++) {
        if (StudentsArray[i].id == StudentId) {
            //For Every Cell That Needs Edit Make The Changes Permanent To The StudentArray
            for (var j = 0; j < StudentEdited.length; j++) {
                switch ($(StudentEdited[j]).attr('name')) {
                    case 'Fname':
                        StudentsArray[i].Fname = $(StudentEdited[j]).val();
                        break;
                    case 'Lname':
                        StudentsArray[i].Lname = $(StudentEdited[j]).val();
                        break;
                    case 'Tuition':
                        StudentsArray[i].Tuition = $(StudentEdited[j]).val();
                        break;
                    case 'Birth':
                        StudentsArray[i].Birth = new Date($(StudentEdited[j]).val());
                        break;
                    default:
                        {}
                }
            }
        }
    }
}


function ToggleModalBodyCellStudent(Element) {
    //Hides <p> and shows <input> And Reverse
    $(Element).css('display', 'none');
    $($(Element).siblings()).css('display', 'block');

    //toggle() Or .show-hide() Removes The in-line css display from element
    //So i Cant Check The Value Of display
}


