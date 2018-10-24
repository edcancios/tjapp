var $ServidorAPI = "http://localhost/TJApp/System/";
var $API_Acesso = "API/index.php/";

var indice_A = [
    {periodo: "01/2018", indice: 67.556931},
    {periodo: "02/2018", indice: 67.712311},
    {periodo: "03/2018", indice: 67.834193},
    {periodo: "04/2018", indice: 67.881676},
    {periodo: "05/2018", indice: 68.024227},
    {periodo: "06/2018", indice: 68.316731},
    {periodo: "07/2018", indice: 69.293660},
    {periodo: "08/2018", indice: 69.466894},
    {periodo: "09/2018", indice: 69.466894},
    {periodo: "10/2018", indice: 1.000000}

    ];

var $planilhaSel = new Object();



var $IdUser = 0;
var $IdProc = 0;


//var $Servidor="http://fastfeedback.com.br/";
//var $API_Acesso = "api/values/";
//var $API_Dados = "api/values/";
//var $ImagemPadrao = $Servidor + "FFSYSTEMONE/images/semfoto.jpg";
var $Imagem3x4 = new Object();
$Imagem3x4.name = "semfoto.jpg";
$Imagem3x4.type = "image/jpeg";

//status de alteração de foto
$StatusFoto3x4 = 0;


//FUNÇÃO DO AJAX - ASSINCRONA FALSE
function AjaxPadrao(servidorAPI,Classe,objeto){
  //console.log("função AjaxPadrão()");
  var resposta;
  $.ajax({
    type: "post",
    url: servidorAPI + Classe,
    data: objeto,
    crossDomain: true,
    async: false,
    success: function(data){
      data.MsgPers = "Ok";
      resposta = data;      
    },
    error: function(error){
      error.MsgPers = "Erro na execução AJAX";
      resposta = error;
    } 
  });
  return resposta;
}

//FUNÇÃO DO AJAX - ASSINCRONA FALSE
function AjaxPadraoAsync(servidorAPI,Classe,objeto){
  //console.log("função AjaxPadrão()");
  var resposta;
  $.ajax({
    type: "post",
    url: servidorAPI + Classe,
    data: objeto,
    crossDomain: true,
    async: true,
    success: function(data){
      data.MsgPers = "Ok";
      resposta = data;      
    },
    error: function(error){
      error.MsgPers = "Erro na execução AJAX";
      resposta = error;
    } 
  });
  return resposta;
}

//EXIBIR FOTO E NOME DE ARQUIVO SELECIONADO
function readURL(input,img) {
  var arquivo = document.getElementById(input);
  var preview = document.getElementById(img);
  var reader = new FileReader();
  reader.onload = function (e) {
    preview.src = e.target.result;
    $BlobFoto = e.target.result;
  };
  reader.readAsDataURL(arquivo.files[0]);
  $Imagem3x4 = arquivo.files[0];
} 

//OBTER HEIGHT DE DOCUMENT EM IFRAME
function calcHeight(){
  var the_height = document.getElementById('dashboard_destiny');
  //console.log(the_height.src);
  if(the_height.src != ""){
   var heightChildren =  document.getElementById('dashboard_destiny').contentWindow.documentElement.scrollHeight;
   document.getElementById('dashboard_destiny').style.height = the_height + "px";
 }
}

//FUNÇÃO PARA VERIFICAR TAMANHO DA TELA
function MobileDesktop(){
  if(window.innerWidth < 768){
    var x = document.getElementsByClassName("botaoVolta");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("fa-arrow-left");
      x[i].classList.add("fa-arrow-up");
    }
    var x = document.getElementsByClassName("botaoAvanca");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("fa-arrow-right");
      x[i].classList.add("fa-arrow-down");
    }

  }else{
    var x = document.getElementsByClassName("botaoVolta");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.add("fa-arrow-left");
      x[i].classList.remove("fa-arrow-up");
    }
    var x = document.getElementsByClassName("botaoAvanca");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.add("fa-arrow-right");
      x[i].classList.remove("fa-arrow-down");
    }

  }
}

function Inicia(){
  CriaModalLoading('DashModal',"Informações atualizadas com sucesso! Serão carregadas no próximo acesso.");
}

function Termina(funcao_saida){
  //console.log(funcao_saida);
  FinalizaLoading("Informações atualizadas com sucesso! Serão carregadas no próximo acesso.", funcao_saida);
  setTimeout(function(){    
    document.getElementById('BtnCloseModal').click();
  }, 500);    
}

//FUNÇÃO PARA REDIRECIONAR AO LOGIN
function RedirecionaLogin(){
  ContFunc('FF_Register/RedirecionaLogin');
  window.location.href = 'Index.html';
}

//FUNÇÃO PARA NAVEGAÇÃO VIA DISPLAY BLOCK/NONE
function NavegacaoDisplay(origem,destino){
  document.getElementById(origem).style.display = 'none';
  document.getElementById(destino).style.display = 'block';
  
 /* if(document.getElementById(origem).style.display == "block"){
    document.getElementById(origem).style.display = 'none';
    document.getElementById(destino).style.display = 'block';
  }else if (document.getElementById(origem).style.display == "none"){
    document.getElementById(origem).style.display = 'block';
    document.getElementById(destino).style.display = 'none';
  }*/
    
    
}

//OBTER PARAMETROS DE URL
function getUrlParameters(parameter, staticURL, decode){
  var currLocation = (staticURL.length)? staticURL : window.location.search,
  parArr = currLocation.split("?")[1].split("&"),
  returnBool = true;

  for(var i = 0; i < parArr.length; i++){
    parr = parArr[i].split("=");
    if(parr[0] == parameter){
      return (decode) ? decodeURIComponent(parr[1]) : parr[1];
      returnBool = true;
    }else{
      returnBool = false;            
    }
  }

  if(!returnBool) return false;  
}

//CARREGA INFORMAÇOES DO TOKEN
function CarregaInf(){

  var cod = getUrlParameters("tkn", "", true);
  var usuario = getUrlParameters("usuario", "", true);
  CriaModal('DashModal','Bem vindo(a)!!! ' + usuario);
  Lista_Perfil(usuario);
}


// CARREGAR LISTA DE PERFIS 
function Lista_Perfil(user){
  if( user !== 'null' && user !== null && user !== undefined){
    var perfis = document.getElementById("select_Perfil");
    var itens = perfis.getElementsByTagName('li');                

    for (i = 0; i <= itens.length; i++ ){
      perfis.removeChild(perfis.childNodes[0]);
    };

    var objeto = new Object();
    objeto.Usuario = user;

    var dados = AjaxPadrao("./" + $API_Acesso,'Perfis', objeto);
    console.log(dados);
    if(dados.length > 0){
      var id,value, tp_perfil, logo_inst, desc_inst;
      for (i=0;i < dados.length; i++) {
        localStorage.setItem(dados[i]["IdPerfil"],dados[i]["Dashboard"]);
        localStorage.setItem('IdInst',dados[i]["IdInst"]);

        id = dados[i]["IdPerfil"];
        value = dados[i]["IdInst"];
        tp_perfil =  dados[i]["DescTpPerfil"];   
        logo_inst = './Uploads/Midia/Logotipos/' + dados[i]["LogoInst"];
        desc_inst = dados[i]["DescInst"];
        var opt = document.createElement('li');
        opt.id = id;
        opt.value = value;
        opt.className = "list-group-item";
        opt.style.border = "1px solid black";
        opt.setAttribute('onclick',"Seleciona_Perfil(id,value,'" + dados[i]["Dashboard"] + "')");

        var div1 = document.createElement("div");
        div1.style.cssFloat = "left";

        var img1 = document.createElement("img");
        img1.src = logo_inst;
        img1.style.maxHeight = "100px";
        img1.style.maxWidth = "80px";

        var button = document.createElement('button');
        button.className = "btn btn-block";
        button.style.backgroundColor = "white";

        var div2 = document.createElement("div");

        var p1 = document.createElement("p");
        p1.style.fontWeight = "bold";
        p1.innerHTML = desc_inst;

        var p2 = document.createElement("p");
        p2.innerHTML = tp_perfil;
        div2.appendChild(p1);
        div2.appendChild(p2);
        div1.appendChild(img1);
        button.appendChild(div1);
        button.appendChild(div2);
        opt.appendChild(button);

        perfis.appendChild(opt);
        document.getElementById('menu_Perfil').style.display = 'block';
      }
    }else{
      alert("Erro no carregamento! Por favor realize novamente o login.");
    }
  }
  //Termina();
}


//FUNÇÃO PADRÃO PARA EXIBIR E SUPRIMIR OBJETOS
function ExibirSuprimir(object){
  var objeto = document.getElementById(object); 
  
  if(objeto.style.display == "none"){
    objeto.style.display = "block";
  }else if (objeto.style.display == "block"){
    objeto.style.display = "none";
  }
}

//FUNÇÃO PARA LIMPAR INPUTS DE FORMULÁRIO
function LimparInput(objetoPai,classe){
  var ObjetoPai = document.getElementById(objetoPai);
  var elementos = ObjetoPai.getElementsByClassName(classe);
  for(i=0; i < elementos.length; i++){
    elementos[i].value = "";
  }
}

//MASCARA CEP / TELEFONE / CELULAR
function mascara(t, mask){
  var i = t.value.length;
  var saida = mask.substring(1,0);
  var texto = mask.substring(i)
  if (texto.substring(0,1) != saida){
    t.value += texto.substring(0,1);
  }
}

//FILTRO - PERMITE APENAS NÚMEROS
function Numeros(){
  evt = window.event;
  var tecla = evt.keyCode;

  if(tecla > 47 && tecla < 58){ 

  }else{
    console.log('Pressione apenas teclas numéricas');
    evt.preventDefault();
  }
}

//FILTRAR LISTA POR INPUT
function Filtrar(input,object){
  var string = document.getElementById(input).value;
  var div = document.getElementById(object);
  var x = div.getElementsByTagName("li");
  var contador = 0;
  for(var j=0; j<x.length;j++){
    document.getElementById(x[j].id).style.display = "none";
    var y = x[j].getElementsByTagName("p");
    var texto = y[0].innerHTML.toLowerCase();
    if(texto.match(string.toLowerCase())){
      document.getElementById(x[j].id).style.display = "block";
      contador = contador + 1;
    }
  }
  if (document.getElementById("menu_Aluno_Disp_counter") != null){

    document.getElementById("menu_Aluno_Disp_counter").innerHTML = "(" + contador + ")";

  }
}

// MENSAGEM DO FINAL DO MODAL PROGRESS BAR
function FinalizaUpload(texto,funcao){
  var label1 = document.createElement("label");
  label1.innerHTML = texto;
  label1.style.width = "100%";
  label1.style.whiteSpace = "pre-wrap";
  label1.style.textAlign = "center";

  var btn2 = document.createElement("button");
  btn2.id = "BtnCloseModal";
  btn2.className = "btn btn-md btn-success fa fa-check";
  btn2.setAttribute("data-dismiss","modal");
  btn2.innerHTML = " OK";
  btn2.setAttribute('onclick',funcao);

  var div5 = document.getElementById('DivProgressBar');
  div5.appendChild(label1);
  div5.appendChild(btn2);
}


/*NOVA FUNÇÕES*/

function atualizaInf(){
    var objeto = new Object();
    
    objeto.Nome = document.getElementById('inputNome').value;
    objeto.TpIdent = document.getElementById('selectIdent').value;
    objeto.Ident = document.getElementById('inputIdent').value;
    objeto.IdUser = $IdUser;
    
    console.log(objeto);

}

function listaProc(){
    $('#listaProc').html('');
    var objeto = new Object();
    objeto.IdUser = $IdUser;
    var retorno = AjaxPadrao($ServidorAPI + $API_Acesso,'listaProc', objeto);
    
    for(i=0;i<retorno.length;i++){
        $('#listaProc').append( "<li id='"+ retorno[i]['id_processos'] +"' style='display: block; height: 100%' class='form-control processos' onclick='selecionaProc(id)'><button class='btn btn-block btn-default'>                    <span>"+ retorno[i]['Cliente'] +"</span><br><span>"+ retorno[i]['Origem'] + "</span></span><br><span>"+ retorno[i]['NumProc'] + "</span></button></li>");
    }

    console.log(retorno);
}

function insereProc(){
    var objeto = new Object();
    
    objeto.NumProc = (document.getElementById('inputProc').value).toUpperCase();
    objeto.Origem = (document.getElementById('inputOrigem').value).toUpperCase();
    objeto.Cliente = (document.getElementById('inputCliente').value).toUpperCase();
    objeto.IdUser = $IdUser;
    
    var retorno = AjaxPadrao($ServidorAPI + $API_Acesso,'insereProc', objeto);

    console.log(retorno);
    $('#listaProc').prepend( "<li id='"+ retorno['IdProc'] +"' style='display: block; height: 100%' class='form-control' onclick='selecionaProc(id)'><button class='btn btn-block btn-warning'><span>"+ objeto.Cliente +"</span><br><span>"+ objeto.Origem + "</span></span><br><span>"+ objeto.NumProc + "</span></button></li>");
    cancelaProc();
  
  var thisPromiseCount = 0;
  
  var p1 = new Promise(
    function(resolve, reject) {
      console.log("executou promise");
      //resolve(thisPromiseCount);  
      //reject(thisPromiseCount);
      
      var objeto = new Object();
    objeto.IdUser = $IdUser;
    resolve(AjaxPadrao($ServidorAPI + $API_Acesso,'listaProc', objeto);
    });
  
   p1.then(
    function(val) {
     console.log("resolveu promise");
    });
  
  p1.catch(
    function(val) {
     console.log("rejeitou promise");
    });
  
  
  
}

function selecionaProc(id){
    var objeto = new Object();
    objeto.IdProc = id;
    var retorno = AjaxPadrao($ServidorAPI + $API_Acesso,'consultaProc', objeto);
    
    $('#ProcIndCliente').html(retorno.Cliente);
    $('#ProcIndOrigem').html(retorno.Origem);
    $('#ProcInd').html(retorno.NumProc);
    
    $('#ProcIndCalcNovoCliente').html(retorno.Cliente);
    $('#ProcIndCalcNovoOrigem').html(retorno.Origem);
    $('#ProcIndCalcNovoNum').html(retorno.NumProc);  
    
    $IdProc = objeto.IdProc;
    console.log(retorno);
    
    NavegacaoDisplay('infProc','infProcInd');
    listaCalculo();

}

function cancelaProc(){
    document.getElementById('inputProc').value = "";
    document.getElementById('inputOrigem').value = "";
    NavegacaoDisplay('infProcNovo','btnProcNovo');

}

function insereCalc(){
    var objeto = new Object();
    
    objeto.NumProc = document.getElementById('inputProc').value;
    objeto.Origem = document.getElementById('inputOrigem').value;
    objeto.IdUser = $IdUser;    
    console.log(objeto);
    
    $('#listaProc').append( "<li style='display: block; height: 100%' class='form-control' onclick='NavegacaoDisplay(" + '"infProc","infProcInd"' + ")'" + "><button class='btn btn-block btn-default'>                    <span>"+ objeto.NumProc +"</span><br><span>"+ objeto.Origem + "</span></button></li>");
    cancelaProc();
}

function cancelaCalc(){
    document.getElementById('inputProc').value = "";
    document.getElementById('inputOrigem').value = "";
    NavegacaoDisplay('infProcNovo','btnProcNovo');

}

function dataAtual(object){
    var d = new Date();
    var dia = d.getDate();
    if(dia < 10){dia = '0' + dia;}
    var mes = (d.getMonth() + 1);
    if(mes < 10){mes = '0' + mes;}
    var data_atual = d.getFullYear() + '-' + mes + '-'+ dia ;
    document.getElementById(object).value = data_atual;
}

function calculaParc(){
        
    var objeto = new Object();
    
    var dataInicio = document.getElementById('inputProcIndCalcNovoDtIni').value;
    var arrdataInicio = dataInicio.split('-');
    var stringdataInicio = arrdataInicio[1] + '-' + arrdataInicio[2] + '-' +   arrdataInicio[0];
    dataInicio = new Date(stringdataInicio);
    objeto.data_ini = dataInicio;
    
    var dataFim = document.getElementById('inputProcIndCalcNovoDtFim').value;
    arrdataFim = dataFim.split('-');
    stringdataFim = arrdataFim[1] + '-' + arrdataFim[2] + '-' +   arrdataFim[0];
    dataFim = new Date(stringdataFim);
    objeto.data_fim = dataFim;
    
    var dataAtual= document.getElementById('inputProcIndCalcNovoDtAtua').value;
    arrdataAtual = dataAtual.split('-');
    stringdataAtual = arrdataAtual[1] + '-' + arrdataAtual[2] + '-' +   arrdataAtual[0];
    dataAtual = new Date(stringdataAtual);
    var diaAtual = dataAtual.getDate();
    if(diaAtual < 10){diaAtual = '0' + diaAtual;}
    var mesAtual = (dataAtual.getMonth() + 1);
    if(mesAtual < 10){mesAtual = '0' + mesAtual;}
    var dataAtualFormatada = diaAtual + "/" + mesAtual + "/" + dataAtual.getFullYear();
    
    var total = (objeto.data_fim.getFullYear() - objeto.data_ini.getFullYear())*12 + (objeto.data_fim.getMonth() - objeto.data_ini.getMonth());

    objeto.NumParc = total;
    
    var parcelas = [];
    
    var qtd_parcela = 0;
    
    var mes_ini = objeto.data_ini.getMonth() + 1;
    var mes_fim = objeto.data_fim.getMonth() + 1;

    
    for(i= objeto.data_ini; i <= objeto.data_fim; i.setMonth(i.getMonth() + 1)){
        var dia = i.getDate();
        if(dia < 10){dia = '0' + dia;}
        
        var mes = (i.getMonth() + 1);
        if(mes < 10){mes = '0' + mes;}
        
        var data_parcela = dia + "/" + mes + "/" + i.getFullYear();
        
        qtd_parcela = qtd_parcela + 1;
        
        var parcela = new Object();            
            parcela.DtParc = data_parcela;
            parcela.DtParcInd = retornaIndiceTab1(mes + "/" + i.getFullYear());
            parcela.Id = qtd_parcela;
            parcela.VlrOrig = 0;
            parcela.Multa = 0;    
            parcela.Juros = 0;
            parcela.JurosMorat = 0;
            parcela.VlrPagar = 0;        
            parcela.VlrCorrig = 0;
        
        parcelas.push(parcela);
        

    }
    
    var planilha = new Object();
    planilha.Calculo = parcelas;
    planilha.IdProc = $IdProc;
    planilha.NumProc = document.getElementById('ProcIndCalcNovoNum').innerHTML;
    planilha.Origem = (document.getElementById('ProcIndCalcNovoOrigem').innerHTML).toUpperCase();
    planilha.Objeto = (document.getElementById('inputProcIndCalcNovoObj').value).toUpperCase();
    planilha.DtAtual = dataAtualFormatada;
    planilha.DtAtualInd = retornaIndiceTab1(mesAtual + "/" + dataAtual.getFullYear());  
    planilha.Honorarios = document.getElementById('inputProcIndCalcNovoHon').value;
    planilha.Multa = document.getElementById('inputProcIndCalcNovoMulta').value;
    planilha.JurosMoratTp = document.getElementById('inputProcIndCalcNovoJurosMor').value;
    planilha.JurosMoraPerc = parseFloat(document.getElementById('inputProcIndCalcNovoJurosMorSimp').value);
    planilha.JurosTp = document.getElementById('inputProcIndCalcNovoJuros').value;
    planilha.JurosDtFixa = document.getElementById('inputProcIndCalcNovoJurosDtFixa').value;  
    var radios = document.getElementsByName('tabela');
    for (var i = 0, length = radios.length; i < length; i++){
        if (radios[i].checked){
            planilha.Tabela =radios[i].value;
            break;
        }
    };
    planilha.Obs = document.getElementById('textProcIndCalcNovoObs').value;
    planilha.DtIniParc = document.getElementById('inputProcIndCalcNovoDtIni').value;
    planilha.DtFimParc = document.getElementById('inputProcIndCalcNovoDtFim').value;
    
    
    
    planilha.DtCriacao = Date.now();
    insereParc(planilha);
    $planilhaSel = planilha;
  console.log($planilhaSel);
}

function retornaIndiceTab1(MesAno){  
    var ind_A = 0;
    var retorno = '1,000000';
    while (ind_A < indice_A.length) {
        if(indice_A[ind_A]['periodo'] == MesAno) {
            retorno  = indice_A[ind_A]['indice'];
            ind_A = indice_A.length;
        }else{
            ind_A++;    
        }  
        
    }
    return retorno;
}

function atualizaIndice(){
    var data = document.getElementById('inputProcIndCalcNovoDtAtua').value;
    var arrdata = data.split('-');
    var stringdata = arrdata[1] + '-' + arrdata[2] + '-' +   arrdata[0];
    data = new Date(stringdata);
    var dia = data.getDate();
    if(dia < 10){dia = '0' + dia;}
    var mes = (data.getMonth() + 1);
    if(mes < 10){mes = '0' + mes;}
    dataFormatada = mes + "/" + data.getFullYear();
    
    document.getElementById('ProcIndDtAtuaIndice').innerHTML = retornaIndiceTab1(dataFormatada);
}

function insereParc(objeto){
    for(i=0; i < objeto.Calculo.length; i++){
        //console.log(objeto.Calculo[i]);
        $("<li id='Parc_"+ objeto.Calculo[i].Id+"' style='display: block; height: 100%;text-align: left' class='form-control parcela'><h4>PARCELA: "+ objeto.Calculo[i].Id+"/"+ objeto.Calculo.length+"</h4><span>DATA: </span><label>"+ objeto.Calculo[i].DtParc+"</label><br><span>VALOR DA PARCELA:</span><input id='VPParc_"+objeto.Calculo[i].Id+"' type='number' class='form-control' style='width: 40%' placeholder='R$ 0,00' onchange='atualizaValores("+'"'+objeto.Calculo[i].Id+'"'+")'><button class='btn btn-success btn-xs fa fa-plus' onclick='ExibirSuprimir("+'"Parc_'+objeto.Calculo[i].Id +'Det"'+")' style='float: right;font-size: 10px'></button><br><div id='Parc_"+ objeto.Calculo[i].Id+"Det' style='text-align: left;display: none;width: 100%'><span>ÍNDICE DA DATA DA PARCELA: </span><label id='DtParcInd_"+objeto.Calculo[i].Id+"'>"+ objeto.Calculo[i].DtParcInd+"</label><br><span>VALOR CORRIGIDO: </span><label id='VCCorr_"+objeto.Calculo[i].Id+"'>"+ objeto.Calculo[i].VlrCorrig+"</label><br><span>MULTA CONTRATUAL: </span><label id='MultCont_"+objeto.Calculo[i].Id+"'> "+ objeto.Calculo[i].Multa+"%</label><br><span>JUROS MORATÓRIA: </span><label id='JurosMorat_"+objeto.Calculo[i].Id+"'></label><br><span>DATA DA ATUALIZAÇÃO: </span><label>"+ objeto.DtAtual+"</label><br><span>ÍNDICE DA DATA DE ATUALIZAÇÃO: </span><label id='DtAtualInd_"+objeto.Calculo[i].Id+"'>"+ objeto.DtAtualInd+"</label><br></div><hr><span >A PAGAR: </span><h5 id='TotalParc_"+objeto.Calculo[i].Id+"' style='color: darkred; text-align: right'>"+ objeto.Calculo[i].VlrPagar+"</h5></li>").insertBefore('#liTotais'); 
    }
    $('#infProcIndCalcNovo').css('display','none');
    $('#infProcIndTab').css('display','block');
    $('#btnSaveCalc').css('display','block');
    $('#btnLimparCalc').css('display','block');    
}

function limparCalculo(){
    console.log($planilhaSel);
    $('.parcela').remove();
    $('#TotalCorMulJur').html('R$ 0,00');
    $('#TotalCorMul').html('R$ 0,00');
    $('#TotalJur').html('R$ 0,00');
    $('#TotalMulMorHon').html('R$ 0,00');
    $('#TotalMulMor').html('R$ 0,00');
    $('#TotalHon').html('R$ 0,00');
    $('#TotalPagar').html('R$ 0,00');
    $planilhaSel = "";
    $('#infProcIndCalcNovo').css('display','block');
    $('#infProcIndTab').css('display','none');
    $('#btnSaveCalc').css('display','none');
    $('#btnLimparCalc').css('display','none');

    console.log($planilhaSel);

}

function salvarCalculo(){

    var objeto = new Object();    
    objeto.IdProc = $IdProc;
    objeto.Calculo = JSON.stringify($planilhaSel);
    
    var retorno = AjaxPadrao($ServidorAPI + $API_Acesso,'insereCalc', objeto);
    //console.log(objeto);
    //var novo_objeto = JSON.parse(retorno.Calculo);
    //console.log(novo_objeto);


}

function listaCalculo(){
  var objeto = new Object();    
  objeto.IdProc = $IdProc;
  
  var retorno = AjaxPadrao($ServidorAPI + $API_Acesso,'listaCalc', objeto);
  $('#listaProcIndTab').html('');
  console.log(retorno);
  
  for(i=0; i<retorno.length;i++){
    var Calculo = JSON.parse(retorno[i]['Calculo']);
       
    $('#listaProcIndTab').append( "<li id='"+ retorno[i]['IdCalc'] +"' style='display: block; height: 100%' class='form-control' onclick=''><button class='btn btn-block btn-default'><span>OBJETO: "+ Calculo.Objeto +"</span><br><span>DATA DE ATUALIZAÇAO: "+ Calculo.DtAtual + "</span></span><br><span>PARCELAS DE "+ Calculo.DtIniParc + " A " + Calculo.DtFimParc + "</span></button></li>");


    console.log(Calculo);
    
    /*
    IdCalc
    Objeto
    DtAtual
    DtIniParc
    DtFimParc
    DtCriacao
    */
  }

  
}

function atualizaValores(id){
    var valorParc = parseFloat(document.getElementById('VPParc_' + id).value);
    var totais = new Object();
    totais.TotalCorMul = 0;
    totais.TotalJur = 0;
    totais.TotalMulMor = 0;
    totais.TotalHon = 0;
    totais.TotalPagar = 0;
    
    for(i=0; i < $planilhaSel.Calculo.length; i++){
        if(id == $planilhaSel.Calculo[i].Id){
            $planilhaSel.Calculo[i].VlrOrig = parseFloat(valorParc);            
          
            var dataAtual= $planilhaSel.Calculo[i].DtParc;
            arrdataAtual = dataAtual.split('/');
            stringdataAtual = arrdataAtual[1] + '-' + arrdataAtual[0] + '-' +   arrdataAtual[2];
            var dataInicio = new Date(stringdataAtual);

            var dataAtual= $planilhaSel.DtAtual;
            arrdataAtual = dataAtual.split('/');
            stringdataAtual = arrdataAtual[1] + '-' + arrdataAtual[0] + '-' +   arrdataAtual[2];
            var dataFim = new Date(stringdataAtual);

            var diffMilissegundos = dataFim - dataInicio;
            var diffSegundos = diffMilissegundos / 1000;
            var diffMinutos = diffSegundos / 60;
            var diffHoras = diffMinutos / 60;
            var diffDias = diffHoras / 24;

            var diasAtraso = parseInt(diffDias);
            
            $planilhaSel.Calculo[i].JurosMorat = parseFloat(($planilhaSel.Calculo[i].VlrOrig * [1 + ($planilhaSel.JurosMoraPerc/100)*(diasAtraso/360)])-$planilhaSel.Calculo[i].VlrOrig);
            
            $planilhaSel.Calculo[i].VlrCorrig = parseFloat((( $planilhaSel.Calculo[i].VlrOrig * $planilhaSel.DtAtualInd)/$planilhaSel.Calculo[i].DtParcInd).toFixed(2));
            
            $planilhaSel.Calculo[i].Multa = (($planilhaSel.Calculo[i].VlrCorrig / 100)*$planilhaSel.Multa);
            
            $planilhaSel.Calculo[i].VlrPagar = parseFloat($planilhaSel.Calculo[i].VlrOrig) + parseFloat($planilhaSel.Calculo[i].VlrCorrig) + parseFloat($planilhaSel.Calculo[i].Multa) + parseFloat($planilhaSel.Calculo[i].JurosMorat); 
            
            var valorCorr = document.getElementById('VCCorr_' + id);
            valorCorr.innerHTML ="R$ " + ($planilhaSel.Calculo[i].VlrCorrig).toFixed(2);
            
            var valorMulta = document.getElementById('MultCont_' + id);
            valorMulta.innerHTML ="R$ " + ($planilhaSel.Calculo[i].Multa).toFixed(2);
            
            var valorJurosMorat = document.getElementById('JurosMorat_' + id);
            valorJurosMorat.innerHTML ="R$ " + (parseFloat($planilhaSel.Calculo[i].JurosMorat)).toFixed(2);

            var valorPagar = document.getElementById('TotalParc_' + id);
            valorPagar.innerHTML ="R$ " + (parseFloat($planilhaSel.Calculo[i].VlrPagar)).toFixed(2);
        }
        
        totais.TotalCorMul = totais.TotalCorMul + $planilhaSel.Calculo[i].VlrOrig + $planilhaSel.Calculo[i].VlrCorrig + $planilhaSel.Calculo[i].Multa;
        totais.TotalJur = totais.TotalJur;
        totais.TotalMulMor = totais.TotalMulMor + $planilhaSel.Calculo[i].JurosMorat;
        
        totais.TotalPagar = totais.TotalPagar + $planilhaSel.Calculo[i].VlrPagar;
        totais.TotalHon = ($planilhaSel.Honorarios / 100) * totais.TotalPagar;
    }  
    console.log($planilhaSel);
    console.log(totais);
    $('#TotalCorMulJur').html('R$ ' + (totais.TotalCorMul + totais.TotalJur).toFixed(2));
    $('#TotalCorMul').html('R$ ' + (totais.TotalCorMul).toFixed(2));
    $('#TotalJur').html('R$ ' + (totais.TotalJur).toFixed(2));
    $('#TotalMulMorHon').html('R$ ' + (parseFloat(totais.TotalMulMor) + parseFloat(totais.TotalHon)).toFixed(2));
    $('#TotalMulMor').html('R$ ' + (totais.TotalMulMor).toFixed(2));
    $('#TotalHon').html('R$ ' + parseFloat(totais.TotalHon).toFixed(2));
    $('#TotalPagar').html('R$ ' + (parseFloat(totais.TotalPagar) + parseFloat(totais.TotalHon)).toFixed(2));



}
