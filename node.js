function LiveTime(){
var dateTime = new Date();
var hr= dateTime.getHours();
var min= dateTime.getMinutes();
var sec = dateTime.getSeconds();
document.getElementById('hours').innerHTML = hr;
document.getElementById('minutes').innerHTML = min;
document.getElementById('seconds).innerHTML = sec;
}
setInterval(displayTime,10);