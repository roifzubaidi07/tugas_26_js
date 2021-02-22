var bilangan = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
cek = isFinite([bilangan]);
for (let i = 0; i < bilangan.length; i++) {
  if (cek === false) {
    console.log('Angka ' + bilangan[i] + ' NOT Infinity.');
  }
}
