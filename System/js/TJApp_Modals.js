
//CRIAR MODAL - MENSAGEM
function CriaModal(destino,texto,funcao){
  //ContFunc('FF_Main/CriaModal');

  var ObjetoDestino = document.getElementById(destino);

  var node = document.getElementById(destino +"Div");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  var DivTemp = document.createElement("div");
  DivTemp.id = destino +"Div";
  ObjetoDestino.appendChild(DivTemp);

  var btnModal = document.createElement("button");
  btnModal.id = "OpenModal";
  btnModal.setAttribute("data-toggle","modal");
  btnModal.setAttribute("data-target","#myModal");
  btnModal.style.display = "none";
  DivTemp.appendChild(btnModal);

  var div1 = document.createElement("div");
  div1.id = "myModal";
  div1.className = "modal fade";
  div1.setAttribute("role", "dialog");
  div1.setAttribute("data-backdrop","static");
  div1.setAttribute("keyboard","false");

  var div2 = document.createElement("div");
  div2.className = "modal-dialog";

  var div3 = document.createElement("div");
  div3.className = "modal-content";

  var div4 = document.createElement("div");
  div4.className = "modal-header";


  var btn1 = document.createElement("button");
  btn1.className = "btn close";
  btn1.setAttribute("data-dismiss","modal");
  

  var div5 = document.createElement("div");
  div5.className = "modal-body";
  div5.style.textAlign = 'center';

  var label1 = document.createElement("label");
  label1.innerHTML = texto;
  label1.style.width = "100%";
  label1.style.whiteSpace = "pre-wrap";
  label1.style.textAlign = "center";

  var div6 = document.createElement("div");
  div6.className = "modal-footer";

  var btn2 = document.createElement("button");
  btn2.className = "btn btn-md btn-success fa fa-check";
  btn2.setAttribute("data-dismiss","modal");
  btn2.innerHTML = " OK";
  btn2.setAttribute('onclick',funcao);



  //div6.appendChild(btn2);
  div3.appendChild(div6);
  //div5.appendChild(video1);
  div5.appendChild(label1);
  div5.appendChild(btn2);

  div3.appendChild(div5);
  div4.appendChild(btn1);
  div3.appendChild(div4);
  div2.appendChild(div3);
  div1.appendChild(div2);
  DivTemp.appendChild(div1);

  document.getElementById("OpenModal").click();
}

//CRIAR MODAL - TREINAMENTO PERSONALIZADO
function CriaModalTreinPers(destino,texto){
  var ObjetoDestino = document.getElementById(destino);

  var node = document.getElementById(destino +"Div");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  var DivTemp = document.createElement("div");
  DivTemp.id = destino +"Div";
  ObjetoDestino.appendChild(DivTemp);

  var btnModal = document.createElement("button");
  btnModal.id = "OpenModal";
  btnModal.setAttribute("data-toggle","modal");
  btnModal.setAttribute("data-target","#myModal");
  btnModal.style.display = "none";
  DivTemp.appendChild(btnModal);

  var div1 = document.createElement("div");
  div1.id = "myModal";
  div1.className = "modal fade";
  div1.setAttribute("role", "dialog");

  var div2 = document.createElement("div");
  div2.className = "modal-dialog";

  var div3 = document.createElement("div");
  div3.className = "modal-content";

  var div4 = document.createElement("div");
  div4.className = "modal-header";


  var btn1 = document.createElement("button");
  btn1.className = "btn close";
  btn1.setAttribute("data-dismiss","modal");
  

  var div5 = document.createElement("div");
  div5.className = "modal-body";

  var label1 = document.createElement("label");
  label1.innerHTML = texto;
  label1.style.width = "100%";
  label1.style.whiteSpace = "pre-wrap";
  label1.style.textAlign = "center";



  var div6 = document.createElement("div");
  div6.className = "modal-footer";

  var btn2 = document.createElement("button");
  btn2.className = "btn btn-danger fa fa-close";
  btn2.setAttribute("data-dismiss","modal");
  //btn2.setAttribute("onclick","FecharModalVideo()");
  //btn2.innerHTML = "FECHAR";



  div6.appendChild(btn2);
  div3.appendChild(div6);
  //div5.appendChild(video1);
  div5.appendChild(label1);

  div3.appendChild(div5);
  div4.appendChild(btn1);
  div3.appendChild(div4);
  div2.appendChild(div3);
  div1.appendChild(div2);
  DivTemp.appendChild(div1);

  document.getElementById("OpenModal").click();
}

//BLOQUEIO DA TELA
function CriaModalProgressBar(destino,texto,funcao){
  //ContFunc('FF_Main/CriaModalProgressBar');
  var ObjetoDestino = document.getElementById(destino);

  var node = document.getElementById(destino +"Div");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  var DivTemp = document.createElement("div");
  DivTemp.id = destino +"Div";
  ObjetoDestino.appendChild(DivTemp);

  var btnModal = document.createElement("button");
  btnModal.id = "OpenModal";
  btnModal.setAttribute("data-toggle","modal");
  btnModal.setAttribute("data-target","#myModal");
  btnModal.style.display = "none";
  DivTemp.appendChild(btnModal);

  var div1 = document.createElement("div");
  div1.id = "myModal";
  div1.className = "modal fade";
  div1.setAttribute("role", "dialog");
  div1.setAttribute("data-backdrop","static");
  div1.setAttribute("keyboard","false");

  var div2 = document.createElement("div");
  div2.className = "modal-dialog";

  var div3 = document.createElement("div");
  div3.className = "modal-content";

  var div4 = document.createElement("div");
  div4.className = "modal-header";


  var btn1 = document.createElement("button");
  btn1.className = "btn close";
  btn1.setAttribute("data-dismiss","modal");
  

  var div5 = document.createElement("div");
  div5.className = "modal-body";
  div5.style.textAlign = 'center';
  div5.id = 'DivProgressBar';

  var div5a = document.createElement('div');
  div5a.className = 'progress';

  var div5b = document.createElement('div');
  div5b.id = 'MyProgressBar';
  div5b.className = 'progress-bar progress-bar-success myprogress';
  div5b.setAttribute('role', 'progressbar');
  div5b.style.width = "0%";
  div5b.style.display = 'block';
  div5b.innerHTML = '0%';

  var div6 = document.createElement("div");
  div6.className = "modal-footer";


  //div6.appendChild(btn2);
  div3.appendChild(div6);
  //div5.appendChild(video1);
  div5.appendChild(div5a);
  div5.appendChild(div5b);
  

  div3.appendChild(div5);
  div4.appendChild(btn1);
  div3.appendChild(div4);
  div2.appendChild(div3);
  div1.appendChild(div2);
  DivTemp.appendChild(div1);

  document.getElementById("OpenModal").click(); 
}

//CRIAR MODAL - MENSAGEM
function CriaModalPagamento(destino,texto,funcao){
  var ObjetoDestino = document.getElementById(destino);

  var node = document.getElementById(destino +"Div");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  var DivTemp = document.createElement("div");
  DivTemp.id = destino +"Div";
  ObjetoDestino.appendChild(DivTemp);

  var btnModal = document.createElement("button");
  btnModal.id = "OpenModal";
  btnModal.setAttribute("data-toggle","modal");
  btnModal.setAttribute("data-target","#myModal");
  btnModal.style.display = "none";
  DivTemp.appendChild(btnModal);

  var div1 = document.createElement("div");
  div1.id = "myModal";
  div1.className = "modal fade";
  div1.setAttribute("role", "dialog");
  div1.setAttribute("data-backdrop","static");
  div1.setAttribute("keyboard","false");

  var div2 = document.createElement("div");
  div2.className = "modal-dialog";

  var div3 = document.createElement("div");
  div3.className = "modal-content";

  var div4 = document.createElement("div");
  div4.className = "modal-header";


  var btn1 = document.createElement("button");
  btn1.className = "btn close";
  btn1.setAttribute("data-dismiss","modal");
  

  var div5 = document.createElement("div");
  div5.className = "modal-body";
  div5.style.textAlign = 'center';

  var label1 = document.createElement("label");
  label1.innerHTML = texto;
  label1.style.width = "100%";
  label1.style.whiteSpace = "pre-wrap";
  label1.style.textAlign = "center";

  var div6 = document.createElement("div");
  div6.className = "modal-footer";

  var btn2_Renova = document.createElement("button");
  btn2_Renova.className = "btn btn-md btn-success fa fa-check";
  btn2_Renova.setAttribute("data-dismiss","modal");
  btn2_Renova.innerHTML = " RENOVAR";
  btn2_Renova.setAttribute('onclick',funcao);
  btn2_Renova.style.margin = '10px';

  var btn2_Sair = document.createElement("button");
  btn2_Sair.className = "btn btn-md btn-danger fa fa-close";
  btn2_Sair.setAttribute("data-dismiss","modal");
  btn2_Sair.innerHTML = " SAIR";
  btn2_Sair.setAttribute('onclick','window.parent.FechaPerfil()');

  
  //div5.innerHTML = '<form id="pagseguro" action="https://pagseguro.uol.com.br/checkout/v2/cart.html?action=add" method="post" onsubmit="PagSeguroLightbox(this); return false;"><input type="hidden" name="itemCode" value="763B3AFCD7D7218884684F8A6192C271" /><input type="hidden" name="iot" value="button" /><input type="image" src="https://stc.pagseguro.uol.com.br/public/img/botoes/pagamentos/209x48-comprar-assina.gif" name="submit" alt="Pague com PagSeguro - é rápido, grátis e seguro!" /></form><script type="text/javascript" src="https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.lightbox.js"></script>';
  


  //div6.appendChild(btn2);
  div3.appendChild(div6);
  //div5.appendChild(video1);
  div5.appendChild(label1);
  div5.appendChild(btn2_Renova);
  div5.appendChild(btn2_Sair);

  div3.appendChild(div5);
  div4.appendChild(btn1);
  div3.appendChild(div4);
  div2.appendChild(div3);
  div1.appendChild(div2);
  DivTemp.appendChild(div1);

  document.getElementById("OpenModal").click();
}

//CRIAR MODAL INFORMAÇÕES PESSOAIS - SIM/NÃO
function CriaModalConfirm(destino,texto,ConfirmFunction,CancelFunction){
  var ObjetoDestino = document.getElementById(destino);

  var node = document.getElementById(destino +"Div");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  var DivTemp = document.createElement("div");
  DivTemp.id = destino +"Div";
  ObjetoDestino.appendChild(DivTemp);

  var btnModal = document.createElement("button");
  btnModal.id = "OpenModal";
  btnModal.setAttribute("data-toggle","modal");
  btnModal.setAttribute("data-target","#myModal");
  btnModal.style.display = "none";
  DivTemp.appendChild(btnModal);

  var div1 = document.createElement("div");
  div1.id = "myModal";
  div1.className = "modal fade";
  div1.setAttribute("role", "dialog");
  div1.setAttribute("data-backdrop","static");
  div1.setAttribute("keyboard","false");

  var div2 = document.createElement("div");
  div2.className = "modal-dialog";

  var div3 = document.createElement("div");
  div3.className = "modal-content";

  var div4 = document.createElement("div");
  div4.className = "modal-header";


  var btn1 = document.createElement("button");
  btn1.className = "btn close";
  btn1.setAttribute("data-dismiss","modal");
  

  var div5 = document.createElement("div");
  div5.className = "modal-body";
  div5.style.textAlign = "center";

  var label1 = document.createElement("label");
  label1.innerHTML = texto;
  label1.style.width = "100%";
  label1.style.whiteSpace = "pre-wrap";
  label1.style.textAlign = "center";

  var btnSim = document.createElement("button");
  btnSim.id = "BtnModalSim";
  btnSim.className = "btn btn-md btn-success fa fa-check";
  btnSim.innerHTML = " SIM";
  btnSim.setAttribute("onclick",ConfirmFunction );
  btnSim.style.margin = "5px";
  btnSim.setAttribute("data-dismiss","modal");

  var btnNao = document.createElement("button");
  btnNao.id = "BtnModalNao";
  btnNao.className = "btn btn-md btn-danger fa fa-close";
  btnNao.innerHTML = " NÃO";
  btnNao.style.margin = "5px";
  btnNao.setAttribute("data-dismiss","modal");
  btnNao.setAttribute("onclick",CancelFunction);

  var div6 = document.createElement("div");
  div6.className = "modal-footer";

  div3.appendChild(div6);
  div5.appendChild(label1);
  div5.appendChild(btnSim);
  div5.appendChild(btnNao);

  div3.appendChild(div5);
  div4.appendChild(btn1);
  div3.appendChild(div4);
  div2.appendChild(div3);
  div1.appendChild(div2);
  DivTemp.appendChild(div1);

  document.getElementById("OpenModal").click();
}

//BLOQUEIO DA TELA
function CriaModalLoading(destino,texto,funcao){
  //ContFunc('FF_Main/CriaModalLoading');
  var ObjetoDestino = document.getElementById(destino);

  var node = document.getElementById(destino +"Div");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  var DivTemp = document.createElement("div");
  DivTemp.id = destino +"Div";
  ObjetoDestino.appendChild(DivTemp);

  var btnModal = document.createElement("button");
  btnModal.id = "OpenModal";
  btnModal.setAttribute("data-toggle","modal");
  btnModal.setAttribute("data-target","#myModal");
  btnModal.style.display = "none";
  DivTemp.appendChild(btnModal);

  var div1 = document.createElement("div");
  div1.id = "myModal";
  div1.className = "modal fade";
  div1.setAttribute("role", "dialog");
  div1.setAttribute("data-backdrop","static");
  div1.setAttribute("keyboard","false");

  var div2 = document.createElement("div");
  div2.className = "modal-dialog";

  var div3 = document.createElement("div");
  div3.className = "modal-content";

  var div4 = document.createElement("div");
  div4.className = "modal-header";


  var btn1 = document.createElement("button");
  btn1.className = "btn close";
  btn1.id = "BtnCloseModal";
  btn1.setAttribute("data-dismiss","modal");
  

  var div5 = document.createElement("div");
  div5.className = "modal-body";
  div5.style.textAlign = 'center';
  div5.id = 'DivLoading';

  var img = document.createElement('img');
  img.src = 'http://fastfeedback.com.br/WEBPERSONAL/System/images/ajax-loader.gif'

  var label = document.createElement('label');
  label.innerHTML = " CARREGANDO...";
  label.style.color = 'black';


  var div6 = document.createElement("div");
  div6.className = "modal-footer";
  div6.style.textAlign = 'center';

  div5.appendChild(img);
  div6.appendChild(label);
  div3.appendChild(div5);
  div4.appendChild(btn1);
  div3.appendChild(div4);
  div3.appendChild(div6);
  div2.appendChild(div3);
  div1.appendChild(div2);
  DivTemp.appendChild(div1);

  document.getElementById("OpenModal").click(); 
}

// MENSAGEM DO FINAL DO MODAL laoding
function FinalizaLoading(texto,funcao){
  //ContFunc('FF_Main/FinalizaLoading');

  var btn2 = document.createElement("button");
  btn2.id = "BtnCloseModal";
  btn2.className = "btn btn-md btn-success fa fa-check";
  btn2.setAttribute("data-dismiss","modal");
  btn2.setAttribute('onclick',funcao);
  btn2.style.display = "none";

  var div5 = document.getElementById('DivLoading');

  div5.appendChild(btn2);
}

//CRIAR MODAL AVALIAÇÃO - CARGA INTERNA
function CriaModalAvalCI(id,destino,texto,funcao){
  //ContFunc('FF_Main/CriaModalAvalCI');
  var pse = ["MUITO, MUITO LEVE", "MUITO LEVE","LEVE","MODERADA","POUCO INTENSO","INTENSO","MAIS INTENSO","MUITO INTENSO","MAIS INTENSO", "MUITO, MUITO INTENSO", "MÁXIMO"];


  var ObjetoDestino = document.getElementById(destino);

  var node = document.getElementById(destino +"Div");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  var DivTemp = document.createElement("div");
  DivTemp.id = destino +"Div";
  ObjetoDestino.appendChild(DivTemp);

  var btnModal = document.createElement("button");
  btnModal.id = "OpenModal";
  btnModal.setAttribute("data-toggle","modal");
  btnModal.setAttribute("data-target","#myModal");
  btnModal.style.display = "none";
  DivTemp.appendChild(btnModal);

  var div1 = document.createElement("div");
  div1.id = "myModal";
  div1.className = "modal fade";
  div1.setAttribute("role", "dialog");

  var div2 = document.createElement("div");
  div2.className = "modal-dialog";

  var div3 = document.createElement("div");
  div3.className = "modal-content";

  var div4 = document.createElement("div");
  div4.className = "modal-header";

  var btn1 = document.createElement("button");
  btn1.className = "btn close";
  btn1.setAttribute("data-dismiss","modal");

  //var div5 = document.createElement("div");
  //div5.className = "modal-body";
  //div5.style.textAlign = 'center';

  var divCI = document.createElement("div");
  divCI.id = "DivAvalCI";
  divCI.className = "col-lg-12 col-sm-12 col-sm-12 col-xs-12";
  divCI.style.marginBottom = "20px";
  divCI.style.marginTop = "20px";
  divCI.style.textAlign = "center";
  divCI.style.display = "none";
  divCI.style.backgroundColor = "white";

  var hAval = document.createElement("h4");
  hAval.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  hAval.style.textAlign = "center";
  hAval.innerHTML = "QUAL O SEU NÍVEL DE ESFORÇO COM O TREINAMENTO ?";

  //<input type="radio" name="gender" value="male"> Male<br>

  var radioItem1 = document.createElement("input");
  radioItem1.type = "radio";
  radioItem1.name = "pse";
  radioItem1.value = "0.5";
  radioItem1.id = id;
  radioItem1.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode1 = document.createTextNode(" 0 " + pse[0]);

  var objLabel1 = document.createElement("label");
  objLabel1.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel1.htmlFor = radioItem1.id;
  objLabel1.appendChild(radioItem1);
  objLabel1.appendChild(objTextNode1);

  var radioItem2 = document.createElement("input");
  radioItem2.type = "radio";
  radioItem2.name = "pse";
  radioItem2.value = "1.0";
  radioItem2.id = id;
  radioItem2.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode2 = document.createTextNode(" 1 " + pse[1]);

  var objLabel2 = document.createElement("label");
  objLabel2.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel2.htmlFor = radioItem2.id;
  objLabel2.appendChild(radioItem2);
  objLabel2.appendChild(objTextNode2);

  var radioItem3 = document.createElement("input");
  radioItem3.type = "radio";
  radioItem3.name = "pse";
  radioItem3.value = "2.0";
  radioItem3.id = id;
  radioItem3.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode3 = document.createTextNode(" 2 " + pse[2]);

  var objLabel3 = document.createElement("label");
  objLabel3.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel3.htmlFor = radioItem3.id;
  objLabel3.appendChild(radioItem3);
  objLabel3.appendChild(objTextNode3);

  var radioItem4 = document.createElement("input");
  radioItem4.type = "radio";
  radioItem4.name = "pse";
  radioItem4.value = "3.0";
  radioItem4.id = id;
  radioItem4.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode4 = document.createTextNode(" 3 " + pse[3]);

  var objLabel4 = document.createElement("label");
  objLabel4.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel4.htmlFor = radioItem4.id;
  objLabel4.appendChild(radioItem4);
  objLabel4.appendChild(objTextNode4);

  var radioItem5 = document.createElement("input");
  radioItem5.type = "radio";
  radioItem5.name = "pse";
  radioItem5.value = "4.0";
  radioItem5.id = id;
  radioItem5.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode5 = document.createTextNode(" 4 " + pse[4]);

  var objLabel5 = document.createElement("label");
  objLabel5.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel5.htmlFor = radioItem5.id;
  objLabel5.appendChild(radioItem5);
  objLabel5.appendChild(objTextNode5);

  var radioItem6 = document.createElement("input");
  radioItem6.type = "radio";
  radioItem6.name = "pse";
  radioItem6.value = "5.0";
  radioItem6.id = id;
  radioItem6.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode6 = document.createTextNode(" 5 " + pse[5]);

  var objLabel6 = document.createElement("label");
  objLabel6.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel6.htmlFor = radioItem6.id;
  objLabel6.appendChild(radioItem6);
  objLabel6.appendChild(objTextNode6);

  var radioItem7 = document.createElement("input");
  radioItem7.type = "radio";
  radioItem7.name = "pse";
  radioItem7.value = "6.0";
  radioItem7.id = id;
  radioItem7.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode7 = document.createTextNode(" 6 " + pse[6]);

  var objLabel7 = document.createElement("label");
  objLabel7.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel7.htmlFor = radioItem7.id;
  objLabel7.appendChild(radioItem7);
  objLabel7.appendChild(objTextNode7);

  var radioItem8 = document.createElement("input");
  radioItem8.type = "radio";
  radioItem8.name = "pse";
  radioItem8.value = "7.0";
  radioItem8.id = id;
  radioItem8.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode8 = document.createTextNode(" 7 " + pse[7]);

  var objLabel8 = document.createElement("label");
  objLabel8.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel8.htmlFor = radioItem8.id;
  objLabel8.appendChild(radioItem8);
  objLabel8.appendChild(objTextNode8);

  var radioItem9 = document.createElement("input");
  radioItem9.type = "radio";
  radioItem9.name = "pse";
  radioItem9.value = "8.0";
  radioItem9.id = id;
  radioItem9.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode9 = document.createTextNode(" 8 " + pse[8]);

  var objLabel9 = document.createElement("label");
  objLabel9.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel9.htmlFor = radioItem9.id;
  objLabel9.appendChild(radioItem9);
  objLabel9.appendChild(objTextNode9);

  var radioItem10 = document.createElement("input");
  radioItem10.type = "radio";
  radioItem10.name = "pse";
  radioItem10.value = "9.0";
  radioItem10.id = id;
  radioItem10.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode10 = document.createTextNode(" 9 " + pse[9]);

  var objLabel10 = document.createElement("label");
  objLabel10.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel10.htmlFor = radioItem10.id;
  objLabel10.appendChild(radioItem10);
  objLabel10.appendChild(objTextNode10);

  var radioItem11 = document.createElement("input");
  radioItem11.type = "radio";
  radioItem11.name = "pse";
  radioItem11.value = "10";
  radioItem11.id = id;
  radioItem11.setAttribute('onclick','AvalTreinPersSelecionaBotao(id,value)');

  var objTextNode11 = document.createTextNode(" 10 " + pse[10]);

  var objLabel11 = document.createElement("label");
  objLabel11.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  objLabel11.htmlFor = radioItem11.id;
  objLabel11.appendChild(radioItem11);
  objLabel11.appendChild(objTextNode11);

  var divTempo = document.createElement("div");
  //divTempo.id = "TreinPersTempo";
  divTempo.className = "col-lg-12 col-sm-12 col-sm-12 col-xs-12";
  divTempo.style.textAlign = "center";

  var hTempo = document.createElement("h4");
  hTempo.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  hTempo.style.textAlign = "center";
  hTempo.innerHTML = "QUANTOS MINUTOS VOCÊ DEMOROU PARA REALIZAR O TREINAMENTO?";

  var inputTempo = document.createElement("input");
  inputTempo.type = "number";
  inputTempo.id = "TreinPersTempo";
  inputTempo.style.textAlign = "center";
  inputTempo.style.marginTop = "5px";
  inputTempo.autofocus = "true";
  inputTempo.className = "col-lg-12 col-sm-12 col-sm-12 col-xs-12 ";
  inputTempo.setAttribute('onkeyup','ExibePSE()');
  
  var div4 = document.createElement("div");
  div4.id = "FeedbackDiv";
  div4.className = "col-lg-12 col-sm-12 col-sm-12 col-xs-12";
  div4.style.height = "auto";
  div4.style.backgroundColor = "lightgray";
  div4.style.display = "none";
  div4.style.textAlign = "center";
  div4.style.color = "black";

  var hFeed = document.createElement("h4");
  hFeed.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  hFeed.style.textAlign = "center";
  hFeed.innerHTML = "COMENTÁRIOS / SUGESTÕES / RECLAMAÇOES";

  var textarea5 = document.createElement("textarea");
  textarea5.id = "FeedbackText";
  textarea5.cols = "30";
  textarea5.rows = "5";
  textarea5.style.width = "100%";
  textarea5.style.height = "100%";
  textarea5.style.color = "black";
  textarea5.style.resize = "none";
  textarea5.style.marginBottom = "10px";
  textarea5.setAttribute("data-autoresize","");

  var div6 = document.createElement("div");
  div6.className = "modal-footer";
  div6.style.padding = "15px";
  div6.style.textAlign = "center";
  div6.style.marginTop = "15px";
  

  var divbtnok = document.createElement('div');
  divbtnok.className = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
  divbtnok.style.display = "none";
  divbtnok.id = "DivBtnOk"; 

  var botaoOk = document.createElement("button");
  botaoOk.id = "BtnOk"; 
  botaoOk.className = "btn btn-md btn-success btn-block fa fa-check";
  botaoOk.setAttribute("data-dismiss","modal");
  botaoOk.innerHTML = " OK";
  botaoOk.setAttribute('onclick',funcao);
  //botaoOk.style.display = "none";
  botaoOk.style.marginTop = "10px";

  divCI.appendChild(hAval);
  divCI.appendChild(objLabel1);
  divCI.appendChild(objLabel2);
  divCI.appendChild(objLabel3);
  divCI.appendChild(objLabel4);
  divCI.appendChild(objLabel5);
  divCI.appendChild(objLabel6);
  divCI.appendChild(objLabel7);
  divCI.appendChild(objLabel8);
  divCI.appendChild(objLabel9);
  divCI.appendChild(objLabel10);
  divCI.appendChild(objLabel11);

  div4.appendChild(hFeed);
  div4.appendChild(textarea5);

  

  divTempo.appendChild(hTempo);
  divTempo.appendChild(inputTempo);

  div3.appendChild(divTempo);

  div3.appendChild(divCI);

  div3.appendChild(div4);
  divbtnok.appendChild(botaoOk);
  div6.appendChild(divbtnok);
  

  div3.appendChild(div6);

  div4.appendChild(btn1);

  div2.appendChild(div3);
  div1.appendChild(div2);
  DivTemp.appendChild(div1);

  document.getElementById("OpenModal").click();
}

//MODAL - AVAL CI - EXIBE PSE
function ExibePSE(){
  var input = document.getElementById('TreinPersTempo').value;
  if(input.length > 0){
    document.getElementById("DivAvalCI").style.display = "block";
  }else{
    document.getElementById("DivAvalCI").style.display = "none";
  }  
}

//CRIAR MODAL - VIDEO
function CriaModalVideo(destino,video,picture){
  console.log('modalvideo');
  console.log(destino);
  console.log(video);
  console.log(picture);


  var ObjetoDestino = document.getElementById(destino);

  var node = document.getElementById(destino +"Div");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

  var DivTemp = document.createElement("div");
  DivTemp.id = destino +"Div";
  ObjetoDestino.appendChild(DivTemp);

  var btnModal = document.createElement("button");
  btnModal.id = "OpenModal";
  btnModal.setAttribute("data-toggle","modal");
  btnModal.setAttribute("data-target","#myModal");
  btnModal.style.display = "none";
  DivTemp.appendChild(btnModal);

  var div1 = document.createElement("div");
  div1.id = "myModal";
  div1.className = "modal fade";
  div1.setAttribute("role", "dialog");
  div1.setAttribute("data-backdrop","static");
  div1.setAttribute("keyboard","false");

  var div2 = document.createElement("div");
  div2.className = "modal-dialog";

  var div3 = document.createElement("div");
  div3.className = "modal-content";

  var div4 = document.createElement("div");
  div4.className = "modal-header";


  var btn1 = document.createElement("button");
  btn1.className = "btn close";
  btn1.setAttribute("data-dismiss","modal");
  

  var div5 = document.createElement("div");
  div5.className = "modal-body";
  div5.style.textAlign = 'center';

  var label1 = document.createElement("label");
  //label1.innerHTML = texto;
  label1.style.width = "100%";
  label1.style.whiteSpace = "pre-wrap";
  label1.style.textAlign = "center";

  var div6 = document.createElement("div");
  div6.className = "modal-footer";

  var btn2 = document.createElement("button");
  btn2.className = "btn btn-md btn-success btn-block fa fa-check";
  btn2.setAttribute("data-dismiss","modal");
  btn2.innerHTML = " OK";
  btn2.id = 'FechaModal';
  //btn2.setAttribute('onclick',funcao);
  var video1 = document.createElement('div');
  video1.innerHTML = '<video id="AlunoPerfil_MidiaVideo" width="90%" height="auto" controls><source src="' + video +'" type="video/mp4"><source src="movie.ogg" type="video/ogg">Your browser does not support the video tag.</video>';

  div6.appendChild(btn2);
  div3.appendChild(div6);
  div5.appendChild(video1);
  div5.appendChild(label1);
  div5.appendChild(btn2);

  div3.appendChild(div5);
  div4.appendChild(btn1);
  div3.appendChild(div4);
  div2.appendChild(div3);
  div1.appendChild(div2);
  DivTemp.appendChild(div1);

  document.getElementById("OpenModal").click(); 
}

