<?php
header("Access-Control-Allow-Origin: *");
require '../vendor/autoload.php';
include 'settings.php';
include 'functions.php'; 
ini_set('default_charset', 'UTF-8');


$app = new \Slim\Slim();
$app->contentType('application/json');
$app->error(function (\Exception $e) use ($app) {
    echo json_encode(func_error());
});
$app->notFound(function () use ($app) {
   echo json_encode(func_error());
});

//URI DE LOGIN
$app->post('/Login', function () use ($app)  {
    $param_input = $_POST;
    $usuario = $param_input["Usuario"];
    $senha =  $param_input["Senha"]; 

    $resposta = VerificaLogin($usuario,$senha);
    echo json_encode($resposta);
});

//FUNÇÃO PARA VERIFICAR AS INFORMAÇÕES DE LOGIN
function VerificaLogin($user,$password){
    $db = getConnection();
    $result = $db->query( 'SELECT count(username) as total FROM tb_users WHERE username = "'.$user.'"' );
    while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
        $data[] = $row;  
        if($data[0]["total"] == 1){
            $result = $db->query('CALL SP_LOGIN("'.$user.'")');
            while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
                $data[] = $row;
                if(password_verify($password, $data[1]['password']) == true){
                    $data[1]['Status'] = 'OK';                    
                    $date = time();
                    $dateExp = $date + (24 * 60 * 60);
                    $result = $db->query('CALL SP_CRIAR_TOKEN_ACESSO('.$data[1]['id_user'].',"'.$date.'",'.rand(1, 1000).',"'.$dateExp.'")');
                    $row = $result->fetch(PDO::FETCH_ASSOC);
                    $data[] = $row;

                }else{
                    $data = "erro senha";
                };
            };
        }else{
            $data = "erro usuario";
        };      
    };
    return $data;
}


//URI DE CRIAÇÃO DE USUÁRIO
$app->post('/Register', function () use ($app)  {
    $param_input = $_POST;
    $resposta = RegistraUsuario($param_input);
    echo json_encode($resposta);
});

//FUNÇÃO PARA CRIAÇÃO DE USUÁRIO
function RegistraUsuario($objeto){
    $senha = password_hash($objeto['Senha'], PASSWORD_DEFAULT);
    $db = getConnection();
    $result = $db->query( 'CALL SP_CRIAR_USUARIO_APP("'.$objeto['Nome'].'","'.$objeto['Cel'].'","'.$objeto['Email'].'","'.$senha.'",'.$objeto['Cod'].')');
    while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
        $data[] = $row;      
    };
    return $data;
}

//URI DE ALTERAÇÃO DE SENHA
$app->post('/UpdatePassword', function () use ($app)  {
    $param_input = $_POST;
    $resposta = AlteraSenha($param_input);
    echo json_encode($resposta);
});

//FUNÇÃO PARA ALTERAÇÃO DE SENHA
function AlteraSenha($objeto){
    $db = getConnection();
    $senha = password_hash($objeto["SenhaNova"], PASSWORD_DEFAULT);
    $result = $db->query( 'CALL SP_ATUALIZA_SENHA("'.$senha.'",'.$objeto["CodSenha"].')');
    while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
        $data[] = $row;      
    };
    return $data;
}

//URI DE ALTERAÇÃO DE SENHA
$app->post('/SolicitaSenha', function () use ($app)  {
    $param_input = $_POST;
    $resposta = SolicitaSenha($param_input);
    echo json_encode($resposta);
});

//FUNÇÃO PARA ALTERAÇÃO DE SENHA
function SolicitaSenha($objeto){
    $db = getConnection();
    $result = $db->query( 'CALL SP_SOLICITA_SENHA("'.$objeto["Usuario"].'",'.$objeto["CodSenha"].')');
    while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
        $data[] = $row;      
    };
    return $data;
}

//URI DE CRIAÇÃO DE PROCESSO
$app->post('/insereProc', function () use ($app)  {
    $param_input = $_POST;
    $resposta = insereProc($param_input);
    echo json_encode($resposta);
});

//FUNÇÃO PARA CRIAÇÃO DE PROCESSO
function insereProc($objeto){
    $db = getConnection();
    $result = $db->query( 'CALL SP_INSERE_PROCESSO("'.$objeto['IdUser'].'","'.$objeto['Cliente'].'","'.$objeto['Origem'].'","'.$objeto['NumProc'].'")');
    while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
        $data = $row;      
    };
    return $data;
}

//URI DE CRIAÇÃO DE PROCESSO
$app->post('/consultaProc', function () use ($app)  {
    $param_input = $_POST;
    $resposta = consultaProc($param_input);
    echo json_encode($resposta);
});

//FUNÇÃO PARA CRIAÇÃO DE PROCESSO
function consultaProc($objeto){
    $db = getConnection();
    $result = $db->query( 'CALL SP_CONSULTA_PROCESSO("'.$objeto['IdProc'].'")');
    while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
        $data = $row;      
    };
    return $data;
}


$app->post('/listaProc', function () use ($app)  {
    $param_input = $_POST;
    $resposta = listaProc($param_input);
    echo json_encode($resposta);
});


function listaProc($objeto){
    $db = getConnection();
    $result = $db->query( 'CALL SP_LISTA_PROCESSO("'.$objeto['IdUser'].'")');
    while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
        $data[] = $row;      
    };
    return $data;
}


$app->post('/listaCalc', function () use ($app)  {
    $param_input = $_POST;
    $resposta = listaCalc($param_input);
    echo json_encode($resposta);
});


function listaCalc($objeto){
    $db = getConnection();
    $result = $db->query( 'CALL SP_LISTA_CALCULOS("'.$objeto['IdProc'].'")');
    while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
        $data[] = $row;      
    };
    return $data;
}

$app->post('/insereCalc', function () use ($app)  {
    $param_input = $_POST;
    $resposta = insereCalc($param_input);
    echo json_encode($resposta);
});

//FUNÇÃO PARA CRIAÇÃO DE PROCESSO
function insereCalc($objeto){
  $db = getConnection();
    $result = $db->query( 'CALL SP_INSERE_CALCULO("'.$objeto['IdProc'].'",'."'".$objeto['Calculo']."'".')');
    while ( $row = $result->fetch(PDO::FETCH_ASSOC) ) {
        $data = $row;      
    };
    
    return $data;
}

//EXECUTA A ROTINA SOLICITADA
$app->run();
?>