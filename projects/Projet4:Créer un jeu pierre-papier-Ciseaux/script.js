const contenantChoixOrdinateur = document.getElementById("choix-ordinateur");
const contenantChoixUtilisateur = document.getElementById("choix-utilisateur");
const contenantChoixResultat = document.getElementById("resultat");

const choixpossibles = document.querySelectorAll("button");

let choixUtilisateur;
let resultat;
let choixOrdinateur;

// Evenement 'Click sur les buttons'
choixpossibles.forEach((choixpossible) =>
  choixpossible.addEventListener("click", (e) => {
    // Récupération de l'ID du button cliqué
    choixUtilisateur = e.target.id;
    // On ajoute l'image qui correspond au choix
    contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`;

    generer_choix_ordinateur();
    verification(); // Appeler la fonction de vérification
    contenantChoixResultat.innerHTML = resultat; // Afficher le résultat
  })
);

// Fonction pour générer le choix de l'ordinateur
function generer_choix_ordinateur() {
  random = Math.floor(Math.random() * 3) + 1; // Générer des nombres compris entre 1 et 3
  if (random === 1) {
    choixOrdinateur = "pierre";
  }
  if (random === 2) {
    choixOrdinateur = "papier";
  }
  if (random === 3) {
    choixOrdinateur = "ciseaux";
  }
  // On ajoute l'image qui correspond au choix de l'ordinateur
  contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`;
}

// Fonction pour vérifier si le joueur a gagné ou pas
function verification() {
  if (choixUtilisateur == choixOrdinateur) {
    resultat = "Egalité !";
  } else if (
    (choixUtilisateur == "pierre" && choixOrdinateur == "papier") ||
    (choixUtilisateur == "papier" && choixOrdinateur == "ciseaux") ||
    (choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre")
  ) {
    resultat = "Perdu !";
  } else {
    resultat = "Gagné !";
  }
}
