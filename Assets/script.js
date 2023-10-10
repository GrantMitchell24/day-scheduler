var dayDisplay =('cuurentDay')
var scheduleLocation = ('container-lg');
var clickSave = ('.saveBtn')

const timeStart = 9;
const hoursBlock = 9;

var now = dayjs();
var currentTime = now.hour();
function pageBuild(){
  for ( i =0; i <hoursBlock; i++){
    var timeID = i+timeStart
    var timeSlot = i+timeStart
    var timeSlotSuf = "AM"
    var colorRow = ""
    if (currentTime > timeID)colorRow="past"
    else if (timeID === 0) timeSlot = 12;
    else if (timeId > 12 && timeID < 24){
      timeSlot -=12;
      timeSlotSuf = "PM";
    }
  var blockID = (timeSlot + timeSlotSuf);
  var blockText = JSON.parse(localStorage.getItem(blockID));
  if (blockText === null) blockText = "";
  }
}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
});

displayTime();
setInterval(displayTime, 1000);
