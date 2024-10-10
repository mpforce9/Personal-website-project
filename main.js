const sub_main = document.getElementById("sub-main");
const parag = document.getElementById("parag");

function start() {
  let splash = document.getElementById("splash");
  splash.classList.add("hide");
  const bgm = document.getElementById("bgm");
  bgm.volume = 0.25;
  bgm.play();
  $(document).ready(function () {
    $(".ripple").ripples({
      resolution: 200,
      dropRadius: 20,
      perturbance: 0.04,
    });
  });
}
function no_audio() {
  let splash = document.getElementById("splash");
  splash.classList.add("hide");
  $(document).ready(function () {
    $(".ripple").ripples({
      resolution: 200,
      dropRadius: 20,
      perturbance: 0.04,
    });
  });
}
function button_hover() {
  sound = document.getElementById("sound");
  sound.volume = 0.2;
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}

function gmail() {
  if (document.getElementById("gmail-popup") == null) {
    var splashv2 = document.createElement("div");
    var gmail_popup = document.createElement("div");
    var gmail_popup_text = document.createElement("h1");
    var exit_button = document.createElement("button");
    gmail_popup_text.innerHTML = "bilelbenhamed00@gmail.com";
    exit_button.innerHTML = "x";
    splashv2.id = "splashv2";
    gmail_popup.id = "gmail-popup";
    exit_button.id = "exit_button";
    gmail_popup_text.id = "gmail-popup-text";
    document.getElementById("ripple").appendChild(splashv2);
    document.getElementById("ripple").appendChild(gmail_popup);
    gmail_popup.appendChild(gmail_popup_text);
    gmail_popup.appendChild(exit_button);
    document
      .getElementById("exit_button")
      .addEventListener("click", close_gmail);
    document.getElementById("splashv2").addEventListener("click", close_gmail);
  }
}

function close_gmail() {
  document.getElementById("gmail-popup").remove();
  document.getElementById("splashv2").remove();
}
const logo = document.getElementById("nav-logo");
let rotationDegree = 0;
let intervalId;

logo_name.addEventListener("mouseover", () => {
  intervalId = setInterval(() => {
    rotationDegree += 2;
    logo.style.transform = `rotate(${rotationDegree}deg)`;
  }, 10);
});
logo_name.addEventListener("mouseout", () => {
  clearInterval(intervalId);
});
const scrollpoint = 50;
const scrollpoint2 = 100;

function nav_bar() {
  //scrolled-down
  if (scrollY > scrollpoint) {
    nav = document.getElementById("nav");
    nav.classList.add("nav-fixed");
  }
  //scrolled-up:
  else if (scrollpoint > screenY) {
    nav = document.getElementById("nav");
    nav.classList.remove("nav-fixed");
  }
}
function description_popup() {
  //pop
  if (scrollY > scrollpoint2 && document.getElementsByClassName("moove-up")) {
    sub_main.classList.add("moove-up");
    parag.id = "parag-popup";
  }
  //leave
  else if (scrollpoint2 > screenY) {
    sub_main.classList.remove("moove-up");
    parag.id = "parag";
  }
}
function handlescroll() {
  nav_bar();
  description_popup();
}

window.addEventListener("scroll", handlescroll);
