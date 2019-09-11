function GetEditModalAssignment() {

    var BaseModal = $.parseHTML("<div class='modal fade' id='editElementModal' tabindex='-1' role='dialog' ></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' ><p id='ModalTitle'</p></h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("  <div class='modal-body'> </div>");
    var ModalBodyRowGrid = $.parseHTML("<div class='row'  > </div>");
    var ModalBodyRowGrid2 = $.parseHTML("<div class='row'  > </div>");
    var ModalBodyColGrid = $.parseHTML("<div class='col-4'> </div>");
    var ModalBodyTitleHeader = $.parseHTML("      <p><b>  Title        </b/></p>");
    var ModalBodyDescriptionHeader = $.parseHTML("<p><b>   Description </b/></p>");
    var ModalBodySubmitDHeader = $.parseHTML("    <p><b>   Submit Day  </b/></p>");
    var ModalBodyTitle = $.parseHTML("      <p onclick='ToggleModalBodyCellAssignment(this);' id='ModalBodyTitle'>        </p>");
    var ModalBodyDescription = $.parseHTML("<p onclick='ToggleModalBodyCellAssignment(this);' id='ModalBodyDescription'>  </p>");
    var ModalBodySubmitD = $.parseHTML("    <p onclick='ToggleModalBodyCellAssignment(this);' id='ModalBodySubmitD'>      </p>");
    var ModalBodyInputTitle = $.parseHTML("      <input type='text' name='Title'       id='EditModalBodyInputTitle'       style = 'display:none;' class='form-control'  >");
    var ModalBodyInputDescription = $.parseHTML("<input type='text' name='Description' id='EditModalBodyInputDescription' style = 'display:none;' class='form-control'  >");
    var ModalBodyInputSubmitD = $.parseHTML("    <input type='date' name='SubmitD'     id='EditModalBodyInputSubmitD'     style = 'display:none;' class='form-control'  >");


    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitEditButtonAssignment(this);'>Update</button>");



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
    $(ModalBodyColGrid).append(ModalBodyTitleHeader);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyTitleHeader).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyDescriptionHeader);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyDescriptionHeader).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodySubmitDHeader);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodySubmitDHeader).remove();



    //Bootstrap Row
    $(ModalBody).append(ModalBodyRowGrid2);

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputTitle);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid2).append(ModalBodyTitle);
    $(ModalBodyInputTitle).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputDescription);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid2).append(ModalBodyDescription);
    $(ModalBodyInputDescription).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputSubmitD);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid2).append(ModalBodySubmitD);
    $(ModalBodyInputSubmitD).remove();

    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}

//Global Var
var AssignmentID;

function EditRowAssignment(row, AssignmentId) {

    AssignmentID=AssignmentId;

    //Retrieve Data From table
    var Title = $(row).parent().siblings("td:eq( 1 )").text();
    var Description = $(row).parent().siblings("td:eq( 2 )").text();
    var SubmitD = $(row).parent().siblings("td:eq( 3 )").text()

    $('#ModalTitle').text(Title);
    $('#ModalBodyTitle').text(Title);
    $('#ModalBodyDescription').text(Description);
    $('#ModalBodySubmitD').text(SubmitD);
}


function SubmitEditButtonAssignment(ButtonObj) {

    //Get Values From Inputs
    var Title = $('#EditModalBodyInputTitle').val();
    var Description = $('#EditModalBodyInputDescription').val();
    var SubmitD = $('#EditModalBodyInputSubmitD').val();


    console.log(Title);
    console.log(Description);
    console.log(SubmitD);

    //Initiate Regular Expretions
    var StringExp = new RegExp("^[A-Za-z]{3,15}$", '');
    var DateExp = new RegExp("^\s*([1-2][90][0-9]{2})\-(0?[1-9]|1[012])\-(3[01]|[012][0-9]|[1-9])\s*$", '');


    //Run Tests
    var ResultTitle = StringExp.test(Title);
    var ResultDescription = StringExp.test(Description);
    var ResultSubmitD = DateExp.test(SubmitD);

    //Turn To red-green The Input Border Color Of The Wrong-Correct RegEx Inputs
    (ResultTitle) ? $('       #EditModalBodyInputTitle      ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputTitle      ').removeClass("is-valid").addClass("is-invalid");
    (ResultDescription) ? $(' #EditModalBodyInputDescription').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputDescription').removeClass("is-valid").addClass("is-invalid");
    (ResultSubmitD) ? $('    #EditModalBodyInputSubmitD     ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputSubmitD    ').removeClass("is-valid").addClass("is-invalid");


    //Get An Array Of Every <input> In That Modal
    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-4").children("input");

    //Check Every <input> If Its Empty Or Has Incorrect Input
    var AlertErrorArr = [];
    var EditedInputsOnly = [];
    var InputAreasComplete = true;
    for (var i = 0; i < ModalBodyCellArray.length; i++)
    {
        //Compare The input By name 
        if ($(ModalBodyCellArray[i]).is(':visible'))
        {
            switch ($(ModalBodyCellArray[i]).attr('name')) {
                case 'Title':
                    if (ResultTitle) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    AlertErrorArr.push("Title Must Have A-Za-z As Input and Length 3-15");
                    InputAreasComplete = false;
                    break;
                case 'Description':
                    if (ResultDescription) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    InputAreasComplete = false;
                    AlertErrorArr.push("Description Must Have A-Za-z As Input and Length 3-15");

                    break;               
                case 'SubmitD':
                    if (ResultSubmitD) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    InputAreasComplete = false;
                    AlertErrorArr.push("Submit Day Must Be Greater Than 19YY/MM/DD ");

                    break;
                default:
                    { }
            }
        }
    }
    //Check If Every Input Has Correct Val In It
    if (InputAreasComplete)
    {      
        //Hides The Correct input And Show The p
        ToggleModalBodyCellAssignment(EditedInputsOnly);
        EditAssignment(EditedInputsOnly); //Edit Assignment Attributes       
        ResetModals();
        RefreshAssignmentHtml();
    }
    else {
        alert(AlertErrorArr);
    }
}



function EditAssignment(AssignmentEdited) {

    //From All Assignments Find The One With Matching Id
    for (var i = 0; i < AssignmentsArray.length; i++) {
        if (AssignmentsArray[i].id == AssignmentID) {
            //For Every Cell That Needs Edit Make The Changes Permanent To The AssignmentArray
            for (var j = 0; j < AssignmentEdited.length; j++) {
                switch ($(AssignmentEdited[j]).attr('name')) {
                    case 'Title':
                        AssignmentsArray[i].Title = $(AssignmentEdited[j]).val();
                        break;
                    case 'Description':
                        AssignmentsArray[i].Description = $(AssignmentEdited[j]).val();
                        break;                  
                    case 'SubmitD':
                        AssignmentsArray[i].SubDateTime = new Date($(AssignmentEdited[j]).val());
                        break;
                    default:
                        {}
                }
            }
        }
    }
}


function ToggleModalBodyCellAssignment(Element) {
    //Hides <p> and shows <input> And Reverse
    $(Element).css('display', 'none');
    $($(Element).siblings()).css('display', 'block');

    //toggle() Or .show-hide() Removes The in-line css display from element
    //So i Cant Check The Value Of display
}


