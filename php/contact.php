<?php
// Configuration de l'adresse email de destination
$recipient = "killyanlebegue000@gmail.com"; 
$subjectPrefix = "Contacter PortFolio";

// Vérifie si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Validation des champs
    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($subject) || empty($message)) {
        // Redirection avec un message d'erreur si la validation échoue
        header("Location: index.html?error=Veuillez remplir tous les champs correctement.");
        exit;
    }

    // Formatage de l'email
    $subject = "$subjectPrefix : $subject";
    $emailContent = "Nom : $name\n";
    $emailContent .= "Email : $email\n\n";
    $emailContent .= "Message :\n$message\n";

    // En-têtes de l'email
    $headers = "From: $name <$email>";

    // Envoi de l'email
    if (mail($recipient, $subject, $emailContent, $headers)) {
        header("Location: index.html?success=Votre message a été envoyé avec succès !");
    } else {
        header("Location: index.html?error=Une erreur est survenue lors de l'envoi du message.");
    }
} else {
    // Redirection si le formulaire n'est pas soumis
    header("Location: index.html");
}
?>
