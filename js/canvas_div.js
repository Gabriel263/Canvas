let id_c1 = 0;
let id_c2 = 0;
let id_c3 = 0;
let id_c4 = 0;
async function newdiv1(){
        document.getElementById('pop_up1').style.display = "none";
        var id_fonte = "choises_fon1";
        var id_fundo = "choises_fun1"; 
        var id_canvas = "col1";
        var id_titulo = "tittle1";
        var id_textarea = "areatexto1";
        var id_cabecalho = "cabecalho"; 
        var areatexto = await document.getElementById('areatexto1').value;
        
        await div(id_fundo, id_canvas, id_c1.toString());
        
        await trash(id_canvas,id_cabecalho, id_c1.toString());
        await titulo(id_fonte, id_fundo, id_titulo, id_cabecalho, id_c1.toString());

        await br(id_canvas, id_c1.toString());
        await texto1(id_fonte, id_fundo, id_canvas, areatexto, id_c1.toString());
        await limpar(id_titulo, id_textarea, id_fonte, id_fundo);
        id_c1= somaID(id_c1);
}
async function newdiv2(){
  document.getElementById('pop_up2').style.display = "none";
  var id_fonte = "choises_fon2";
  var id_fundo = "choises_fun2"; 
  var id_canvas = "col2";
  var id_titulo = "tittle2";
  var id_textarea = "areatexto2"; 
  var areatexto = await document.getElementById('areatexto1').value;
  // await teste("Foi");
  await div(id_fundo, id_canvas, id_c2.toString());
  await div2();
  await trash(id_canvas, id_c2);
  await titulo(id_fonte, id_fundo, id_titulo, id_canvas, id_c2.toString());
  await br(id_canvas, id_c2.toString());
  await texto1(id_fonte, id_fundo, id_canvas, areatexto, id_c2.toString());
  await limpar(id_titulo, id_textarea, id_fonte, id_fundo);
  id_c2= somaID(id_c2);
}
async function newdiv3(){
  document.getElementById('pop_up3').style.display = "none";
  var id_fonte = "choises_fon3";
  var id_fundo = "choises_fun3"; 
  var id_canvas = "col3";
  var id_titulo = "tittle3";
  var id_textarea = "areatexto3"; 
  var areatexto = await document.getElementById('areatexto3').value;
  // await teste("Foi");
  await div(id_fundo, id_canvas, id_c3.toString());
  await div2();
  await trash(id_canvas, id_c3);
  await titulo(id_fonte, id_fundo, id_titulo, id_canvas, id_c3.toString());
  await br(id_canvas, id_c3.toString());
  await texto1(id_fonte, id_fundo, id_canvas, areatexto, id_c3.toString());
  await limpar(id_titulo, id_textarea, id_fonte, id_fundo);
  id_c3= somaID(id_c3);
}
async function newdiv4(){
  document.getElementById('pop_up4').style.display = "none";
  var id_fonte = "choises_fon4";
  var id_fundo = "choises_fun4";
  var id_canvas = "col4";
  var id_titulo = "tittle4";
  var id_textarea = "areatexto4"; 
  var areatexto = await document.getElementById('areatexto4').value;
  // await teste("Foi");
  await div(id_fundo, id_canvas, id_c4.toString());
  await div2();
  await trash(id_canvas, id_c4);
  await titulo(id_fonte, id_fundo, id_titulo, id_canvas, id_c4.toString());
  await br(id_canvas, id_c4.toString());
  await texto1(id_fonte, id_fundo, id_canvas, areatexto, id_c4.toString());
  await limpar(id_titulo, id_textarea, id_fonte, id_fundo);
  id_c4= somaID(id_c4);
}