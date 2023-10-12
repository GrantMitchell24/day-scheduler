var scheduleLocation = $(".container-lg");
var clickSave = $('.saveBtn')
var dayDisplay = $("#currentDay")

const hoursBlockTotal = 9;
const timeStart = 9;
var now = dayjs();
var currentTime = now.hour();

function buildPage(){
  for(i = 0; i < hoursBlockTotal; i++){
    var timeID = i+timeStart
    var timeSlot = i+timeStart
    var timeSlotSuf = "AM"
    var notifyColor = ""
    if (currentTime > timeID)notifyColor = "past";
    else if (currentTime === timeID)notifyColor="present";
    else notifyColor="future";
    if (timeID === 0) timeSlot = 12;
    else if (timeID > 12 && timeID < 24){
      timeSlot -=12;
      timeSlotSuf = "PM";
    }
    var blockLoadID = (timeSlot+timeSlotSuf);
    var blockLoadText = JSON.parse(localStorage.getItem(blockLoadID));
    if (blockLoadText === null) blockLoadText = "";
    if (timeID < 24){
      var row = `<div id="hour-${timeID}" class="row time-block">
    <div class="col-2 col-md-1 hour text-center py-3">${timeSlot}${timeSlotSuf}</div>
    <textarea class="col-8 col-md-10 description ${notifyColor} " rows="3">${blockLoadText} </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
  `
      scheduleLocation.append(row);
      getText()
    }
  }
}
  function getText(){
$(".description").each(function(){
  console.log($(this))
})
  }

scheduleLocation.on("click", function(event){
  console.log(event.target.className)
  if (event.target.className == "btn saveBtn col-2 col-md-1"){

 
  var blockSaveID = event.target.parentElement.id
  // var blockSaveID = $(this).siblings(".hour").text();
  var blockSaveText = event.target.previousElementSibling.value
  console.log(blockSaveText, blockSaveID);
  console.log("text");
  localStorage.setItem(blockSaveID, JSON.stringify(blockSaveText));
}
})


dayDisplay.text(now.format("dddd, MMMM DD"));
buildPage();