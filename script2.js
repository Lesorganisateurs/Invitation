document.addEventListener("DOMContentLoaded", function () {
    // Définir la date de fin du décompteur (1 heure dans cet exemple)
    var countdownDate = new Date();
    countdownDate.setHours(countdownDate.getHours() + 1);

    // Mettre à jour le décompteur chaque seconde
    var countdownInterval = setInterval(function () {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Ajouter un zéro devant les chiffres < 10
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Mettre à jour l'élément d'affichage du décompteur
        document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds;

        // Arrêter le décompteur lorsque le temps est écoulé
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Temps écoulé";
        }
    }, 1000);
});

function checkPassword(expectedPassword, nextPage) {
    var password = document.getElementById("password").value;

    if (password === expectedPassword) {
        window.location.href = nextPage;
    } else {
        document.getElementById("error-message").innerHTML = "Mot de passe incorrect. Veuillez réessayer.";
    }

document.addEventListener("DOMContentLoaded", function () {
    // Le reste du code pour le décompteur reste inchangé

    // Ajoutez la fonction pour basculer entre les types d'entrée de mot de passe
    var showPasswordCheckbox = document.getElementById("show-password");
    var passwordInput = document.getElementById("password");

    if (showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener("change", function () {
            if (showPasswordCheckbox.checked) {
                passwordInput.type = "text";
            } else {
                passwordInput.type = "password";
            }
        });
    }
});

function checkPassword(expectedPassword, nextPage) {
    var password = document.getElementById("password").value;

    if (password === expectedPassword) {
        window.location.href = nextPage;
    } else {
        document.getElementById("error-message").innerHTML = "Mot de passe incorrect. Veuillez réessayer.";
    }
}

}
