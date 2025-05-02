<?php
$destinatario = "elbaljan@gmail.com";
$asunto = "Nueva reserva desde la web";

$nombre = $_POST['name'] ?? '';
$coche = $_POST['coche'] ?? '';
$telf = $_POST['telf'] ?? '';
$email = $_POST['email'] ?? '';
$hora = $_POST['time'] ?? '';
$horas = $_POST['horas'] ?? '';
$lugar = $_POST['arcade'] ?? '';
$observaciones = $_POST['observaciones'] ?? '';
$privacidad = isset($_POST['privacidad']) ? "Aceptada" : "No aceptada";

if (empty($nombre) || empty($email) || $privacidad !== "Aceptada") {
    die("Faltan datos obligatorios o no se aceptó la política de privacidad.");
}

$mensaje = "
===== DATOS PERSONALES =====
Nombre completo: $nombre
Teléfono: $telf
Email: $email

===== DETALLES DE LA RESERVA =====
Tamaño de coche: $coche
Hora de recogida: $hora
Duración estimada: $horas
Lugar de recogida/devolución: $lugar

===== OBSERVACIONES =====
$observaciones

===== PRIVACIDAD =====
Política de privacidad: $privacidad
";

$headers = "From: reservas@tudominio.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($destinatario, $asunto, $mensaje, $headers)) {
    header('Location: gracias.html');
    exit();
} else {
    echo "Error al enviar la reserva. Por favor, intenta de nuevo.";
}
?>
