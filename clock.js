// const hourHand = docuemnt.getElementById("hourHand");
// const minuteHand = docuemnt.getElementById("minuteHand");
// const secondHand = docuemnt.getElementById("secondHand");

function showTime() {
  let date = new Date();
  let h = date.getHours(); // 0 - 23
  let m = date.getMinutes(); // 0 - 59
  let s = date.getSeconds(); // 0 - 59
  let session = "AM";

  let hourDeg = h * 30;
  let minuteDeg = m * 6;
  let secondDeg = s * 6;

  hourHand.style.transform = "rotateZ(" + hourDeg + "deg)";
  minuteHand.style.transform = "rotateZ(" + minuteDeg + "deg)";
  secondHand.style.transform = "rotateZ(" + secondDeg + "deg)";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("clock").innerText = time;
  document.getElementById("clock").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();
