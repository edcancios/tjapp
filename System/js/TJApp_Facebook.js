//FACEBOOK
function statusChangeCallback(response) {
  if (response.status === 'connected') {
    testAPI();
  } else {     
    location.reload();
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1537433956296254',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.12'
  });

  FB.AppEvents.logPageView();   

};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.12&appId=1537433956296254&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function testAPI() {
  FB.api('/me',{fields: 'name, email, picture'}, function(response) {
    Login_Facebook(response);
  });
}

// REGISTRAR USUÁRIO COM FACEBOOK
function Registro_Facebook(response){
  //Inicia();
  var Voucher = document.getElementById("input_criar_conta_voucher").value;
  var registro = {};
  registro.Nome = (response.name).toUpperCase();
  /*var sexo = response.gender;
  if (sexo == "male"){
    registro.Sexo = 2;
  }else{
    registro.Sexo = 1;
  }*/
  registro.Sexo = 3;
  registro.DtNasc = "";
  registro.Cel = "";
  registro.Usuario = (response.email).toLowerCase();
  registro.Senha = "";
  registro.IdFacebook = response.id;
  registro.CaminhoImagem = response.picture.data.url;
  registro.Voucher = Voucher;
  var dados = AjaxPadrao($ServidorAPI,$API_Acesso,"Registro_Facebook",registro);
  console.log(dados);
  if(dados.MsgPers == "Ok"){
    Termina('DashModal','Perfil do Facebook vinculado com sucesso! Realize o Login no sistema!','RedirecionaLogin()');    
  }else{
    Termina('DashModal',"Erro na comunicação!! Tente novamente.");
  }
}

// LOGIN COM FACEBOOK
function Login_Facebook(response){
  Inicia();
  setTimeout(function(){
    var registro = {};
    registro.Nome = (response.name).toUpperCase();
  /*  var sexo = response.gender;
  if (sexo == "male"){
    registro.Sexo = 2;
  }else{
    registro.Sexo = 1;
  }*/
  registro.Sexo = 3;
    registro.DtNasc = "";
    registro.Cel = "";
    registro.Usuario = (response.email).toLowerCase();
    registro.Senha = "";
    registro.IdFacebook = response.id;
    registro.CaminhoImagem = response.picture.data.url;
    var dados = AjaxPadrao($ServidorAPI,$API_Acesso,"Registro_Facebook",registro);
    if(dados.MsgPers == "Ok"){
      window.location.href = "./System/Menu.html?token=" + dados[0] + "&user=" + registro.Usuario + "&" + new Date().getTime();
    }else{
      Registro_Facebook(response);
      Termina('');
    }
  }, 500);    
}

//FUNÇÃO PARA REDIRECIONAR AO LOGIN
function RedirecionaLogin(){
  window.location.href = 'Index.html';
}
