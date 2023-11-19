document.addEventListener("DOMContentLoaded", function () {
    var countdownElement = document.getElementById("countdown");
    
    // Définir la date de fin du décompteur (10 minutes dans cet exemple)
    var countdownDate = new Date();
    countdownDate.setMinutes(countdownDate.getMinutes() + 60);

    // Mettre à jour le décompteur chaque seconde
    var countdownInterval = setInterval(function () {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Ajouter un zéro devant les chiffres < 10
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Mettre à jour l'élément d'affichage du décompteur
        countdownElement.innerHTML = minutes + ":" + seconds;

        // Arrêter le décompteur lorsque le temps est écoulé
        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Temps écoulé";
        }
    }, 1000);
});
