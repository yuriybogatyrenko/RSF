<?php
 $to = "webxrab@gmail.com";

$message = '';

if (isset($_POST['phone'])) {
$message .= "<p>Телефон: ".$_POST['phone']."</p>";
}

if (isset($_POST['email'])) {
$message .= "<p>E-mail: ".$_POST['email']."</p>";
}

if (isset($_POST['name'])) {
$message .= "<p>Имя: ".$_POST['name']."</p>";
}

$subject = 'Rsf: Заявка';

$header = "From: info@rsf.ru\r\n"; 
$header.= "MIME-Version: 1.0\r\n"; 
$header.= "Content-Type: text/html; charset=utf-8\r\n"; 
$header.= "X-Priority: 1\r\n"; 

mail($to, $subject, $message, $header);

