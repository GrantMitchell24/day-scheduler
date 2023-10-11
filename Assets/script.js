var scheduleLocation = ('container-lg');
var dayDisplay = ('cuurentDay')
var clickSave = ('.saveBtn')
const hoursBlockTotal = 9;
const timeStart = 9;
var now = dayjs();
var currentTime = now.hour();

function pageBuild() {
  for (i = 0; i < hoursBlockTotal; i++){
    var timeID = i+timeStart
    var timeSlot = i+timeStart
    var timeSlotSuf = "AM"
    var notifyColor = ""
    if (currentTime > timeID)notifyColor = "past"
    else if (currentTime === timeID)notifyColor="present";
    else notifyColor="future";
    if (timeID === 0) timeSlot = 12;
    else if (timeId > 12 && timeID < 24){
      timeSlot -= 12;
      timeSlotSuf = "PM";
    }
    var blockLoadID = (timeSlot+timeSlotSuf);
    var blockLoadText = JSON.parse(localStorage.getItem(blockLoadID));
    if (blockLoadText === null) blockLoadText = "";
    if (timeId < 24){
      var row = `<div id="hour-${timeID}" class="row time-block ${notifyColor}">
    <div class="col-2 col-md-1 hour text-center py-3">${timeSlot}${timeSlotSuf}</div>
    <textarea class="col-8 col-md-10 description" rows="3">${blockLoadText} </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
  `
      $(scheduleLocation).append(row);
    }
  }
}

$(scheduleLocation).on("click", clickSave, function(event){
  var blockSaveText = $(this).siblings("textarea").val();
  var blockSaveID = $(this).siblings(".hour").text();
  localStorage.setItem(blockSaveID, JSON.stringify(blockSaveText));
})

$(dayDisplay).text(now.format("dddd, MMMM DD"));
buildPage();

