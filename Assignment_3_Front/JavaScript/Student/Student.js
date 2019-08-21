$(document).ready(function () {
    var StudentsArray = [];
    DummyStudents(StudentsArray);
    //for (var i in StudentsArray) {
    //    console.log(i);
    //}






});







function SubmitBtClick(ButtonObj) {

    var Firstname = $('#ModalBodyInputFname').val();
    var Lastname = $('#ModalBodyInputLname').val();
    var Tuition = $('#ModalBodyInputTuition').val();
    var Birt = $('#ModalBodyInputBirth').val();

    var exp = new RegExp("^[A-Za-z]{3,15}$", '');
    var ResultFname = exp.test(Firstname);
    var ResultLname = exp.test(Lastname);
    var ResultTuition = exp.test(Tuition);
    var ResultBirth = exp.test(Birt);

    //Turn To red The Border Color Of The Wrong RegEx Inputs
    (ResultFname) ? $('#ModalBodyInputFname').removeClass("is-invalid") : $('#ModalBodyInputFname').addClass("is-invalid");
    (ResultLname) ? $('#ModalBodyInputLname').removeClass("is-invalid") : $('#ModalBodyInputLname').addClass("is-invalid");
    (ResultTuition) ? $('#ModalBodyInputTuition').removeClass("is-invalid") : $('#ModalBodyInputTuition').addClass("is-invalid");
    (ResultBirth) ? $('#ModalBodyInputBirth').removeClass("is-invalid") : $('#ModalBodyInputBirth').addClass("is-invalid");


    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-3").children("input");
    var UserInputTest = true;
    var EditedInputsOnly = [];
    for (var i = 0; i < ModalBodyCellArray.length; i++) {
        //Compare The input By name 

        if ($(ModalBodyCellArray[i]).is(':visible')) {
            switch ($(ModalBodyCellArray[i]).siblings('input').attr('name')) {
                case 'Fname':
                    if (ResultFname) {
                        EditedInputsOnly.add(ModalBodyCellArray[i])
                        break;
                    }
                        
                    UserInputTest = false;
                    break;
                case 'Lname':
                    if (ResultLname) {
                        EditedInputsOnly.add(ModalBodyCellArray[i])
                        break;
                    }
                    UserInputTest = false;
                    break;
                case 'Tuition':
                    if (ResultTuition) {
                        EditedInputsOnly.add(ModalBodyCellArray[i])
                        break;
                    }
                    UserInputTest = false;
                    break;
                case 'Birth':
                    if (ResultBirth) {
                        EditedInputsOnly.add(ModalBodyCellArray[i])
                        break;
                    }
                    UserInputTest = false;
                    break;
                default:
            }
        }
        for (var i = 0; i < EditedInputsOnly.length; i++) {
            (UserInputTest) ? ToggleModalBodyCell(EditedInputsOnly[i]) : alert("Please Use Correct Input");
        }

        
    }

  
}







function DummyStudents(StudentsArray) {
    var Student = {
        Fname: "Alex",
        Lname: "Psychoson",
        Tuition: 1500,
        DateOfBirth: new Date(1995, 1, 1)
    };
    $(StudentsArray).add(Student);
    $(StudentsArray).add(Student);
    $(StudentsArray).add(Student);
}
