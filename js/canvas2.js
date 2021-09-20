/*Abrindo pop_up*/
var abrir_pop_up2 = document.getElementById('canvas2');
abrir_pop_up2.addEventListener("click", (e) => {
  document.getElementById('pop_up2').style.display = 'block';
  e.preventDefault();
});

/*Fechando pop_up*/
var pop_up_IMG_close2 = document.getElementById('img_closePop_up2');
pop_up_IMG_close2.addEventListener("click", (e) => {
  document.getElementById('pop_up2').style.display = 'none';    
    e.preventDefault();
});