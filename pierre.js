// Définition des signes possibles
const signesPossibles = ["pierre", "feuille", "ciseaux"];

// Initialisation des scores
let scoreJoueur1 = 0;
let scoreJoueur2 = 0;

// Initialisation de l'historique des manches
const historiqueManches = [];

// Fonction pour choisir un signe aléatoirement
function choisirSigneAleatoire() {
  return signesPossibles[Math.floor(Math.random() * signesPossibles.length)];
}

// Fonction pour jouer une manche
function jouerManche() {
  const signeJoueur1 = choisirSigneAleatoire();
  const signeJoueur2 = choisirSigneAleatoire();
  let resultatManche;

  // Détermination du résultat de la manche
  if (signeJoueur1 === signeJoueur2) {
    resultatManche = "Match nul";
  } else if (
    (signeJoueur1 === "pierre" && signeJoueur2 === "ciseaux") ||
    (signeJoueur1 === "feuille" && signeJoueur2 === "pierre") ||
    (signeJoueur1 === "ciseaux" && signeJoueur2 === "feuille")
  ) {
    resultatManche = "Joueur 1 gagne";
    scoreJoueur1++;
  } else {
    resultatManche = "Joueur 2 gagne";
    scoreJoueur2++;
  }

  // Ajout de la manche à l'historique
  historiqueManches.push({
    signeJoueur1,
    signeJoueur2,
    resultatManche,
    scoreJoueur1,
    scoreJoueur2,
  });

  // Affichage du résultat de la manche
  console.log(
    `Manche ${historiqueManches.length} : Joueur 1 a joué ${signeJoueur1}, Joueur 2 a joué ${signeJoueur2}. ${resultatManche}. Score : Joueur 1 ${scoreJoueur1}, Joueur 2 ${scoreJoueur2}`
  );
}

// Jouer la partie
while (scoreJoueur1 < 2 && scoreJoueur2 < 2) {
  jouerManche();
}

// Détermination du gagnant
let gagnantPartie;
if (scoreJoueur1 > scoreJoueur2) {
  gagnantPartie = "Joueur 1";
} else {
  gagnantPartie = "Joueur 2";
}

// Affichage du gagnant de la partie et de l'historique des manches
console.log(`Partie terminée. ${gagnantPartie} a gagné la partie.`);
console.log(`Historique des manches :`, historiqueManches);
