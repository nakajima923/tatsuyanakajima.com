window.addEventListener("scroll", function() {
  var header = document.getElementById("headerhome");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;

  if (scrollTop >= 50 && windowWidth < 600) {
    header.style.boxShadow = "0 -40px 50px #000";
  }else if (scrollTop >= 100) {
    header.style.boxShadow = "0 -40px 50px #000";
    header.classList.add("headersmall");
  }else {
    header.style.boxShadow = "none";
    header.classList.remove("headersmall");
  }

});