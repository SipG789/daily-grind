var tasks = {};

// TODO: display current day at top of calendar jquery's UI datepicker (5.4.4)
var today = document.querySelector("#currentDay");
var currentDate = moment();
today.textContent = currentDate.format('MMMM Do YYYY, h:mm:ss a');

// TODO: time blocks for standard business hours (6am-6pm)

// TODO: save to local storage 

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
      if (!tasks) {
        tasks = {
        toDo: []
        };
      }
    $.each(tasks, function (list, arr) {
        arr.forEach(function(task) {
            createTask(task.text, list);
        });
    });
  };

var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
// TODO: color code time blocks to indicate past, present, future (audits 5.4.6)

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

    textInput.trigger("focus");
});

//TODO: save edited event blocks 
$(".list-group").on("blur", "textarea", function () {
    //get current value
    var text = $(this)
        .val()
        .trim();

    // get parent's id attribute 
    var status = $(this)
        .closest(".list-group")
        .attr("id")
        .replace("list-", "");

    // get task's position 
    var index = $(this)
        .closest(".list-group-item")
        .index();

        tasks[status][index].text = text;
        saveTasks();

    var taskP = $("<p>")
        .addClass("m-1")
        .text(text);

    $(this).replaceWith(taskP);
});
