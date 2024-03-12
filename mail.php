<?php

$username = $_POST["username"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza na stronie ZANA.studio";
$to = "zana.studiodesign@gmail.com";
$message = $_POST["msg"];

$txt = "Nadawca: " . $username . "\r\n" . "E-mail: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: /thanks.html");
} else {
    header("Location: /contact.html");
}