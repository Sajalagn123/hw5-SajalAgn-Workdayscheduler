// Step : Have current day displayed at the top of the calender
// Step : Have timeblocks for standard business hours presented
// Step : Have time blocks color coded to indicate whether they are in the past, present, or future
// Step : Make user able to enter an event when they click on a timeblock
// Step 5: Have text be saved in local storage when user clicks on an event
// Step 6: Have content user entered remain when the page is refreshed

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
  $(".container").append($(
    `<div class="row time-block">
        <div class="hour col-1">${hours[hour]}</div>
        <textarea name="" id="${hours[hour]}" cols="30" rows="3" class="description col-9 ${threeTime}">${existingTodo}</textarea>
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
