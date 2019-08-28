function GetEditModalCourse() {


    var BaseModal = $.parseHTML("<div class='modal fade' id='editElementModal' tabindex='-1' role='dialog' ></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' ><p id='ModalTitle'</p></h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("<div class='modal-body'></div>");
    var ModalBodyRowGrid = $.parseHTML("<div class='row'></div>");//Add data-cousrid From EditRow()
    var ModalBodyColGrid = $.parseHTML("<div class='col-3'></div>");
    var ModalBodyFname = $.parseHTML("  <p onclick='ToggleModalBodyCellCourse(this);' id='ModalBodyFname'>  </p>");
    var ModalBodyLname = $.parseHTML("  <p onclick='ToggleModalBodyCellCourse(this);' id='ModalBodyLname'>  </p>");
    var ModalBodySubject = $.parseHTML("<p onclick='ToggleModalBodyCellCourse(this);' id='ModalBodySubject'></p>");
    var ModalBodyInputFname = $.parseHTML("  <input type='text' name='Fname'    id='EditModalBodyInputFname'  style = 'display:none;' class='form-control'  >");
    var ModalBodyInputLname = $.parseHTML("  <input type='text' name='Lname'    id='EditModalBodyInputLname'  style = 'display:none;' class='form-control'  >");
    var ModalBodyInputSubject = $.parseHTML("<input type='text' name='Subject'  id='EditModalBodyInputSubject'style = 'display:none;' class='form-control'  >");
    


    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitEditButtonCourse(this);RefreshCourseHtml();'>Update</button>");



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
    $(ModalBodyColGrid).append(ModalBodyInputSubject);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodySubject);
    $(ModalBodyInputSubject).remove();

    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}






function SubmitEditButtonCourse(ButtonObj) {

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
    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-3").children("input");

    //Check Every <input> If Its Empty Or Has Incorrect Input
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
                    InputAreasComplete = false;
                    break;
                case 'Lname':
                    if (ResultLname) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    InputAreasComplete = false;
                    break;
                case 'Subject':
                    if (ResultSubject) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
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
            ToggleModalBodyCellCourse(EditedInputsOnly[i]);

        EditCourseFromDataBase(EditedInputsOnly); //Edit Course Attributes  
        ResetModals();
    }
}



function EditCourseFromDataBase(CourseEdited) {
    //Get The Id Of The Course To Be Edited
    var CourseId = $(CourseEdited[0]).parents('div.row').attr("data-courseid");
    //From All Courses Find The One With Matching Id
    for (var i = 0; i < CoursesArray.length; i++) {
        if (CoursesArray[i].id == CourseId) {
            //For Every Cell That Needs Edit Make The Changes Permanent To The CourseArray
            for (var j = 0; j < CourseEdited.length; j++) {           
                switch ($(CourseEdited[j]).attr('name')) {
                    case 'Fname':
                        CoursesArray[i].Fname = $(CourseEdited[j]).val();
                        console.log(CoursesArray[i].Fname);
                        break;
                    case 'Lname':
                        CoursesArray[i].Lname = $(CourseEdited[j]).val();
                        break;
                    case 'Subject':
                        CoursesArray[i].Subject = $(CourseEdited[j]).val();
                        break;
                    default:
                        {}
                }
            }
        }
    }
}


function ToggleModalBodyCellCourse(Element) {
    //Hides <p> and shows <input> And Reverse
    $(Element).css('display', 'none');
    $($(Element).siblings()).css('display', 'block');

    //toggle() Or .show-hide() Removes The in-line css display from element
    //So i Cant Check The Value Of display
}





