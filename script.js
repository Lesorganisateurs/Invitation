function checkPassword() {
    var password = document.getElementById("password").value;
    
    if (password === "Caca") {
        // Masquer le cadre mot de passe
        document.getElementById("password-form").style.display = "none";
        // Masquer l'image en changeant la valeur de display à "none"
            document.getElementById("image").style.display = "none";
        // Afficher le message d'invitation
        document.getElementById("invitation").style.display = "block";
    } else {
        alert("Mot de passe incorrect. Veuillez réessayer.");
    }
}
