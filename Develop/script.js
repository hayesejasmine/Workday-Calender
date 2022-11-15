// displays the current date in the header of the page. We are using the current day, month and date format-no year
let now = moment().format("dddd, MMMM Do");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = now;
let currentTime = moment().format("HH");


//code to apply the past, present, or future class to each time by comparing the id to the current hour.
$(".hourly-slot").each(function() {
  var slotTime = parseInt($(this).attr("id").split("-")[1]);
  console.log(currentTime,slotTime)
  
  if (currentTime == slotTime) {
    $(this).addClass("present");
    $(this).children(".description").addClass("present");

    // if current time is greater than the time data is being saved to, 
  } else if (currentTime > slotTime) {
    $(this).removeClass("future");
    $(this).addClass("past");

  } else if (currentTime < slotTime) {
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});


// a listener for click events on the save button.
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time,value);
});


$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-22 .time-block").val(localStorage.getItem("22"));


$("#clear-button").click(function(event){
  event.preventDefault;
  $("textArea").val("");
  localStorage.clear();
});

