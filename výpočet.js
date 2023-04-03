function mocnina(cislo, exponent) {
  return Math.pow(cislo, exponent);
}  
function vypocet(){
const cislo=document.getElementById("strana_a").value
const exponent=3
const vysledek= mocnina(cislo,exponent);
console.log(vysledek);
document.getElementById("vysledek").innerText=vysledek
} 