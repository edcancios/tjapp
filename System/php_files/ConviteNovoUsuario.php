<?php
$email_envia=($_GET['email']);
$nome_aluno=($_GET['nome_aluno']);
$instituicao=($_GET['inst']);
$instituicao_logo=($_GET['logo']);
$Cod = ($_GET['cod']);

//$nome_prof=($_GET['nome_prof']);
$saida = 0;



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
$mail->FromName = "WEBPERSONAL"; // Seu nome
// Define os destinatário(s)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->AddAddress($email_envia, 'Convidado');
//$mail->AddCC($email_envia, 'remetente'); // Copia
$mail->AddBCC('fastfeedbacksystems@gmail.com','NOVO ALUNO '.$nome_aluno); // Cópia Oculta
// Define os dados técnicos da Mensagem
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
// Define a mensagem (Texto e Assunto)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->Subject  = "CONVITE: ".$instituicao." "; // Assunto da mensagem
$mail->Body = '<div style="background-color: black; color:white">
<div style="width: 100%;">
	<table>
			<tr>
				<td><img src="http://fastfeedback.com.br/WEBPERSONAL/System/images/FASTFEEDBACK_Logo_Original.jpg" alt="logo_fastfeedback" style="max-width: 200px" href="http://fastfeedback.com.br" /></td>
				<td><h3>FASTFEEDBACK Systems</h3></td>
			</tr>
		</table>	
</div>
<div style="padding: 20px; color: black;">
<div style="background-color: white; opacity: .85;padding: 20px ">
		
		<h3>Olá '.$nome_aluno.' !!!</h3>
		<p></p>
		<h3 style="margin-left: 30px">A '.$instituicao.' convida você a fazer parte da plataforma WEBPERSONAL.</h3>
		<h3 style="margin-left: 30px">Na plataforma, você terá acesso de forma ágil às mais diversas informações sobre: </h3>
		<ul style="margin-left: 50px">
			<li>
				<h3><span>Treinamentos individualizados prescritos pelo seu professor.</span></h3>
			</li>
			<li>
				<h3><span>Avaliações físicas e de desempenho.</span></h3>
			</li>
		</ul>
		<h3 style="margin-left: 30px">Assim como '.$instituicao.', ficamos muito felizes em ter você em nosso sistema, e esperamos que possa aproveitar ao máximo todos os recursos que nossa ferramenta disponibiliza.</h3>
		<h3 style="margin-left: 30px">O seu usuário de acesso é:</h3><h2 style="text-align: center">'.$email_envia.'</h2>
		<h3 style="margin-left: 30px">Utilize o link abaixo com seu nome para cadastrar sua senha, e aproveitar tudo que a forte parceria '.$instituicao.' e a WEBPERSONAL tem a oferecer!</h3>
		<a href="http://fastfeedback.com.br/WEBPERSONAL/pr.html?user='.$nome_aluno.'&$p='.$Cod.'">
			<table align="center">
				<tr>
					<td><img src=http://fastfeedback.com.br/WEBPERSONAL/System/Uploads/Midia/Logotipos/"'.$instituicao_logo.'" alt=""></td>
					<td><h3>'.$nome_aluno.'</h3></td>
				</tr>
			</table>
		</a>
		<p></p>
		<div align="right" style="margin-right: 100px">
		<h3 style="margin-right: 150px"><span>Atenciosamente.</span></h3>
		<table>
			<tr>
				<td><img src="http://fastfeedback.com.br/WEBPERSONAL/System/images/FASTFEEDBACK_Logo_Original.jpg" alt="logo_fastfeedback" width="80" height="45" href="http://fastfeedback.com.br" /></td>
			</tr>
			<tr>
				<td>Equipe do WEBPERSONAL.</td>
			</tr>
			<tr>
				<td>Um produto da FASTFEEDBACK Systems.</td>
			</tr>
		</table>
		</div>
	</div>
	</div>
	</div>';
//$mail->AltBody = "Este é o corpo da mensagem de teste, em Texto Plano! \r\n :)";
// Define os anexos (opcional)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//$mail->AddAttachment("http://fastfeedback.com.br/FF_Plataforma_Midia/Imagens/back_email.jpg", "back_email.jpg");  // Insere um anexo
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