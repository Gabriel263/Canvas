var dragged;
document.addEventListener("drag", function dragstart(event){
}, false);
document.addEventListener("dragstart", function(event){
  dragged1 = event.target;
}, false);
document.addEventListener("dragend", function(event){
  event.target.style.opacity = "";
}, false);
document.addEventListener("dragover", function(event){
  event.preventDefault();
}, false);
document.addEventListener("dragenter", function(event){
  if(event.target.className == "mid"){
    event.target.style.backgroundColor = "red";
  }
}, false);
document.addEventListener("dragleave", function(event){
  if(event.target.className == "mid"){
    event.target.style.backgroundColor = "";
  }
}, false);
document.addEventListener("drop", function(event){
  event.preventDefault();
  if(event.target.className == "mid"){
    event.target.style.backgroundColor = "";
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
}, false);