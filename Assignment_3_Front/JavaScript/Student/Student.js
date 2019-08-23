
var StudentsArray = [];

function GetStudentTable() {

    //Fill Array If Empty
    if (StudentsArray.length == 0)
        DummyStudents(StudentsArray);

    //Add To Body Empty Divs For Add-Edit Student Modal
    //Only If The Divs Doesnt Exist Yet
    if (document.getElementById("EditElementModal") == null) 
        $("body").append('<div id="EditElementModal">');
    if (document.getElementById("AddElementModal") == null) 
        $("body").append('<div id="AddElementModal">');

    
    $("#EditElementModal").append(GetEditModal()); //Append Completed modal to empty div
    StudentTable(StudentsArray);
}




function SubmitBtClick(ButtonObj) {

    var Firstname = $('#ModalBodyInputFname').val();
    var Lastname = $('#ModalBodyInputLname').val();
    var Tuition = $('#ModalBodyInputTuition').val();
    var Birth = $('#ModalBodyInputBirth').val();

    var StringExp = new RegExp("^[A-Za-z]{3,15}$", '');
    var NumberExp = new RegExp("^[0-9]{1,6}$", '');
    var ResultFname = StringExp.test(Firstname);
    var ResultLname = StringExp.test(Lastname);
    var ResultTuition = NumberExp.test(Tuition);
    var ResultBirth = StringExp.test(Birth);

    //Turn To red-green The Input Border Color Of The Wrong-Correct RegEx Inputs
    (ResultFname) ? $('  #ModalBodyInputFname  ').removeClass("is-invalid").addClass("is-valid") : $('#ModalBodyInputFname  ').removeClass("is-valid").addClass("is-invalid");
    (ResultLname) ? $('  #ModalBodyInputLname  ').removeClass("is-invalid").addClass("is-valid") : $('#ModalBodyInputLname  ').removeClass("is-valid").addClass("is-invalid");
    (ResultTuition) ? $('#ModalBodyInputTuition').removeClass("is-invalid").addClass("is-valid") : $('#ModalBodyInputTuition').removeClass("is-valid").addClass("is-invalid");
    (ResultBirth) ? $('  #ModalBodyInputBirth  ').removeClass("is-invalid").addClass("is-valid") : $('#ModalBodyInputBirth  ').removeClass("is-valid").addClass("is-invalid");


    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-3").children("input");

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
                case 'Tuition':
                    if (ResultTuition) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    InputAreasComplete = false;
                    break;
                case 'Birth':
                    if (ResultBirth) {
                        EditedInputsOnly.push(ModalBodyCellArray[i]);
                        break;
                    }
                    InputAreasComplete = false;
                    break;
                default:
                    {
                        console.log("eeeeee");
                    }
            }
        }
    }
    //Check If Every Input Has Correct Val In It
    if (InputAreasComplete == true) {

        //Hides The Correct input And Show The p
        for (var i = 0; i < EditedInputsOnly.length; i++) 
            ToggleModalBodyCell(EditedInputsOnly[i]);
        
        //Edit Student Attributes 
        EditStudent(EditedInputsOnly);

        //Refresh Student Table With The New Data
        RefreshStudentHtml();

        $('#EditElementModal').modal().remove();//Remove Modal AfterEdit Is Done! 
        //Remove div Create Automaticaly When Modal Opens(It Should Close By It Self)
        $('.modal-backdrop').remove();
    }
   





}








function AddStudent() {
    console.log(StudentsArray.length);


}

function EditStudent(StudentEdited) {
    //Get The Id Of The Student To Be Edited
    var StudentId = $(StudentEdited[0]).parents('div.row').attr("data-studentid");

    //From All Students Find The One With Matching Id
    for (var i = 0; i < StudentsArray.length; i++) {
        if (StudentsArray[i].id == StudentId) {
            console.log(StudentsArray[i].Fname);
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
                        StudentsArray[i].Birth = $(StudentEdited[j]).val();
                        break;
                    default:
                        {
                            console.log("eeeeee");
                        }
                }
            }
        }
    }
}


function DummyStudents(StudentsArray) {


    StudentsArray.push({ id: 1, Fname: "Τασος", Lname: "Παναγοπουλος", Tuition: 1500, DateOfBirth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 2, Fname: "Γιαννης", Lname: "Καλυβας", Tuition: 1500, DateOfBirth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 3, Fname: "Αλεξανδρος", Lname: "Ψυχογυιος", Tuition: 1500, DateOfBirth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 4, Fname: "Τασος", Lname: "Γκικα", Tuition: 1500, DateOfBirth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 5, Fname: "Γιαννης", Lname: "Κουνασους", Tuition: 1500, DateOfBirth: new Date(1995, 1, 1) });
    StudentsArray.push({ id: 6, Fname: "Κωστας", Lname: "Φερδεριγος", Tuition: 1500, DateOfBirth: new Date(1995, 1, 1) });

}
