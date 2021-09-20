/*Abrindo pop_up*/
var abrir_pop_up1 = document.getElementById('canvas1');
abrir_pop_up1.addEventListener("click", (e) => {
  document.getElementById('pop_up1').style.display = 'block';
  e.preventDefault();
}); 

/*Fechando pop_up*/

var pop_up_IMG_close1 = document.getElementById('img_closePop_up1');
pop_up_IMG_close1.addEventListener("click", (e) => {
  document.getElementById('pop_up1').style.display = 'none';    
    e.preventDefault();
});