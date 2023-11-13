//deklarasikan jumlah hari di setiap section
const days = 400;
let year = 365,
  month = 30,
  day = 1;

//kalkulasikan pembagian hari
yearConvert = parseInt(days / year);
monthConvert = parseInt((days % year) / month);
dayConvert = ((days % year) % month) / day;

//output hasil
console.log(
  `${days} hari terdiri dari ${yearConvert} tahun, ${monthConvert} bulan, dan ${dayConvert} hari`
);
