function checkPassword() {
    var password = document.getElementById("password").value;
    
    if (password === "Pythagore") {
        document.getElementById("password").style.display = "none";
        document.getElementById("invitation").style.display = "block";
    } else {
        alert("Mot de passe incorrect. Veuillez réessayer.");
    }
}
