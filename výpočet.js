function mocnina(cislo, exponent) {
  return Math.pow(cislo, exponent);
}
function vypocet() {
  const cislo = document.getElementById("strana_a").value
  const exponent = 3
  const vysledek = mocnina(cislo, exponent);
  console.log(vysledek);
  document.getElementById("vysledek").innerText = vysledek
}
function ukazatvysledek() {
  const cislo = document.getElementById("strana_a").value
  const exponent = 3
  const vysledek = mocnina(cislo, exponent);
  const hodnota = document.getElementById("hodnota").value
  if (hodnota == vysledek) {
    document.getElementById("vysledek2").innerText = "správně"
  } else {
    document.getElementById("vysledek2").innerText = "špatně"
  }
  document.getElementById("vysledek").innerText = vysledek;
}


function spravnyvysledek() {
  document.getElementById("vysledek").innerText = vysledek
};