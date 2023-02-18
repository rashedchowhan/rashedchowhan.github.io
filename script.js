
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFun() {
  document.getElementById("myDropdow").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdow = document.getElementsByClassName("dropdow-content");
    var i;
    for (i = 0; i < dropdow.length; i++) {
      var openDropdow = dropdow[i];
      if (openDropdow.classList.contains('show')) {
        openDropdow.classList.remove('show');
      }
    }
  }
}
