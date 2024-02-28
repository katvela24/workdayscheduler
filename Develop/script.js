//Added code to display the current date in the header of the page.
$(function () {
 const todaysDate = document.getElementById("currentDay");

var now = dayjs()
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("=",now);
var z = now.$d +" "
todaysDate.innerHTML = z.substring(0,11)

//listener for click events and save to local storage
$(".saveBtn").click(function(){
  var task = $(this).siblings(".description").val()
  var timeblock = $(this).parent().attr("id")
  localStorage.setItem(timeblock,task)
  // need to develop this : console.log("Appointment added to Local Storage",description)
})

//create a loop
for(var i = 9; i < 18; i++){
  $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))

} 
//Use Day.js to get the current hour in 24-hour time format
$(".time-block").each(function(){
  var hour = dayjs().hour()
  var blockhour  = parseInt($(this).attr("id").split("-")[1])
  if(blockhour < hour){
    $(this).addClass("past")
  }else if(blockhour===hour){
    $(this).addClass("present")
  }else{
    $(this).addClass("future")
  }
})

});
