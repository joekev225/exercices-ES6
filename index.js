
// / Exercice 1

// Créer une fonction qui prend en parametre un tableau de nombre
// et qui affiche ces differents nombres un à un.


let array = [4,5,6,7]

array.map(function(elt) {
    console.log (elt)
})


// Exercice 2 

// Créer une fonction qui prend en parametre un tableau de nombre et 
// qui retourne un tableau qui ne contient que les nombres impairs

let nombrePair = (array)=> {
  return array.filter (function(elt){
     return elt % 2 == 0
    })
}


// Exercice 3

// Créer une fonction qui prend en parametre un tableau de nombre 
// et qui retourne la somme de ces nombres

let sommeTableau = (array) => {
    return array.reduce(function (acc, elt) {
        return acc + elt 
    })

}


// Exercice 4 

// Créer une fonction qui prend en parametre un tableau
// qui verifie s'il existe un nombre pair dans le tableau ou non,
// retourner true ou false

let filtrageBolean = (elt) => {
    if (elt % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }