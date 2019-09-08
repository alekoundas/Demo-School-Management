function GetTrainerTable() {

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



function DummyTrainers() {

    TrainersArray.push({ id: 1, Fname: "Margaret", Lname: "Fletcher", Subject: "C#    "});
    TrainersArray.push({ id: 2, Fname: "Emma    ", Lname: "Smith   ", Subject: "C#    "});
    TrainersArray.push({ id: 3, Fname: "Linda   ", Lname: "O'Brien ", Subject: "JAVA  "});
    TrainersArray.push({ id: 4, Fname: "William ", Lname: "Miller  ", Subject: "SQL   "});
    TrainersArray.push({ id: 5, Fname: "Damian  ", Lname: "White   ", Subject: "C#    "});
    TrainersArray.push({ id: 6, Fname: "Sophie  ", Lname: "Anderson", Subject: "Python"});
    TrainersArray.push({ id: 7, Fname: "Joseph  ", Lname: "Evans   ", Subject: "SQL   "});
    TrainersArray.push({ id: 8, Fname: "David   ", Lname: "Wang    ", Subject: "JAVA  "});
    TrainersArray.push({ id: 9, Fname: "Patricia", Lname: "Gagnon  ", Subject: "JAVA  "});
    TrainersArray.push({ id: 10, Fname: "George  ", Lname: "Wilson ", Subject: "C#    "});
    TrainersArray.push({ id: 11, Fname: "Samantha", Lname: "Brown  ", Subject: "Python"});

}
