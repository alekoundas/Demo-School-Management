function GetTrainerTable() {

    //Fill Array If Empty
    if (TrainersArray.length == 0)
        DummyTrainers(TrainersArray);

    //Add To Body Empty Divs For Add-Edit Trainer Modal
    //Only If The Divs Doesnt Exist Yet
    if (document.getElementById("EditElementModal") == null) {
        $("body").append('<div id="EditElementModal">');
        $("#EditElementModal").append(GetEditModalTrainer()); //Append Completed modal to empty div
    }
    if (document.getElementById("AddElementModal") == null) {
        $("body").append('<div id="AddElementModal">');
        $("#AddElementModal").append(GetAddModalTrainer()); //Append Completed modal to empty div
    }
    if(document.getElementById("DeleteElementModal") == null) {
        $("body").append('<div id="DeleteElementModal">');
        $("#DeleteElementModal").append(GetDeleteModalTrainer()); //Append Completed modal to empty div
    }
    TrainerTable(TrainersArray);
}

function GetTrainerTableMinimal(Id) {

    //Fill Array If Empty
    if (TrainersArray.length == 0)
        DummyTrainers(TrainersArray);

    TrainerTableMinimal(Id);
}



function DummyTrainers(TrainersArray) {

    TrainersArray.push({ id: 1, Fname: "Τασος", Lname: "Παναγοπουλος", Subject: 1500 });
    TrainersArray.push({ id: 2, Fname: "Γιαννης", Lname: "Καλυβας", Subject: 1500});
    TrainersArray.push({ id: 3, Fname: "Αλεξανδρος", Lname: "Ψυχογυιος", Subject: 1500 });
    TrainersArray.push({ id: 4, Fname: "Τασος", Lname: "Γκικα", Subject: 1500 });
    TrainersArray.push({ id: 5, Fname: "Γιαννης", Lname: "Κουνασους", Subject: 1500});
    TrainersArray.push({ id: 6, Fname: "Κωστας", Lname: "Φερδεριγος", Subject: 1500});

}
