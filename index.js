var button = document.querySelector("button") ;
var error = document.querySelector(".red") ;
var input = document.querySelector(".email") ;
var icon = document.querySelector(".error") ;
button.addEventListener("click", function() {
  var email = document.querySelector(".email").value ;
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
  var check = pattern.test(String(email).toLowerCase()) ;

  if(!(email && check)) {
    error.classList.remove("hidden") ;
    input.classList.add("border") ;
    icon.classList.remove("hidden");
  }
}) ;
