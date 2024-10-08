<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $subject = "Message du portfolio";
  $headers = "De: gerhardt.needemand.com\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

  $email_body = "<h2>Message du portfolio</h2>";
  $email_body .= "<p><strong>Email:</strong> $email</p>";
  $email_body .= "<p><strong>Message:</strong><br>$message</p>";

  $to = "philippe.gerhardt@free.fr";

  if (mail($to, $subject, $email_body, $headers)) {
    echo "SUCCESS";
  } else {
    echo "FAILED";
  }
}
