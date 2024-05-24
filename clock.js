setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let year = time.getFullYear();
  let daysOfWeek = time.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[daysOfWeek];

  let am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 12) {
    am_pm = "PM";
  }
  if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime1 = hour + ":" + min + ":";
  let currentTime2 = sec;
  let currentTime3 = am_pm;
  let currentTime4 = day + "," + year;

  document.getElementById("clock1").innerHTML = currentTime1;
  document.getElementById("clock2").innerHTML = currentTime2;
  document.getElementById("clock3").innerHTML = currentTime3;
  document.getElementById("clock4").innerHTML = currentTime4;
}

showTime();
