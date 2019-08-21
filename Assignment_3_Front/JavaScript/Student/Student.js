//$(document).ready(function () {
//    var StudentsArray = [];
//    DummyStudents(StudentsArray);







//});







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

    console.log(ResultFname);
    console.log(ResultLname);
    console.log(ResultTuition);
    console.log(ResultBirth);

    var ModalBodyCellArray = $(ButtonObj).parent().parent().children(".modal-body").children(".row").children(".col-3").children("p");
    var UserInputTest = true;
    for (var i = 0; i < ModalBodyCellArray.length; i++) {
        //Compare The input By name 
        
        if (!$(ModalBodyCellArray[i]).is(':visible')) {
            switch ($(ModalBodyCellArray[i]).siblings('input').attr('name')) {
                case 'Fname':
                    if (ResultLname)
                        break;
                    UserInputTest = false;
                    break;                                      
                case 'Lname':
                    if (ResultFname) 
                        break;                                     
                    UserInputTest = false;
                    break;
                case 'Tuition':
                    if (ResultTuition) 
                        break;
                    UserInputTest = false;
                    break;
                case 'Birth':
                    if (ResultBirth) 
                       break;
                    UserInputTest = false;
                    break;
                default:
            }                     
        }
    }
    (UserInputTest) ? ToggleModalBodyCell(ModalBodyCellArray[i]) : alert("Malakaaaaa");



    //console.log(Firstname);
    //console.log(Lastname);
    //console.log(Tuition);
    //console.log(Birth);
}







//function DummyStudents(StudentsArray) {
//    $(StudentsArray).add()
//}