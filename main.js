function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
  document
    .getElementsByClassName("openbtn")
    .item(0)
    .setAttribute("id", "clicked");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("clicked").style.display = "auto";
  document.getElementById("clicked").removeAttribute("id");
}
