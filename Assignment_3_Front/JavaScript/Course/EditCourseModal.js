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
    var ModalBodyRowGrid = $.parseHTML("<div class='row'></div>");//Add data-Courseid From EditRow()
    var ModalBodyColGrid = $.parseHTML("<div class='col-3'></div>");
    var ModalBodyTitle = $.parseHTML(" <p onclick='ToggleModalBodyCellCourse(this);' id='ModalBodyTitle'>  </p>");
    var ModalBodyStream = $.parseHTML("<p onclick='ToggleModalBodyCellCourse(this);' id='ModalBodyStream'> </p>");
    var ModalBodyType = $.parseHTML("  <p onclick='ToggleModalBodyCellCourse(this);' id='ModalBodyType'>   </p>");
    var ModalBodyStartD = $.parseHTML("<p onclick='ToggleModalBodyCellCourse(this);' id='ModalBodyStartD'> </p>");
    var ModalBodyEndD = $.parseHTML("  <p onclick='ToggleModalBodyCellCourse(this);' id='ModalBodyEndD'>   </p>");
    var ModalBodyInputTitle = $.parseHTML(" <input type='text' name='Title'  id='EditModalBodyInputTitle'  style = 'display:none;' class='form-control'  >");
    var ModalBodyInputStream = $.parseHTML("<input type='text' name='Stream' id='EditModalBodyInputStream' style = 'display:none;' class='form-control'  >");
    var ModalBodyInputType = $.parseHTML("  <input type='text' name='Type'   id='EditModalBodyInputType'   style = 'display:none;' class='form-control'  >");
    var ModalBodyInputStartD = $.parseHTML("<input type='date' name='StartD' id='EditModalBodyInputStartD' style = 'display:none;' class='form-control'  >");
    var ModalBodyInputEndD = $.parseHTML("  <input type='date' name='EndD'   id='EditModalBodyInputEndD'   style = 'display:none;' class='form-control'  >");


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
    $(ModalBodyColGrid).append(ModalBodyInputTitle);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyTitle);
    $(ModalBodyInputTitle).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputStream);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyStream);
    $(ModalBodyInputStream).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputType);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyType);
    $(ModalBodyInputType).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputStartD);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyStartD);
    $(ModalBodyInputStartD).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputEndD);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid).append(ModalBodyEndD);
    $(ModalBodyInputEndD).remove();

    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}




function EditRowCourse(row, CourseId) {
    $("#EditCourseModal").modal("show");//show modal 

    //Add data- To The row Of The Modal Body With The Course Id
    //So I Can Retrieve It Later
    $(".modal-body .row").attr("data-courseid", CourseId);

    //Retrieve Data From table
    var Title = $(row).parent().siblings("td:eq( 1 )").text();
    var Stream = $(row).parent().siblings("td:eq( 2 )").text();
    var Type = $(row).parent().siblings("td:eq( 3 )").text();
    var StartD = $(row).parent().siblings("td:eq( 4 )").text();
    var EndD = $(row).parent().siblings("td:eq( 5 )").text();

    $('#ModalTitle').text(Title);
    $('#ModalBodyTitle').text(Title);
    $('#ModalBodyStream').text(Stream);
    $('#ModalBodyType').text(Type);
    $('#ModalBodyStartD').text(StartD);
    $('#ModalBodyEndD').text(EndD);

}




function SubmitEditButtonCourse(ButtonObj) {

    //Get Values From Inputs
    var Title = $('#EditModalBodyInputTitle').val();
    var Stream = $('#EditModalBodyInputStream').val();
    var Type = $('#EditModalBodyInputType').val();
    var StartD = $('#EditModalBodyInputStartD').val();
    var EndD = $('#EditModalBodyInputEndD').val();
    console.log(Title);
    console.log(Stream);
    console.log(Type);
    console.log(StartD);
    console.log(EndD);

    //Initiate Regular Expretions
    var StringExp = new RegExp("^[A-Za-z]{3,15}$", '');
    var DateExp = new RegExp("^\s*([1-2][90][0-9]{2})\-(0?[1-9]|1[012])\-(3[01]|[012][0-9]|[1-9])\s*$", '');


    //Run Tests
    var ResultTitle = StringExp.test(Title);
    var ResultStream = StringExp.test(Stream);
    var ResultType = StringExp.test(Type);
    var ResultStartD = DateExp.test(StartD);
    var ResultEndD = DateExp.test(EndD);


    //Turn To red-green The Input Border Color Of The Wrong-Correct RegEx Inputs
    (ResultTitle) ? $('  #EditModalBodyInputTitle  ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputTitle  ').removeClass("is-valid").addClass("is-invalid");
    (ResultStream) ? $('  #EditModalBodyInputStream  ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputStream  ').removeClass("is-valid").addClass("is-invalid");
    (ResultType) ? $('#EditModalBodyInputType').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputType').removeClass("is-valid").addClass("is-invalid");
    (ResultStartD) ? $('  #EditModalBodyInputStartD  ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputStartD  ').removeClass("is-valid").addClass("is-invalid");
    (ResultEndD) ? $('  #EditModalBodyInputEndD  ').removeClass("is-invalid").addClass("is-valid") : $('#EditModalBodyInputEndD  ').removeClass("is-valid").addClass("is-invalid");


    //Get An Array Of Every <input> In That Modal
    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-3").children("input");

    //Check Every <input> If Its Empty Or Has Incorrect Input
    var EditedInputsOnly = [];
    var InputAreasComplete = true;
    for (var i = 0; i < ModalBodyCellArray.length; i++) {
        //Compare The input By name 
        if ($(ModalBodyCellArray[i]).is(':visible')) {
            switch ($(ModalBodyCellArray[i]).attr('name')) {
                case 'Title':
                    if (ResultTitle) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    InputAreasComplete = false;
                    break;
                case 'Stream':
                    if (ResultStream) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    InputAreasComplete = false;
                    break;
                case 'Type':
                    if (ResultType) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    InputAreasComplete = false;
                    break;
                case 'StartD':
                    if (ResultStartD) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    InputAreasComplete = false;
                    break;
                case 'EndD':
                    if (ResultEndD) {
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

        EditCourse(EditedInputsOnly); //Edit Course Attributes       
        ResetModals();
    }
}



function EditCourse(CourseEdited) {
    //Get The Id Of The Course To Be Edited
    var CourseId = $(CourseEdited[0]).parents('div.row').attr("data-Courseid");

    //From All Courses Find The One With Matching Id
    for (var i = 0; i < CoursesArray.length; i++) {
        if (CoursesArray[i].id == CourseId) {
            //For Every Cell That Needs Edit Make The Changes Permanent To The CourseArray
            for (var j = 0; j < CourseEdited.length; j++) {
                switch ($(CourseEdited[j]).attr('name')) {
                    case 'Title':
                        CoursesArray[i].Title = $(CourseEdited[j]).val();
                        break;
                    case 'Stream':
                        CoursesArray[i].Stream = $(CourseEdited[j]).val();
                        break;
                    case 'Type':
                        CoursesArray[i].Type = $(CourseEdited[j]).val();
                        break;
                    case 'StartD':
                        CoursesArray[i].StartD = new Date($(CourseEdited[j]).val());
                        break;
                    case 'EndD':
                        CoursesArray[i].EndD = new Date($(CourseEdited[j]).val());
                        break;
                    default:
                        { }
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
