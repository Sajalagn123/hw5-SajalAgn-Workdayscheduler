// Displays today's date at the top of the page
var todayDate = moment().format("dddd, MMMM Do, YYYY");
$('#currentDay').append(todayDate);

var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
// Creates the timeblocks for each hour
function makeTimeblocks(hour, existingTodo = ""){
  var currentHour = new Date().getHours();
  // Color codes time blocks
  var threeTime = "future";
  if(currentHour > hour + 9) threeTime = "past";
  if(currentHour === hour + 9) threeTime = "present"
  var hourName = hours[hour];
  var existingTodo = localStorage.getItem(hourName);
  if(!existingTodo) existingTodo = ""
  console.log("saved task: ", hourName, existingTodo);
  $(".container").append($(
    `<div class="row time-block">
        <div class="hour col-1">${hourName}</div>
        <textarea name="" id="${hourName}" cols="30" rows="3" class="description col-9 ${threeTime}">${existingTodo || ""}</textarea>
        <button class="btn saveBtn col-2">Save</button>
  </div>`));
}

// Repeats time blocks until 5pm
for(var i = 0; i < 9; i++){
  makeTimeblocks(i);
}

// selects all elements with a the class saveBtn
var btns = document.querySelectorAll(".saveBtn");

// For loop that adds an event listener to each button
for (var i = 0; i < btns.length; i++){
btns[i].addEventListener("click", functionSaveBtn);
}


function functionSaveBtn(event){
var taskValue = event.target.parentNode.children[1].value;
var taskKey = event.target.parentNode.children[1].id;

console.log("key values ", taskKey, taskValue);

localStorage.setItem(taskKey, taskValue);
}
