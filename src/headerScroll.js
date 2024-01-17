let prevScrollPos = window.pageYOffset;
//Função que permite a tag header sumir quando oscila a barra de navegação.
window.onscroll = function() {
  
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {

    document.getElementById("idheader").style.top = "0";

  } else {

    document.getElementById("idheader").style.top = "-66px"; 

  }

  prevScrollPos = currentScrollPos;
}