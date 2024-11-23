const body = document.querySelector("body");
const date = new Date();
const hour = date.getHours();

if (hour < 11) {
  body.style.background =
    "background-image: linear-gradient( 111.4deg,  rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58% )";
} 
else if (hour < 16) {
  body.style.background = "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)";
} else if (hour < 18) {
  body.style.background = "linear-gradient( 68.1deg,  rgba(196,69,69,0.5) 9.2%, rgba(255,167,73,0.3) 25%, rgba(253,217,82,0.3) 43.4%, rgba(107,225,108,0.3) 58.2%, rgba(107,169,225,0.3) 75.1%, rgba(153,41,243,0.3) 87.3% )";
} else {
  body.style.background =
    "radial-gradient(circle farthest-corner at 10% 20%,  rgba(151,41,247,1) 0%, rgba(24,22,39,1) 90% )";
}
