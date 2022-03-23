let anni = prompt("inscerisci eta");
anni=parseFloat(anni);
console.log(anni);

let chilometri = prompt("inserisci il numero dei chilometri");
chilometri=parseFloat(chilometri);
console.log(chilometri);

let prezzoSenzaSconto=chilometri*0.21;
console.log(prezzoSenzaSconto); 

let prezzoFinale;

if (anni <18){
    alert("Non hai compiuto 18 anni");
    
    //CALCOLO DELLO SCONTO PER UNDER 18
    let scontoPerMinori=prezzoSenzaSconto*0.2
    console.log(scontoPerMinori);
    prezzoFinale=prezzoSenzaSconto-scontoPerMinori;
} else if (anni >65){
    alert("Non hai compiuto 65 anni");
    //CALCOLO DELLO CONTO SOPRA 65 ANNI

    let scontoPerOver65=prezzoSenzaSconto*0.4
    console.log(scontoPerOver65);
    prezzoFinale=prezzoSenzaSconto-scontoPerOver65;
} else {
    alert("Non hai diritto allo sonto");
    prezzoFinale=prezzoSenzaSconto;
}


let prezzoFinaleDueDecimali=prezzoFinale.toFixed(2); 

console.log("questo e il prezzo dedicato a te"+prezzoFinaleDueDecimali); 

document.getElementById("costo").innerHTML=prezzoFinaleDueDecimali;