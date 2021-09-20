/*Abrindo pop_up*/
var abrir_pop_up4 = document.getElementById('canvas4');
abrir_pop_up4.addEventListener("click", (e) => {
  document.getElementById('pop_up4').style.display = 'block';
  e.preventDefault();
});

/*Fechando pop_up*/
var pop_up_IMG_close4 = document.getElementById('img_closePop_up4');
pop_up_IMG_close4.addEventListener("click", (e) => {
  document.getElementById('pop_up4').style.display = 'none';    
    e.preventDefault();
});