let anni = prompt("inscerisci eta");
console.log(anni);

let km = prompt("inserisci il numero dei km");
console.log(km);

let prezzoTragitto=km*0.21;
console.log(prezzoTragitto); 

let scontoPerMinori=prezzoTragitto*0.2
console.log(scontoPerMinori);

let scontoPerOver65=prezzoTragitto*0.4
console.log(scontoPerOver65);

let prezzoFinale;

if (anni <18){
    alert("Non hai compiuto 18 anni");
    prezzoFinale=prezzoTragitto-scontoPerMinori;
}

else if (anni >65){
    alert("Non hai compiuto 65 anni");
    prezzoFinale=prezzoTragitto-scontoPerOver65;
}

else {
    alert("Non hai diritto allo sonto");
    prezzoFinale=prezzoTragitto;
}

console.log("questo e il prezzo dedicato a te"+prezzoFinale) 