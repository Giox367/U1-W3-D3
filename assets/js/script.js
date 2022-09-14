// Calcolo un range di anni
function rangeOfYears(firstYear, lastYear) {
    let range = lastYear - firstYear;
    return range;
}


// Creo,uso e mostro output di una arrow function
let rangeOfYears = (firstYear,lastYear) => firstYear - lastYear;
console.log(rangeOfYears);



// Definisco una funzione all'interno di un'altra funzione

// Utilizzo gli operatori di comparazione

function maggioreEta(years){
    let age = 18;
    
    if(years <= 18){
        console.log(sei minorenne)
    }
    else{
        console.log(sei maggiorenne)
    }
    if(years < 0 && years > 100 || years != Number){
        console.log(inserisci un numero valido)
    }
}

}