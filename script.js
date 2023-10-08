// if else
var x = 29;
var hasil = ''

if (x < 30) {
    document.getElementById("ifelse").innerHTML = ('nilai x lebih kecil dari 30');
} else {
    document.getElementById("ifelse").innerHTML = ('nilai x lebih besar dari 30');
}

// nested if
var umur = 20;

if (umur < 20) {
  document.getElementById("nestedif").innerHTML = ('umur kamu lebih kecil dari 20');
} else if (umur === 20) {
  document.getElementById("nestedif").innerHTML = ('umur kamu tepat di 20 tahun');
} else {
  document.getElementById("nestedif").innerHTML = ('umur kamu lebih besar dari 20 tahun');
}


//switch case
var buah = 'tomat';

switch (buah) {
  case 'tomat':
  case 'apel':
  case 'semangka':
    document.getElementById("switch").innerHTML = (`${buah} adalah buah-buahan`);
    break;
  default:
    document.getElementById("switch").innerHTML = ('yang lain bukan termasuk buah-buahan');
}

// for statement
for (let i = 0; i < 10; i++) {
  document.getElementById("for").innerHTML = (i);
}

//while
var p = 1;
var hasil = '';
while (p < 5) {
  hasil += p;
  document.getElementById("while").innerHTML = (hasil);
  p++;
}

//do while
var z = 0;
var hasil = '';

do {
  z += 1;
  hasil += z;
} while (z < 15);
document.getElementById("dowhile").innerHTML = (hasil);

//function
function jumlah(a, b) {
  return a + b;
}
document.getElementById("function").innerHTML = ("hasil dari penjumlahan a dan b adalah" + " " + jumlah(10, 12));
