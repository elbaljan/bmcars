<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["name"];
    $coche = $_POST["coche"];
    $telf = $_POST["telf"];
    $email = $_POST["email"];
    $hora = $_POST["time"];
    $horas = $_POST["horas"];
    $lugar = $_POST["arcade"]; // o el name que elijas finalmente
    $observaciones = $_POST["observaciones"];

    $to = "elbaljan@gmail.com"; // PON AQUÍ TU EMAIL
    $subject = "Nuevo formulario enviado";
    $message = "Nombre: $nombre\nCoche: $coche\nTeléfono: $telf\nEmail: $email\nHora recogida: $hora\nHoras: $horas\nLugar: $lugar\nObservaciones: $observaciones";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
