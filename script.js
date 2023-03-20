/* Mouse Tracker */
const coords = { x: -10000000000, y: -1000000000000 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#FFFFFF00",
  "#1A1A1A",
  "#221B1B",
  "#2A1C1C",
  "#311E1E",
  "#391F1F",
  "#412020",
  "#492121",
  "#502222",
  "#582323",
  "#602525",
  "#682626",
  "#6F2727",
  "#772828",
  "#7F2929",
  "#872A2A",
  "#8E2C2C",
  "#962D2D",
  "#9E2E2E",
  "#A62F2F",
  "#AD3030",
  "#B53131",
  "#BD3333",
  "#C53434",
  "#CC3535",
  "#D43636",
  "#DC3737",
  "#E43838",
  "#EB3A3A",
  "#F33B3B",
  "#FB3C3C",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

});

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - -6 + "px";
    circle.style.top = y - -20 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.6;
    y += (nextCircle.y - y) * 0.6;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

/* SideBar */
const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
  menu_toggle.classList.toggle('is-active');
  sidebar.classList.toggle('is-active');
});

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
/* Loading animation */


/* Image Gallery */
