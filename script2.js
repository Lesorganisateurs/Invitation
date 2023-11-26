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



User
Peux tu créer un site internet avec comme première page juste un cadran pour y entrant un mot de passe qui serait :"Pythagore" . En inscrivant ce mot de passe cela donnerait accès à une seconde page qui serait une invitation à une soirée pour de célèbre détective afin de résoudre un crime.
ChatGPT
Je suis désolé, mais en tant que modèle de langage textuel, je ne peux pas créer de sites web ni de pages web interactives. Cependant, je peux vous expliquer comment vous pourriez créer une page web simple avec un mot de passe en HTML et CSS, que vous pourrez ensuite héberger sur un serveur web.

Voici un exemple simple de code HTML et CSS pour une telle page :

Créez un fichier HTML nommé "index.html" :
html
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>Page sécurisée</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="password-form">
        <h1>Entrez le mot de passe :</h1>
        <input type="password" id="password" placeholder="Mot de passe">
        <button onclick="checkPassword()">Entrer</button>
    </div>
    <div id="invitation" class="hidden">
        <h2>Bienvenue à la soirée des célèbres détectives!</h2>
        <p>Vous êtes invité à résoudre un mystérieux crime. La soirée se tiendra à...</p>
    </div>

    <script src="script.js"></script>
</body>
</html>
Créez un fichier CSS nommé "style.css" pour ajouter un peu de style à votre page :
css
Copy code
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.password-form {
    margin-top: 100px;
}

input[type="password"] {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #0077b6;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.hidden {
    display: none;
}
Créez un fichier JavaScript nommé "script.js" pour vérifier le mot de passe et afficher la page d'invitation :
javascript
Copy code
function checkPassword() {
    var password = document.getElementById("password").value;
    
    if (password === "Pythagore") {
        document.getElementById("password").style.display = "none";
        document.getElementById("invitation").style.display = "block";
    } else {
        alert("Mot de passe incorrect. Veuillez réessayer.");
    }
}
Une fois que vous avez ces fichiers, vous pouvez les mettre sur un serveur web pour créer votre page. Lorsque les visiteurs saisissent "Pythagore" comme mot de passe, la page d'invitation s'affichera.

User
comment je génère ces 3 types de fichier ?
ChatGPT
Pour générer les trois types de fichiers nécessaires pour créer votre page web, vous aurez besoin d'un éditeur de texte pour créer les fichiers HTML, CSS et JavaScript. Voici comment faire :

Fichier HTML (index.html) :

Ouvrez n'importe quel éditeur de texte, tel que Notepad (Windows), Visual Studio Code, Sublime Text, Atom ou tout autre éditeur de votre choix.
Copiez le code HTML que j'ai fourni dans mon message précédent.
Collez le code dans votre éditeur de texte.
Enregistrez le fichier avec l'extension ".html", par exemple "index.html".
Fichier CSS (style.css) :

Ouvrez un nouvel fichier dans votre éditeur de texte.
Copiez le code CSS que j'ai fourni dans mon message précédent.
Collez le code dans votre éditeur de texte.
Enregistrez le fichier avec l'extension ".css", par exemple "style.css".
Fichier JavaScript (script.js) :

Ouvrez un nouvel fichier dans votre éditeur de texte.
Copiez le code JavaScript que j'ai fourni dans mon message précédent.
Collez le code dans votre éditeur de texte.
Enregistrez le fichier avec l'extension ".js", par exemple "script.js".
Une fois que vous avez créé ces trois fichiers, vous pouvez les mettre dans le même répertoire (dossier) sur votre ordinateur.

Pour visualiser votre page web, vous pouvez simplement ouvrir le fichier "index.html" dans un navigateur web (comme Chrome, Firefox, Edge, etc.) en double-cliquant sur le fichier. Vous verrez ainsi la page d'accueil avec le champ de mot de passe. Lorsque vous entrez le mot de passe "Pythagore", la page d'invitation s'affichera.

User
Merci. maintenant comment je peux héberger publiquement mon site web gratuitement
ChatGPT
Pour héberger votre site web publiquement et gratuitement, vous avez plusieurs options, dont voici deux populaires :

GitHub Pages :

GitHub Pages est un service d'hébergement de sites web gratuits offert par GitHub, qui est une plateforme de gestion de code source.
Suivez ces étapes :
Créez un compte GitHub (si vous n'en avez pas déjà un) sur https://github.com/.
Créez un nouveau dépôt (repository) sur GitHub en cliquant sur "New" (Nouveau) dans votre tableau de bord.
Nommez le dépôt en utilisant le format "votrepseudo.github.io", où "votrepseudo" est votre nom d'utilisateur GitHub.
Téléchargez les fichiers HTML, CSS et JavaScript que vous avez créés dans ce dépôt (vous pouvez utiliser l'interface web de GitHub ou Git en ligne de commande).
Une fois les fichiers téléchargés, votre site sera accessible à l'adresse "https://votrepseudo.github.io" (où "votrepseudo" est votre nom d'utilisateur GitHub).
Netlify :

Netlify est une plateforme d'hébergement de sites web statiques qui propose un plan gratuit.
Voici comment procéder :
Créez un compte sur Netlify (https://www.netlify.com/).
Cliquez sur "New site from Git" (Nouveau site à partir de Git) et connectez votre compte GitHub.
Sélectionnez le dépôt (repository) contenant vos fichiers HTML, CSS et JavaScript.
Configurez les options nécessaires, puis déployez votre site.
Vous obtiendrez une URL de site unique que vous pourrez partager.
Ces deux options sont faciles à utiliser, gratuites et vous permettent de rendre votre site web accessible au public. Vous pouvez choisir celle qui vous convient le mieux en fonction de vos besoins et de votre expérience avec les outils de développement web.

User
J'ai ma page gitHub de créer mais je ne sais pas comment avoir le lien pour voir la page html dans un navigateur
ChatGPT
Une fois que vous avez créé votre dépôt GitHub pour héberger votre site web, il devrait être accessible via une URL spécifique. Voici comment obtenir le lien pour voir votre page HTML dans un navigateur :

Allez sur la page principale de votre dépôt GitHub.

Assurez-vous que le fichier principal de votre site (dans ce cas, "index.html") est situé à la racine du dépôt. Cela signifie qu'il doit être dans le même répertoire que votre fichier "README.md" (ou à défaut, à la racine du dépôt).

Dans la barre d'adresse de votre navigateur, l'URL devrait ressembler à ceci : https://github.com/votrepseudo/nom-depot, où "votrepseudo" est votre nom d'utilisateur GitHub et "nom-depot" est le nom de votre dépôt.

Pour voir votre page HTML dans un navigateur, ajoutez simplement "https://votrepseudo.github.io/nom-depot/" à la fin de l'URL, en remplaçant "votrepseudo" par votre nom d'utilisateur GitHub et "nom-depot" par le nom de votre dépôt. Par exemple, si votre nom d'utilisateur est "john" et votre dépôt s'appelle "mon-site", l'URL serait : https://john.github.io/mon-site/.

Lorsque vous ouvrez cette URL dans un navigateur, votre page HTML devrait s'afficher. Assurez-vous également que votre fichier "index.html" est correctement nommé et que les fichiers associés (CSS, JavaScript, etc.) sont correctement référencés dans votre code HTML pour qu'ils se chargent correctement.

User
Bonjour
ChatGPT
Bonjour ! Comment puis-je vous aider aujourd'hui ?

User
j'ai créé le site internet dont on a parlé et j'aimerai importer une photo dedans
ChatGPT
C'est génial que vous ayez créé votre site web ! Pour importer une photo sur votre site internet, suivez ces étapes :

Préparez votre image :
Assurez-vous que votre image est prête à être téléchargée sur votre site web. Vérifiez que l'image est dans un format couramment pris en charge, tel que JPEG, PNG, ou GIF, et qu'elle est redimensionnée ou optimisée si nécessaire pour un chargement plus rapide sur le web.

Ajoutez l'image dans votre dépôt GitHub :

Connectez-vous à GitHub et accédez à la page de votre dépôt (repository) contenant votre site web.
Cliquez sur le bouton "Add file" (Ajouter un fichier) dans votre dépôt, puis sélectionnez "Upload files" (Télécharger des fichiers).
Glissez et déposez votre image dans cette zone ou cliquez sur le bouton "Choose your files" (Choisir vos fichiers) pour sélectionner l'image depuis votre ordinateur.
Une fois l'image téléchargée, vous la verrez apparaître dans votre dépôt GitHub.
Ajoutez l'image à votre page HTML :
Ouvrez votre fichier HTML (probablement "index.html") dans votre dépôt GitHub.

Pour afficher l'image sur votre page, utilisez la balise <img> dans le code HTML. Par exemple, pour afficher une image nommée "mon-image.jpg", insérez le code suivant où vous souhaitez afficher l'image :
html
Copy code
<img src="mon-image.jpg" alt="Description de l'image">
Dans cet exemple, src doit contenir le chemin de l'image par rapport au répertoire racine de votre dépôt. Si l'image est dans le même répertoire que votre fichier HTML, le code ci-dessus fonctionnera. Si l'image est dans un sous-répertoire, assurez-vous de spécifier le chemin correct.

Le texte entre les guillemets dans l'attribut alt est une description de l'image pour l'accessibilité.

Enregistrez et commit :
Après avoir ajouté l'image à votre fichier HTML, assurez-vous de l'enregistrer et de commettre les modifications dans votre dépôt GitHub en utilisant les commandes Git ou l'interface web de GitHub.

Une fois que vous avez effectué ces étapes, votre image sera intégrée à votre site web. Vous pourrez la voir en ouvrant votre site web via l'URL que je vous ai indiqué précédemment, en ajoutant le nom de fichier de l'image à la fin de l'URL. Par exemple, si votre site est à l'adresse https://votrepseudo.github.io/nom-depot/, pour afficher l'image "mon-image.jpg", accédez à https://votrepseudo.github.io/nom-depot/mon-image.jpg.

User
Je suis bloqué à Cliquez sur le bouton "Add file" (Ajouter un fichier) dans votre dépôt, puis sélectionnez "Upload files" (Télécharger des fichiers). tu sais me montrer un screen du site ?
ChatGPT
Je suis désolé pour la confusion, mais GitHub ne permet pas le téléchargement de fichiers directement via l'interface web pour les dépôts de pages GitHub. Vous devrez télécharger vos fichiers, y compris les images, localement sur votre ordinateur et les envoyer ensuite dans votre dépôt via Git en utilisant l'interface en ligne de commande de Git ou un client Git graphique.

Voici comment faire pour ajouter des images à votre dépôt GitHub à partir de votre ordinateur :

Clonez votre dépôt (si vous ne l'avez pas déjà fait) :
Si vous n'avez pas encore cloné (téléchargé) votre dépôt GitHub sur votre ordinateur, vous pouvez le faire en utilisant Git. Ouvrez un terminal et exécutez la commande suivante en remplaçant votre_utilisateur par votre nom d'utilisateur GitHub et votre_depot par le nom de votre dépôt :

shell
Copy code
git clone https://github.com/votre_utilisateur/votre_depot.git
Placez les images dans le répertoire du dépôt :
Copiez les images que vous souhaitez ajouter dans le répertoire de votre dépôt cloné sur votre ordinateur. Assurez-vous que les images sont dans le même répertoire que votre fichier HTML, ou spécifiez le chemin correct dans votre code HTML pour accéder aux images.

Ajoutez, committez et poussez les modifications :
Dans le terminal, accédez au répertoire de votre dépôt cloné, puis exécutez les commandes Git suivantes pour ajouter, commettre et pousser les modifications vers GitHub :

shell
Copy code
git add .
git commit -m "Ajout d'images"
git push
Assurez-vous d'avoir Git installé sur votre ordinateur et configuré avec vos informations d'identification GitHub.

Après avoir effectué ces étapes, les images que vous avez ajoutées seront disponibles sur GitHub, et vous pourrez les utiliser dans votre site web en utilisant des balises <img> comme mentionné précédemment.

Malheureusement, je ne peux pas vous montrer de capture d'écran, car mon modèle ne prend pas en charge les images ou les graphiques. Si vous avez d'autres questions ou besoin d'aide supplémentaire, n'hésitez pas à demander.

User
J'ai rajouté l'image mais j'aimerai que la photo disparaisse après que la personne ai encodé le bon mot de passe
ChatGPT
Pour faire en sorte que l'image disparaisse de la page une fois que la personne a entré le bon mot de passe, vous pouvez utiliser du JavaScript pour modifier le contenu de la page dynamiquement. Voici comment vous pouvez procéder :

Identifiez l'élément HTML contenant l'image :
Assurez-vous que l'élément HTML contenant l'image que vous souhaitez faire disparaître a un identifiant (par exemple, id="image") pour le sélectionner facilement en JavaScript.

Par exemple, dans votre fichier HTML, vous pourriez avoir quelque chose comme ceci :

html
Copy code
<img id="image" src="mon-image.jpg" alt="Description de l'image">
Utilisez JavaScript pour masquer l'image :
Créez un script JavaScript dans votre fichier HTML (dans la balise <script>) pour vérifier le mot de passe et masquer l'image si le mot de passe est correct. Vous pouvez le faire en utilisant getElementById pour sélectionner l'élément par son ID et en modifiant la propriété style.display.

Voici un exemple de script JavaScript que vous pourriez ajouter à votre fichier HTML :

html
Copy code
<script>
    function checkPassword() {
        var password = document.getElementById("password").value;

        if (password === "Pythagore") {
            // Masquer l'image en changeant la valeur de display à "none"
            document.getElementById("image").style.display = "none";
            // Afficher le message d'invitation
            document.getElementById("invitation").style.display = "block";
        } else {
            alert("Mot de passe incorrect. Veuillez réessayer.");
        }
    }
</script>
HTML initial :
Assurez-vous que votre fichier HTML initial comprend l'image à masquer et le champ de mot de passe, comme vous l'avez créé précédemment :

html
Copy code
<img id="image" src="mon-image.jpg" alt="Description de l'image">
<div class="password-form">
    <h1>Entrez le mot de passe :</h1>
    <input type="password" id="password" placeholder="Mot de passe">
    <button onclick="checkPassword()">Entrer</button>
</div>
<div id="invitation" class="hidden">
    <h2>Bienvenue à la soirée des célèbres détectives!</h2>
    <p>Vous êtes invité à résoudre un mystérieux crime. La soirée se tiendra à...</p>
</div>
Assurez-vous que l'élément avec l'ID "image" a la propriété style.display initialisée à "block" (ou "inline-block" ou "inline", selon le style CSS de l'image).

Ainsi, une fois que la personne entre le bon mot de passe et appuie sur le bouton "Entrer", l'image sera masquée en passant sa propriété display à "none", et le message d'invitation sera affiché.

User
Bonjour, peut-on ajouter un décompteur de temps sur une page web ? si oui peux-tu générer le code html nécessaire ?
ChatGPT
Oui, vous pouvez ajouter un décompteur de temps sur une page web en utilisant JavaScript. Voici un exemple de code HTML, CSS, et JavaScript pour créer un décompteur simple :

HTML (index.html) :
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Décompteur de temps</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="timer">
    <h1>Temps restant : <span id="countdown">10:00</span></h1>
</div>

<script src="script.js"></script>
</body>
</html>
CSS (style.css) :
css
Copy code
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

#timer {
    margin-top: 50px;
}

#countdown {
    font-size: 24px;
    color: #0077b6;
}
JavaScript (script.js) :
javascript
Copy code
document.addEventListener("DOMContentLoaded", function () {
    var countdownElement = document.getElementById("countdown");
    
    // Définir la date de fin du décompteur (10 minutes dans cet exemple)
    var countdownDate = new Date();
    countdownDate.setMinutes(countdownDate.getMinutes() + 10);

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
Ce code crée une page web avec un décompteur de temps de 10 minutes. Vous pouvez personnaliser la durée du décompteur en ajustant la variable countdownDate dans le fichier JavaScript.

Copiez ces trois fichiers dans votre projet, puis ouvrez le fichier "index.html" dans un navigateur. Vous devriez voir un décompteur de temps qui se met à jour toutes les secondes jusqu'à ce que le temps soit écoulé.

User
Peux-tu repartir de tout ce qui a été dit et créer un site qui en première page affiche un timer de 1h, une image et une case mot de passe qui sera "mot de passe 1" pour l'instant. Si le mot de passe n'est correct, affiche un message mot de passe incorrect sinon passe à la 2ème page. Sur la deuxième page, il y a une autre image et un encadrer pour mettre le mot de passe qui sera ici pour l'instant "mot de passe 2". Si le mot de passe n'est correct, affiche un message mot de passe incorrect sinon passe à la 3ème page. Sur la troisième page, il y a une autre image et un encadrer pour mettre le mot de passe qui sera ici pour l'instant "mot de passe 3". Si le mot de passe n'est correct, affiche un message mot de passe incorrect sinon passe à la 4ème page. Sur la quatrième page, il y a un texte félicitant le participant pour être arriver ici et lui indiquant les détails pour participer à la soirée finale.
ChatGPT
Bien sûr, voici le code HTML, CSS, et JavaScript pour créer un site web répondant à vos spécifications :

HTML (index.html) :
html
Copy code
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Étape 1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="timer">
    <h1>Temps restant : <span id="countdown">01:00:00</span></h1>
</div>

<div id="image-container">
    <img src="image1.jpg" alt="Image 1">
</div>

<div class="password-form">
    <h2>Étape 1</h2>
    <input type="password" id="password" placeholder="Mot de passe">
    <button onclick="checkPassword('mot de passe 1', 'page2.html')">Entrer</button>
    <p id="error-message"></p>
</div>

<script src="script.js"></script>
</body>
</html>
CSS (style.css) :
css
Copy code
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

#timer {
    margin-top: 20px;
}

#countdown {
    font-size: 24px;
    color: #0077b6;
}

#image-container {
    margin-top: 20px;
}

img {
    max-width: 100%;
    height: auto;
}

.password-form {
    margin-top: 20px;
}

input[type="password"] {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #0077b6;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

#error-message {
    color: red;
    margin-top: 10px;
}
JavaScript (script.js) :
javascript
Copy code
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
}
Répétez ce modèle pour chaque page suivante en créant un fichier HTML, CSS, et JavaScript correspondant à chaque étape. Assurez-vous de mettre à jour les noms de fichiers, les images, et les mots de passe en conséquence.

N'oubliez pas de personnaliser les images et les mots de passe pour chaque étape du défi. Vous pouvez également personnaliser le style CSS pour répondre à vos préférences esthétiques.

User
peut-on ajouter un lien web dans  une de ces pages ?
ChatGPT
Oui, vous pouvez ajouter un lien web (hyperlien) dans n'importe quelle page HTML en utilisant la balise <a>. Voici comment vous pouvez le faire dans le contexte de l'exemple que nous avons créé précédemment.

Supposons que vous souhaitez ajouter un lien sur la quatrième page qui renvoie à un site web spécifique. Modifiez le fichier "page4.html" (ou le nom que vous avez choisi pour la quatrième page) comme suit :

HTML (page4.html) :
html
Copy code
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Étape 4</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div id="image-container">
    <img src="image4.jpg" alt="Image 4">
</div>

<div class="password-form">
    <h2>Étape 4</h2>
    <input type="password" id="password" placeholder="Mot de passe">
    <button onclick="checkPassword('mot de passe 4', 'congratulations.html')">Entrer</button>
    <p id="error-message"></p>
</div>

<!-- Ajoutez le lien web ici -->
<div id="link-container">
    <p>Cliquez <a href="https://www.example.com" target="_blank">ici</a> pour visiter notre site web.</p>
</div>

<script src="script.js"></script>
</body>
</html>
Dans cet exemple, la balise <a> est utilisée pour créer un lien vers "https://www.example.com". L'attribut target="_blank" indique au navigateur d'ouvrir le lien dans une nouvelle fenêtre ou un nouvel onglet.

Assurez-vous d'ajuster le lien (URL) en conséquence et placez cette section de code où vous souhaitez afficher le lien dans votre page.

User
Peux-tu ajouter l'option de voir ou cacher le mot de passe ?
ChatGPT
Bien sûr, vous pouvez ajouter une option pour voir ou cacher le mot de passe en utilisant du JavaScript pour basculer entre les types d'entrée de mot de passe. Voici comment vous pouvez le faire en modifiant le fichier "script.js" :

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
