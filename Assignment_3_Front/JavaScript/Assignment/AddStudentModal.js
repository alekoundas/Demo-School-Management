function GetAddModalStudent() {

    var BaseModal = $.parseHTML("<div class='modal fade' id='addElementModal' tabindex='-1' role='dialog'></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' >Add New Student</h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("<div class='modal-body'></div>");
    var ModalBodyRowGrid = $.parseHTML("<div class='row'></div>");//Add data-studentid From EditRow()
    var ModalBodyColGrid = $.parseHTML("<div class='col-3'></div>");
    var ModalBodyInputFname = $.parseHTML("  <input type='text' name='Fname'   class='form-control'  id='AddModalBodyInputFname'     >");
    var ModalBodyInputLname = $.parseHTML("  <input type='text' name='Lname'   class='form-control'  id='AddModalBodyInputLname'     >");
    var ModalBodyInputTuition = $.parseHTML("<input type='text' name='Tuition' class='form-control'  id='AddModalBodyInputTuition'   >");
    var ModalBodyInputBirth = $.parseHTML("  <input type='date' name='Birth'   class='form-control'  id='AddModalBodyInputBirth'     >");


    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitAddStudent(this);RefreshStudentHtml();'>Add</button>");



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
    $(ModalBodyColGrid).append(ModalBodyInputTuition);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputTuition).remove();
    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputBirth);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputBirth).remove();

    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}












function AddStudent() {
    $("#AddStudentModal").modal("show");//show modal 
}


function SubmitAddStudent(ButtonObj) {

    //Get Values From Inputs
    var Firstname = $('#AddModalBodyInputFname').val();
    var Lastname = $('#AddModalBodyInputLname').val();
    var Tuition = $('#AddModalBodyInputTuition').val();
    var Birth = $('#AddModalBodyInputBirth').val();


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
    (ResultFname) ? $('  #AddModalBodyInputFname  ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputFname  ').removeClass("is-valid").addClass("is-invalid");
    (ResultLname) ? $('  #AddModalBodyInputLname  ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputLname  ').removeClass("is-valid").addClass("is-invalid");
    (ResultTuition) ? $('#AddModalBodyInputTuition').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputTuition').removeClass("is-valid").addClass("is-invalid");
    (ResultBirth) ? $('  #AddModalBodyInputBirth  ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputBirth  ').removeClass("is-valid").addClass("is-invalid");


    //Get An Array Of Every <input> In That Modal
    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-3").children("input");


    //Check Every <input> If Its Empty Or Has Incorrect Input
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
            case 'Tuition':
                if (!ResultTuition)
                    InputAreasComplete = false;
                break;
            case 'Birth':
                if (!ResultBirth)
                    InputAreasComplete = false;
                break;
            default:
                { }
        }
    }
    //Check If Every Input Has Correct Val In It
    if (InputAreasComplete) {
        AddStudentToDataBase(ModalBodyCellArray);
        ResetModals();
    }
}



function AddStudentToDataBase(NewStudentData) {
    //Find The Max Id +1 For The Next Insert To Database
    var Max_Id = -1;
    for (var i = 0; i < StudentsArray.length; i++) {
        if (StudentsArray[i].id > Max_Id) {
            Max_Id = StudentsArray[i].id;
        }
    }

    var NewStudent = { id: Max_Id + 1 };
    for (var i = 0; i < NewStudentData.length; i++) {
        //Compare The input By name 
        switch ($(NewStudentData[i]).attr('name')) {
            case 'Fname':
                NewStudent.Fname = $(NewStudentData[i]).val();
                break;
            case 'Lname':
                NewStudent.Lname = $(NewStudentData[i]).val()
                break;
            case 'Tuition':
                NewStudent.Tuition = $(NewStudentData[i]).val()
                break;
            case 'Birth':
                NewStudent.Birth = new Date($(NewStudentData[i]).val());
                break;
            default:
                { }
        }
    }
    StudentsArray.push(NewStudent);
}