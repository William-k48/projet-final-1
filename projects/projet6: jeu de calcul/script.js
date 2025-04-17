var nb1 = document.querySelector(".nb1");
var nb2 = document.querySelector(".nb2");
var op = document.querySelector(".op");
var Message = document.querySelector(".Message");
var score = document.querySelector(".score");
var link = document.querySelector(".link");
var section = document.querySelector("section");
var resInput = document.querySelector(".res");
var btnEnvoyer = document.querySelector(".btn-envoyer");
var compteur = 0;

// Nombres Aléatoires Début du jeu
var random1 = Math.floor(Math.random() * 11); // Générer des nombres entre 0 et 10
var random2 = Math.floor(Math.random() * 11); // Générer des nombres entre 0 et 10
console.log(random1);
console.log(random2);

// Insérer les nombres au hasard dans les variables nb1 et nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;

// Fonction de vérification
function verifier() {
  // Récupérer le résultat entré par le joueur
  var res = parseInt(resInput.value); // Convertir en nombre

  // Vérifier si la réponse est correcte
  if (random1 + random2 === res) {
    Message.style.background = "green";
    Message.innerHTML = "Correct !";
    Message.style.display = "block"; // Afficher le message
    compteur = compteur + 1; // Augmenter le compteur de score

    // Générer de nouveaux nombres aléatoires
    random1 = Math.floor(Math.random() * 11);
    random2 = Math.floor(Math.random() * 11);
    console.log(random1);
    console.log(random2);

    // Mettre à jour l'affichage des nombres
    nb1.innerHTML = random1;
    nb2.innerHTML = random2;

    // Vider le champ de résultat
    resInput.value = "";
  } else {
    // Masquer les éléments inutiles
    section.style.display = "none"; // Masquer toute la section

    // Afficher le message de défaite
    Message.style.background = "red";
    Message.innerHTML = "Vous avez perdu.";
    Message.style.display = "block";

    // Afficher le score
    score.innerHTML = `<span>${compteur}</span><br> Score`;
    score.style.display = "block";

    // Afficher le bouton "Recommencer"
    link.style.display = "block";
  }
}

// Fonction pour recommencer le jeu
function recommencer() {
  // Réafficher la section
  section.style.display = "flex";

  // Cacher les éléments de défaite
  Message.style.display = "none";
  score.style.display = "none";
  link.style.display = "none";

  // Réinitialiser le compteur
  compteur = 0;

  // Générer de nouveaux nombres aléatoires
  random1 = Math.floor(Math.random() * 11);
  random2 = Math.floor(Math.random() * 11);
  nb1.innerHTML = random1;
  nb2.innerHTML = random2;

  // Vider le champ de résultat
  resInput.value = "";
}
