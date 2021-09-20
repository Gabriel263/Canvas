function teste(string){
    console.log(string);
}
function somaID(id) {
    return ++id;
}
function subtraiID(id) {
  return --id;
}
function div(id_fundo, id_canvas, id){
    var var_fundo = document.getElementById(id_fundo);
    fundo_valor = var_fundo.options[var_fundo.selectedIndex].value;
    let divElement1 = document.createElement("div");
    divElement1.setAttribute('id',id_canvas+'box'+id);
    divElement1.setAttribute('draggable', 'true');
    divElement1.style.backgroundColor = fundo_valor;
    divElement1.style.color = "white";
    divElement1.style.width = "95%";
    divElement1.style.height = "auto";
    divElement1.style.padding = "2.5%";
    divElement1.style.borderRadius = "5px";
    divElement1.style.textAlign = "justify";
    let divMae = document.getElementById(id_canvas);
    //Insere uma div X no canvas
    divMae.appendChild(divElement1);
    //cria uma nova div Y
    let divElement2 = document.createElement("div");
    divElement2.setAttribute('id', "cabecalho"+id);
    divElement2.style.backgroundColor= fundo_valor;
    divElement2.style.height= "20px";
    divElement2.style.width="100%";
    var id_divBox = id_canvas+'box'+id;
    let divBox = document.getElementById(id_divBox);
    //adiciona div Y na div X;
    divBox.appendChild(divElement2);

}



function trash(id_canvas,id_cabecalho, id){
    let imgElement = document.createElement("img");
    imgElement.setAttribute('id',id_cabecalho+'bin'+id);
    imgElement.setAttribute('src', '../img/cancel.png');
    imgElement.style.width = "20px";
    imgElement.style.height = "20px";
    imgElement.style.backgroundColor = fundo_valor;
    imgElement.style.float = "right";
    imgElement.style.position = "relative";
    imgElement.style.cursor = "pointer";

    var id_divBox = id_cabecalho+id;
    let divBox = document.getElementById(id_divBox);
    divBox.appendChild(imgElement);

    const excluir_div = document.getElementById(id_cabecalho+'bin'+id);
    excluir_div.addEventListener("click", (event) => {
      
      document.getElementById(id_canvas+'box'+id).remove();
      event.preventDefault();
    });
  }
  function titulo(id_fonte, id_fundo, id_titulo, id_canvas, id){
    var var_fundo = document.getElementById(id_fundo);
    fundo_valor = var_fundo.options[var_fundo.selectedIndex].value;
    var var_fonte = document.getElementById(id_fonte);
    fonte_valor = var_fonte.options[var_fonte.selectedIndex].value;
    var titulo_var = document.getElementById(id_titulo).value;
    console.log('titulo = '+titulo_var)

    let labelElement = document.createElement("label");
    labelElement.setAttribute('id',id_canvas+'tittle'+id);
    labelElement.style.backgroundColor = fundo_valor;
    labelElement.style.color = fonte_valor;
    labelElement.style.fontFamily = "sans-serif";
    labelElement.style.fontSize = "20px";
    labelElement.style.position = "relative";
    labelElement.innerHTML = titulo_var;
    var id_divBox = id_canvas+id.toString();

    let divBox = document.getElementById(id_divBox);
    divBox.appendChild(labelElement);
  }
  
  function br(id_canvas, id){
    let brtag = document.createElement('br');
    var id_divBox = id_canvas+'box'+id.toString();
    let divBox = document.getElementById(id_divBox);
    divBox.appendChild(brtag);
  }
  
  function texto1(id_fonte, id_fundo, id_canvas, areatexto, id){
    var var_fundo = document.getElementById(id_fundo);
    fundo_valor = var_fundo.options[var_fundo.selectedIndex].value;
    var var_fonte = document.getElementById(id_fonte);
    fonte_valor = var_fonte.options[var_fonte.selectedIndex].value;
    let labelElement = document.createElement("p");
    labelElement.setAttribute('id',id_canvas+'text'+id);
    labelElement.style.backgroundColor = fundo_valor;
    labelElement.style.color = fonte_valor;
    labelElement.style.fontFamily = "sans-serif";
    labelElement.style.width = "95%";
    labelElement.style.height = "auto";
    labelElement.style.fontSize = "18px";
    
    labelElement.innerHTML = areatexto;
    var id_divBox = id_canvas+'box'+id.toString();
    let divBox = document.getElementById(id_divBox);
    divBox.appendChild(labelElement);
  }
  
  function limpar(id_titulo, id_textarea, id_fonte, id_fundo){
    var limpando_titulo = document.getElementById(id_titulo).value = '';
    var limpando_texto = document.getElementById(id_textarea).value = '';
    var limpando_fonte = document.getElementById(id_fonte).selectedIndex = "black";
    var limpando_fundo = document.getElementById(id_fundo).selectedIndex = "black";
  }