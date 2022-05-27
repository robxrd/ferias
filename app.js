const timeDiv = document.getElementById('clock');
const dateDiv = document.getElementById('date');
const countdown = document.getElementById('countdown');
const song = new Audio('./assets/macintosh-plus-420.mp3')

function showTime() {
  let time = new Date();
  let hour = ('0' + time.getHours()).slice(-2);
  // let secs = ('0' + time.getSeconds()).slice(-2);
  let mins = ('0' + time.getMinutes()).slice(-2);
  timeDiv.innerHTML = `${hour}:${mins}`;
}
setInterval(showTime, 1000);

function showDate() {
  let today = new Date();
  let dayWeek = today.getDay();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  switch (dayWeek) {
    case 0:
      dayWeek = 'Sunday';
      break;
    case 1:
      dayWeek = 'Monday';
      break;
    case 2:
      dayWeek = 'Tuesday';
      break;
    case 3:
      dayWeek = 'Wednesday';
      break;
    case 4:
      dayWeek = 'Thursday';
      break;
    case 5:
      dayWeek = 'Friday';
      break;
    case 6:
      dayWeek = 'Saturday';
      break;
  }

  switch (month) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
  }
  dateDiv.innerHTML = `${dayWeek} ${day} ${month} ${year}`
}
setInterval(showDate, 1000);

function timeLeft() {
  const countDownDate = new Date("jul 2, 2022 11:00").getTime();
  // const countDownDate = new Date("Dec 29, 2020 18:50").getTime();
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let daysHour = days * 24;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + daysHour;
    let minutes = `0${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`;
    let seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`;    
    let secondsSlice = seconds.slice(-2);
    let minutesSlice = minutes.slice(-2);
    document.getElementById("countdown").innerHTML = `${days} DAYS`;
    document.getElementById("hours").innerHTML = `${hours}:${minutesSlice}:${secondsSlice}`;
    if (distance < 0) {
      clearInterval(x);
      clearInterval(timeLeft);
      document.getElementById("countdown").innerHTML = '';
      document.body.style.backgroundImage = "url('./assets/static_crt.gif')";
      let gif = new Image();
      gif.src = './assets/skeleton.gif';
      gif.id = 'gif';
      document.getElementById("countdown").appendChild(gif);
      gif.addEventListener('click', playSong)
    }
  }, 1000);
}
setInterval(timeLeft, 1000);

function playSong() {
  song.play();
}