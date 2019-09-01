function GetAddModalCourse() {

    var BaseModal = $.parseHTML("<div class='modal fade' id='addElementModal' tabindex='-1' role='dialog'></div>");
    var ModalDialog = $.parseHTML("<div class='modal-dialog modal-dialog-centered modal-lg' role='document'></div>");
    var ModalCotent = $.parseHTML("<div class='modal-content'></div>");

    //Modal Header Build Here
    var ModalHeader = $.parseHTML("<div class='modal-header'></div>");
    var ModalHeaderTitle = $.parseHTML("<h5 class='modal-title' >Add New Course</h5>");
    var ModalHeaderButton = $.parseHTML("<button type ='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button >");


    //Modal Body Build Here
    var ModalBody = $.parseHTML("<div class='modal-body'></div>");
    var ModalBodyRowGrid = $.parseHTML("<div class='row'></div>");//Add data-Courseid From EditRow()
    var ModalBodyColGrid = $.parseHTML("<div class='col-3'></div>");
    var ModalBodyInputTitle = $.parseHTML(" <input type='text' name='Title'  id='AddModalBodyInputTitle'   class='form-control'  >");
    var ModalBodyInputStream = $.parseHTML("<input type='text' name='Stream' id='AddModalBodyInputStream'  class='form-control'  >");
    var ModalBodyInputType = $.parseHTML("  <input type='text' name='Type'   id='AddModalBodyInputType'    class='form-control'  >");
    var ModalBodyInputStartD = $.parseHTML("<input type='date' name='StartD' id='AddModalBodyInputStartD'  class='form-control'  >");
    var ModalBodyInputEndD = $.parseHTML("  <input type='date' name='EndD'   id='AddModalBodyInputEndD'    class='form-control'  >");


    //Modal Footer Build Here
    var ModalFooter = $.parseHTML("<div class='modal-footer'></div>");
    var ModalFooterCancelbt = $.parseHTML("<button type='button' class='btn btn-danger  mr-auto' data-dismiss='modal'>Cancel</button>");
    var ModalFooterUpdatebt = $.parseHTML("<button type='button' class='btn btn-success' onclick='SubmitAddCourse(this);RefreshCourseHtml();'>Add</button>");



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
    $(ModalBodyColGrid).append(ModalBodyInputTitle);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputTitle).remove();//Remove the input because clone() will cary any next inputs with it

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputStream);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputStream).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputType);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputType).remove();

    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputStartD);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputStartD).remove();
    //Bootstrap Col
    $(ModalBodyColGrid).append(ModalBodyInputEndD);
    $(ModalBodyColGrid).clone().appendTo(ModalBodyRowGrid);
    $(ModalBodyInputEndD).remove();

    //Footer
    $(ModalCotent).append(ModalFooter);
    $(ModalFooter).append(ModalFooterCancelbt);
    $(ModalFooter).append(ModalFooterUpdatebt);

    return BaseModal;
}












function AddCourse() {
    $("#AddCourseModal").modal("show");//show modal 
}


function SubmitAddCourse(ButtonObj) {

    //Get Values From Inputs
    var Title = $('#AddModalBodyInputTitle').val();
    var Stream = $('#AddModalBodyInputStream').val();
    var Type = $('#AddModalBodyInputType').val();
    var StartD = $('#AddModalBodyInputStartD').val();
    var EndD = $('#AddModalBodyInputEndD').val();

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
    (ResultTitle) ? $('  #AddModalBodyInputTitle  ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputTitle  ').removeClass("is-valid").addClass("is-invalid");
    (ResultStream) ? $('  #AddModalBodyInputStream  ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputStream  ').removeClass("is-valid").addClass("is-invalid");
    (ResultType) ? $('#AddModalBodyInputType').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputType').removeClass("is-valid").addClass("is-invalid");
    (ResultStartD) ? $('  #AddModalBodyInputStartD  ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputStartD  ').removeClass("is-valid").addClass("is-invalid");
    (ResultEndD) ? $('  #AddModalBodyInputEndD  ').removeClass("is-invalid").addClass("is-valid") : $('#AddModalBodyInputEndD  ').removeClass("is-valid").addClass("is-invalid");


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
            case 'Stream':
                if (!ResultStream)
                    InputAreasComplete = false;
                break;
            case 'Type':
                if (!ResultType)
                    InputAreasComplete = false;
                break;
            case 'StartD':
                if (!ResultStartD)
                    InputAreasComplete = false;
                break;
            case 'EndD':
                if (!ResultEndD)
                    InputAreasComplete = false;
                break;
            default:
                { }
        }
    }
    console.log(InputAreasComplete);
    //Check If Every Input Has Correct Val In It
    if (InputAreasComplete) {
        AddCourseToDataBase(ModalBodyCellArray);
        ResetModals();
    }
}



function AddCourseToDataBase(NewCourseData) {
    //Find The Max Id +1 For The Next Insert To Database
    var Max_Id = -1;
    for (var i = 0; i < CoursesArray.length; i++) {
        if (CoursesArray[i].id > Max_Id) {
            Max_Id = CoursesArray[i].id;
        }
    }
    var NewCourse = { id: Max_Id + 1 };
    for (var i = 0; i < NewCourseData.length; i++) {
        //Compare The input By name 
        switch ($(NewCourseData[i]).attr('name')) {
            case 'Title':
                NewCourse.Title = $(NewCourseData[i]).val();
                break;
            case 'Stream':
                NewCourse.Stream = $(NewCourseData[i]).val();
                break;
            case 'Type':
                NewCourse.Type = $(NewCourseData[i]).val();
                break;
            case 'StartD':
                NewCourse.StartD = new Date($(NewCourseData[i]).val());
                break;
            case 'EndD':
                NewCourse.EndD = new Date($(NewCourseData[i]).val());
                break;
            default:
                { }
        }
    }
    //Add To DB
    CoursesArray.push(NewCourse);
}


