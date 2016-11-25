var link=document.querySelector(".btn");
var popup = document.querySelector(".modal-window");
popup.classList.toggle("modal-window-close");

link.addEventListener("click", function(event){
event.preventDefault();
popup.classList.toggle("modal-window-close");
});