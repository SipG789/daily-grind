// TODO: display current day at top of calendar jquery's UI datepicker (5.4.4)
var today = document.querySelector("#currentDay");
    var currentDate = moment();
today.textContent = currentDate.format('MMMM Do YYYY, h:mm:ss a');

// TODO: time blocks for standard business hours (5am-12pm) **use jquery grid layouts bootstrap (5.2.4)

// TODO: color code time blocks to indicate past, present, future (audits 5.4.6)

// TODO: when I click on a time block I can enter an event (onClick function 5.2 lesson)
$(".items").on("click", "p", function() {
    console.log(this);
});
// TODO: save to local storage 
