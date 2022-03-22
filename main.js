let anni = prompt("inscerisci eta");
console.log(anni);

let km = prompt("inserisci il numero dei km");
console.log(km);

let prezzoTragitto = km*0.21;
console.log(prezzoTragitto); 

let prezzoFinale;
let sconto;


if (anni <18){
    alert("Non hai compiuto 18 anni")
}

else if (anni >65){
    alert("Non hai compiuto 65 anni")
}

else {
    alert("Non hai diritto allo sonto")
}
