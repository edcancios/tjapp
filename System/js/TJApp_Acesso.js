
var $Senha_min_caracteres = 5;

//FUNÇÃO DE LOGIN
function Login(){
    var token = Math.floor(Math.random() * 1000);
    var objeto = new Object();
    objeto.Usuario = document.getElementById('FFusername').value;
    objeto.Senha = document.getElementById('FFpassword').value;
    
    var dados = AjaxPadrao($ServidorAPI + $API_Acesso,'Login', objeto);
    console.log(dados);

    if(dados[1]['Status'] == 'OK'){
        console.log('Acesso permitido. Bem-vindo!');
        //alert('Acesso permitido. Bem-vindo!');  
        var token = dados[2]['Token']; 

        window.location.href = "System/Menu.html?tkn=" + token + "&usuario=" + objeto.Usuario;
    }else{
        console.log('Erro no acesso!');
        alert('Erro no acesso!');
    }
}

//FUNÇÃO DE REGISTRO DE USUÁRIO
function Register(){

    var objeto = new Object();
    objeto.Email = (document.getElementById('input_criar_conta_email').value).toLowerCase();
    objeto.Senha = document.getElementById('input_criar_conta_senha').value;
    objeto.Nome = (document.getElementById("input_criar_conta_nome").value).toUpperCase();
    objeto.Cel =  document.getElementById("input_criar_conta_celular").value;
    objeto.Cod = Math.floor(Math.random() * 1000);

    console.log(objeto);
    if(objeto.Cel.length > 0){
        if(objeto.Email.length > 0){
            if(objeto.Nome.length > 0){
                if(objeto.Senha.length >= $Senha_min_caracteres){
                    if(objeto.Senha != null && objeto.Senha != ""){
                        var dados = AjaxPadrao($ServidorAPI + $API_Acesso,'Register', objeto);
                        console.log(dados);
                        if(dados[0]['IdPerfil'] > 0) {
                            console.log('Usuário criado com sucesso!');
                            //alert('Usuário criado com sucesso!');
                            var dados = AjaxPadraoAsync("./System/php_files/ValidacaoRegistro.php?Email=" + objeto.Email + "&Nome=" + objeto.Nome + "&Cod=" + objeto.Cod);
                            //window.location.href = "Index.html";
                            CriaModal('DashModal',"Usuário criado com sucesso!",'javascript:window.location.href="Index.html";');                             
                            
                        }else if (dados[0]['IdPerfil'] == 0){
                            console.log('Este usuário já existe no sistema. Por favor verifique!');
                            CriaModal('DashModal','Este usuário já existe no sistema. Por favor verifique!');
                        }else{
                            console.log('Erro desconhecido na criação do usuário!');
                            CriaModal('DashModal','Erro desconhecido na criação do usuário!');
                        }
                    }else{
                        console.log("A senha não deve ser em branco. Por favor verifique!");
                        CriaModal('DashModal',"A senha não deve ser em branco. Por favor verifique!");
                    }
                }else{
                    console.log("A senha deve ter ao menos " + $Senha_min_caracteres + " caracteres. Por favor verifique!");
                    CriaModal('DashModal',"A senha deve ter ao menos " + $Senha_min_caracteres + " caracteres. Por favor verifique!");
                }
            }else{
                console.log("O nome é obrigatório. Por favor verifique!");
                CriaModal('DashModal',"O nome é obrigatório. Por favor verifique!");
            }
        }else{
            console.log("O email é obrigatório. Por favor verifique!");
            CriaModal('DashModal',"O email é obrigatório. Por favor verifique!");
        }
    }else{
        console.log("O celular é obrigatório. Por favor verifique!");
        CriaModal('DashModal',"O celular é obrigatório. Por favor verifique!");
    }
}

// REINICIAR SENHA E ENVIAR PARA EMAIL CADASTRADO
function Reiniciar_Senha(){
    //Inicia();
    var objeto = new Object();
    objeto.CodSenha = Math.floor(Math.random() * 1000);
    objeto.Usuario = (document.getElementById("input_usuario_menu_Reiniciar_Senha").value).toLowerCase();
    var registro;

    var dados = AjaxPadrao("./System/php_files/RecuperaSenha.php?email=" +  objeto.Usuario + "&cod=" + objeto.CodSenha,'');
    console.log(dados);


    var dados = AjaxPadrao($ServidorAPI + $API_Acesso,'SolicitaSenha', objeto);
    //if(dados == "ok" || dados["Value"] == "Enviado"){
        CriaModal('DashModal',"O link para recuperaçao da senha, foi enviada para o email cadastrado!","");
        NavegacaoDisplay('menu_Reiniciar_Senha','menu_Login');
        console.log("senha reiniciada");
   /* }else if(dados == "FACEBOOK" || dados["Value"] == "FACEBOOK"){
        Termina('DashModal',"A senha deste usuário deve ser reiniciada através do site www.facebook.com");
        console.log("senha do facebook");
    }else{
        Termina('DashModal',"Erro:" + dados["Value"]);
        console.log("erro:" + dados);
    }*/
}

//FUNÇÃO ALTERAR SENHA
function UpdatePassword(){

    var objeto = new Object();
    objeto.SenhaNova =document.getElementById('InputPasswordNew').value;
    objeto.SenhaNovaConfirma = document.getElementById('InputPasswordNewConfirm').value;
    objeto.CodSenha = getUrlParameters("$p", "", true);
    
    console.log(objeto);

    if(objeto.SenhaNova.length >= $Senha_min_caracteres){
        if(objeto.SenhaNova == objeto.SenhaNovaConfirma){

            var dados = AjaxPadrao($ServidorAPI + $API_Acesso,'UpdatePassword', objeto);
            console.log(dados);
            if(dados[0]["OK"] == 'OK'){
                console.log('Senha alterada com sucesso!');
                CriaModal('DashModal','Senha alterada com sucesso!','');
                window.location.href = "Index.html";
            }else{
                console.log('Erro na alteração da senha!');
                CriaModal('DashModal','Erro na alteração da senha!','');
            }
        }else{

            console.log("As senhas não devem ser em branco e devem ser iguais. Por favor verifique!");
            CriaModal('DashModal',"As senhas não devem ser em branco e devem ser iguais. Por favor verifique!",'');
        }
    }else{
        console.log("As senhas devem ter ao menos " + $Senha_min_caracteres + " caracteres. Por favor verifique!");
        CriaModal('DashModal',"As senhas devem ter ao menos " + $Senha_min_caracteres + " caracteres. Por favor verifique!",'');
    }
}

/*
// SOLICITA LOGIN
function Solicita_Login(){
    Inicia();
    var login = new Object();
    login.Usuario = (document.getElementById("FFusername").value).toLowerCase();
    login.Senha = document.getElementById("FFpassword").value;

    if((login.Usuario).length>0 & (login.Senha).length>=6){
        var dados = AjaxPadrao($ServidorAPI,$API_Acesso,"Acesso/",login);
        console.log(dados);
        if(dados.MsgPers == "Ok"){
            window.location.href = "./System/Menu.html?token=" + dados[0] + "&user=" + login.Usuario + "&" + new Date().getTime();
        }
        else{  
            Termina("CriaModal('DashModal','Erro no login!! Tente novamente.');");
            ////console.log("erro no login");  
        }
    }
    else{
        Termina("CriaModal('DashModal','Informe seu usuário e senha!');");
        ////console.log("informe usuario/senha");  
    }
    return false;
}

// REGISTRO PROPRIO
function Registro_Proprio(){
    Inicia();
    Nome = (document.getElementById("input_criar_conta_nome").value).toUpperCase();
    Sexo = 3;
    DtNasc = '';
    Cel = document.getElementById("input_criar_conta_celular").value;
    Usuario = (document.getElementById("input_criar_conta_email").value).toLowerCase();
    ConfUsuario = (document.getElementById("input_criar_conta_email").value).toLowerCase();
    Senha = document.getElementById("input_criar_conta_senha").value;
    SenhaConfirm = document.getElementById("input_criar_conta_senha").value;
    CaminhoImagem = $Imagem3x4.name;
    TipoImagem = $Imagem3x4.type;
    Voucher = document.getElementById("input_criar_conta_voucher").value;
    checkbox = document.getElementById("profedfisica");
    
    if(checkbox.checked == true){
        ProfEdFisica =  1;
    }else{
        ProfEdFisica =  0;
    };

    if((Nome).length != 0 && (Senha).length != 0  && (Usuario).length != 0){
        if((Senha).length >= 6){
            if(SenhaConfirm === Senha){
                var dados = Criar_Usuario(Nome,Sexo,DtNasc,Cel,Usuario,Senha,CaminhoImagem,TipoImagem,"","","","",ProfEdFisica,Voucher);
                if(dados == "ok"){
                    Termina("CriaModal('DashModal','Usuário criado com sucesso! Verifique sua caixa de email para finalizar o registro!','window.location.reload();')");
                }
            }else{
                Termina("CriaModal('DashModal','As senhas digitadas não são iguais!');");
            }
        }else{
            Termina("CriaModal('DashModal','A senha deve conter ao meno 6 caracteres!');");
        }
    }else{
        Termina("CriaModal('DashModal','É necessário informar o NOME, um EMAIL válido e uma SENHA!');");
    }
}

// 8 - CRIAR USUÁRIO
function Criar_Usuario(Nome,Sexo,DtNasc,Cel,Usuario,Senha,CaminhoImagem,TipoImagem,Endereco,ObsSaude,ObsGerais,Resultado,Teste,Voucher){
    var registro = {};
    registro.Nome = Nome.toUpperCase();
    registro.Sexo = Sexo;
    registro.DtNasc = DtNasc;
    registro.TelCel = Cel;
    registro.Usuario = Usuario.toLowerCase();
    registro.ConfUsuario = Usuario.toLowerCase();
    registro.Senha = Senha;
    registro.SenhaConfirm = Senha;
    registro.CaminhoImagem = CaminhoImagem;
    registro.TipoImagem = TipoImagem;
    registro.Endereco = Endereco;
    registro.ObsSaude = ObsSaude;
    registro.ObsGerais = ObsGerais;
    registro.ProfEdFisica = Teste;
    registro.Voucher = Voucher;
    var retorno;
    var dados = AjaxPadrao($ServidorAPI,$API_Acesso,"Registro_proprio",registro); 
    //console.log(dados); 
    if(dados === null){    
        alert("Erro na comunicação!! Tente novamente.");
    }else if(dados === "FACEBOOK"){
        alert("Este email já está cadastrado!");
    }
    else if (dados == "ok"){
        retorno = dados;
    }
    return retorno;
}

//ALTERAR SENHA REINICIALIZADA
function Alterar_Senha(){
    var nova_senha = document.getElementById("input_nova_senha").value;
    var conf_nova_senha = document.getElementById("input_conf_nova_senha").value;
    var cod = getUrlParameters("$p","", true);

    if(nova_senha != null && nova_senha != undefined && nova_senha != ""){
        if(nova_senha == conf_nova_senha){
            var senha = {};
            senha.NovaSenha = nova_senha;
            //console.log(senha);
            $.ajax({
                type: "post",
                url: $ServidorAPI + $API_Acesso + "Altera_Senha_Reiniciada?cod=" + cod,
                data: senha,
                crossDomain: true,
                success: function(data){
                    //console.log(data);
                    if (data["Value"] == 0){
                        CriaModal('DashModal',"Houve um erro na reinicialização da senha. Tente novamente!");
                    }
                    else if (data["Value"] == 2){
                        CriaModal('DashModal',"Alteração realizada com sucesso!!!",'window.location.href = "Index.html";');                        
                    }
                    else if (data["Value"] == 1){
                        CriaModal('DashModal',"Houve um erro desconhecido. Por favor, refaça a operação!");
                    }
                    else if (data["Value"] == 4){
                        CriaModal('DashModal',"Houve um erro na reinicialização da senha. Tente novamente!");
                    }
                },
                error: function(){
                    CriaModal('DashModal',"Erro na conexão com o sistema !! Tente novamente.");
                }
            });
        }else{
            CriaModal('DashModal',"As senhas digitadas não são idênticas! Por favor verifique.");
        }

    }else{
        CriaModal('DashModal',"É necessário informar uma senha para alteração!");
    }
}
*/