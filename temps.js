// etablissement de la page javascript //
var evenement = new Date("09/05/2022 09:00").getTime();                // Le temps s'exprime en millisecondes - L'evenement est fixé au 09/05/2022 //

var x = setInterval(function() {                                        /* Fonction comptage - Le JS est un langage de faible typage - 
                                                                              Il n'y a pas besoin de clarifier le type des variables */
  let maintenant = new Date().getTime();
  tempsrestant = evenement - maintenant;

// Calcul des jours, heures, minutes, secondes //
  let jours = Math.floor(tempsrestant/ (1000*60*60*24)) ;              /* Math.floor récupère un nombre entier - Un jour a 24 heures qui ont pour 
                                                                        chacune d'entre elles 60 minutes qui ont pour chacune d'entre elles 60 secondes
                                                                        qui ont pour chacune d'entre elles 1000ms*/
  let heures = Math.floor((tempsrestant % (1000*60*60*24) / (1000*60*60)));       // % operateur MODULO donnant le restant d'un quotient //
  let minutes = Math.floor(tempsrestant % (1000*60*60) / (1000*60));
  let secondes = Math.floor(tempsrestant % (1000*60) / 1000);

  let rebours = document.getElementById("rebours");

  rebours.innerHTML = jours + "j : " + heures + "h : " + minutes + "mn : " + secondes + "s.";

  if (tempsrestant < 0) {               // une fois que le temps soit totalement écoulé, il faut bien que le compteur s'arrête de tourner ... //
    clearInterval(x)
    rebours.innerHTML = "Le temps est passé, place à la formation UP to DEV avec SIMPLON.co à Montreuil"
  }

}, 1000);                                                                // fonction de comptage à chaque 1000ms, soit 1 seconde //

  

// Essai de pose d'un écouteur au 12/06/2022 //

window.onload = ecouteurClavier;

function ecouteurClavier(){
  document.addEventListener("keypress", messageSurToucheActive);
}

function messageSurToucheActive(){
  alert("Le clavier a été utilisé !!!");
}
