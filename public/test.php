<?php
$name = "name test";
$email = 'email test';
$message = 'message test';

$subject = "Message from portfolio";
$headers = "From: gerhardt.needemand.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$email_body = "<h2>Message from portfolio</h2>";
$email_body .= "<p><strong>Email:</strong> $email</p>";
$email_body .= "<p><strong>Message:</strong><br>$message</p>";

$to = "philippe.gerhardt@free.fr";

if (mail($to, $subject, $email_body, $headers)) {
  echo "SUCCESS";
} else {
  echo ("FAILED");
}