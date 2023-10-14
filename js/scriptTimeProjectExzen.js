// Import elements
var dias_elementPEx = document.getElementById("diasPEx");
var horas_elementPEx = document.getElementById("horasPEx");
var minutos_elementPEx = document.getElementById("minutosPEx");
var segundos_elementPEx = document.getElementById("segundosPEx");

function setVelueTime(days, hours, minutes, seconds) {  
  dias_elementPEx.textContent = days;
  horas_elementPEx.textContent = hours;
  minutos_elementPEx.textContent = minutes;
  segundos_elementPEx.textContent = seconds;
}


// Set the date we're counting down to
var countDownDatePEx = new Date("Nov 25, 2023 22:00:00").getTime();

// Update the count down every 1 second
var xPEx = setInterval(function() {

  // Get today's date and time
  var nowPEx = new Date().getTime();

  // Find the distance between now and the count down date
  var distancePEx = countDownDatePEx - nowPEx;

  // Time calculations for days, hours, minutes and seconds
  var daysPEx = Math.floor(distancePEx / (1000 * 60 * 60 * 24));
  var hoursPEx = Math.floor((distancePEx % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesPEx = Math.floor((distancePEx % (1000 * 60 * 60)) / (1000 * 60));
  var secondsPEx = Math.floor((distancePEx % (1000 * 60)) / 1000);

  setVelueTime(daysPEx, hoursPEx, minutesPEx, secondsPEx)
  
  if (distancePEx < 0) {
    clearInterval(x);
    setVelueTime(0,0,0,0)
  }
}, 1000);