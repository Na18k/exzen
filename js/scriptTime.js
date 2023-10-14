// Import elements
var dias_element = document.getElementById("dias");
var horas_element = document.getElementById("horas");
var minutos_element = document.getElementById("minutos");
var segundos_element = document.getElementById("segundos");

function setVelueTimeExzen(days, hours, minutes, seconds) {
  // Import elements
  var dias_element = document.getElementById("dias");
  var horas_element = document.getElementById("horas");
  var minutos_element = document.getElementById("minutos");
  var segundos_element = document.getElementById("segundos");
  
  dias_element.textContent = days;
  horas_element.textContent = hours;
  minutos_element.textContent = minutes;
  segundos_element.textContent = seconds;
}


// Set the date we're counting down to
var countDownDate = new Date("Nov 8, 2024 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  setVelueTimeExzen(days, hours, minutes, seconds)
  

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    setVelueTime(0,0,0,0)
  }
}, 1000);