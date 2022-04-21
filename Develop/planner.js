// Step 1: Have current day displayed at the top of the calender
// Step 2: Have timeblocks for standard business hours presented
// Step 3: Have time blocks color coded to indicate whether they are in the past, present, or future
// Step 4: Make user able to enter an event when they click on a timeblock
// Step 5: Have text be saved in local storage when user clicks on an event
// Step 6: Have content user entered remain when the page is refreshed

function makeTimeblocks(hour, existingTodo = ""){
  var currentHour = new Date().getHours();
  var threeTime = "future";
  if(currentHour > hour) threeTime = "past";
  if(currentHour === hour) threeTime = "present"
  $(".container").append($(
    `<div class="row time-block">
        <div class="hour col-1">${hour}:00</div>
        <textarea name="" id="" cols="30" rows="3" class="description col-9 ${threeTime}">${existingTodo}</textarea>
        <div class="btn saveBtn col-2">Save</div>
  </div>`));
}

for(var i = 9; i < 18; i++){
  makeTimeblocks(i);
}



