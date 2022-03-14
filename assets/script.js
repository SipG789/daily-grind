// TODO: display current day at top of calendar jquery's UI datepicker (5.4.4)
var today = document.querySelector("#currentDay");
var currentDate = moment();
today.textContent = currentDate.format('MMMM Do YYYY, h:mm:ss a');

//TODO: save edited event blocks 
$(".saveBtn").on("click", function (event) {

    event.preventDefault();
    //get current value
    var text = $(this)
        .siblings(".list-group-task")
        .val();

    // get parent's id attribute 
    var status = $(this)
        .siblings(".hour")
        .text();

        localStorage.setItem(status, JSON.stringify(text));
   
});

// TODO: save to local storage 

function loadTasks () {

    $("#6").val(localStorage.getItem("6"));
    $("#7").val(localStorage.getItem("7AM"));
    $("#8").val(localStorage.getItem("8AM"));
    $("#9").val(localStorage.getItem("9AM"));
    $("#10").val(localStorage.getItem("10AM"));
    $("#11").val(localStorage.getItem("11AM"));
    $("#12").val(localStorage.getItem("12PM"));
    $("#1").val(localStorage.getItem("1PM"));
    $("#2").val(localStorage.getItem("2PM"));
    $("#3").val(localStorage.getItem("3PM"));
    $("#4").val(localStorage.getItem("4PM"));
    $("#5").val(localStorage.getItem("5PM"));
    $("#6eve").val(localStorage.getItem("6PM"));
    
};

loadTasks();
// TODO: color code time blocks to indicate past, present, future (audits 5.4.6)
var displayColors = function (taskEl) {
    $(taskEl).find("p").text().trim();

     var time = moment().hour();

     $(taskEl).removeClass("list-group-task");

     if (moment().isAfter(time)) {
         $(taskEl).addClass("future");
     }
     if (moment().isBefore(time)) {
         $(taskEl).addClass("past");
     } 
     else if (moment() === currentDate) {
         $(taskEl).addClass("present");
     }
};

// TODO: when I click on a time block I can enter an event (onClick function 5.2 lesson)
$(".list-group").on("click", "p", function () {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);

    // edit task block 
    $(this).replaceWith(textInput);

    // check due date 
    displayColors(textInput);

    
    textInput.trigger("focus");
});



