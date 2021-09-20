/*Abrindo pop_up*/
var abrir_pop_up3 = document.getElementById('canvas3');
abrir_pop_up3.addEventListener("click", (e) => {
  document.getElementById('pop_up3').style.display = 'block';
  e.preventDefault();
});

/*Fechando pop_up*/
var pop_up_IMG_close3 = document.getElementById('img_closePop_up3');
pop_up_IMG_close3.addEventListener("click", (e) => {
  document.getElementById('pop_up3').style.display = 'none';    
    e.preventDefault();
});
