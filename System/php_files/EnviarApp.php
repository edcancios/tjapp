<?php
$Usuario = ($_GET['user']);
$Nome = ($_GET['Nome']);
$Cod = ($_GET['cod']);
//$status = ($_GET['status']);
$saida = 0;


//ENVIO DO EMAIL
// Inclui o arquivo PHPMailerAutoload.php localizado na pasta phpmailer
require('PHPMailerAutoload.php');
// Inicia a classe PHPMailer
$mail = new PHPMailer();
// Define os dados do servidor e tipo de conexão
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsSMTP(); // Define que a mensagem será SMTP
$mail->Host = "fastfeedback.com.br"; // Endereço do servidor SMTP
$mail->SMTPAuth = true; // Usa autenticação SMTP? (opcional)
$mail->Username = 'fastfeedback@fastfeedback.com.br'; // Usuário do servidor SMTP
$mail->Password = 'FFback2017'; // Senha do servidor SMTP
$mail->CharSet = 'UTF-8';
// Define o remetente
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->From = "fastfeedback@fastfeedback.com.br"; // Seu e-mail
$mail->FromName = "FASTFEEDBACK"; // Seu nome
// Define os destinatário(s)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->AddAddress($Usuario, $Nome);
//$mail->AddCC('ciclano@site.net', 'Ciclano'); // Copia
$mail->AddBCC('emmanuel_duda@hotmail.com', 'Administrador'); // Cópia Oculta
// Define os dados técnicos da Mensagem
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
//$mail->CharSet = 'iso-8859-1'; // Charset da mensagem (opcional)
// Define a mensagem (Texto e Assunto)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->Subject  = "OBRIGADO POR SE REGISTRAR"; // Assunto da mensagem
$mail->Body = '<p style="color: black"><span><img src="http://fastfeedback.com.br/FFSYSTEMONE/images/FASTFEEDBACK_Logo.jpg" alt="logo_fastfeedback" width="80" height="45" href="http://fastfeedback.com.br" /></span></p>
<h1 style="color: black">Olá, '.$Nome.'!</h1>
<h3 style="color: black">Obrigado por finalizar seu registro no aplicativo Web Personal.</h3>
<h3 style="color: black">O link para acesso ao sistema é </h3>
<p><a href="http://fastfeedback.com.br/FFSYSTEMONE/Index.html">http://fastfeedback.com.br/FFSYSTEMONE/</a></p>
<h3 style="color: black">Qualquer dúvida, sugestão ou reclamação, entre em contato com o nosso suporte.</h3>
<p></p>
<h3 style="color: black">SUPORTE</h3>
<h3 style="color: black">contato@fastfeedback.com.br</h3>
<h3 style="color: black">WhatsApp: +55 11 99663-5463.</h3>

<div style="color: black; background-color: white; width: 100%">
</div>
<h3  style="color: black"><span>Atenciosamente.</span></h3>

<h3 style="color: black"><span>Equipe da FASTFEEDBACK.</span></h3>
<p style="color: black"><span><img src="http://fastfeedback.com.br/FFSYSTEMONE/images/FASTFEEDBACK_Logo.jpg" alt="logo_fastfeedback" width="80" height="45" href="http://fastfeedback.com.br" /></span></p>';
//$mail->AltBody = "Este é o corpo da mensagem de teste, em Texto Plano! \r\n :)";
// Define os anexos (opcional)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//$mail->AddAttachment("AppFiles/WebPersonalAndroid.apk", "App Android");  // Insere um anexo
// Envia o e-mail
//$mail->SMTPDebug  = 3;
$enviado = $mail->Send();
// Limpa os destinatários e os anexos
//$mail->ClearAllRecipients();
//$mail->ClearAttachments();
// Exibe uma mensagem de resultado
if ($enviado) {
	$saida = "Enviado";
 echo $saida;
} else {
echo "Não foi possível enviar o e-mail.";
echo "<b>Informações do erro:</b> " . $mail->ErrorInfo;
};

?>