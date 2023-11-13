//deklarasikan tanggal 1 dan 2 dalam format date
const firstDate = new Date("2022-1-20");
const secondDate = new Date("2022-1-22");

//ubah waktu ke dalam bentuk milliseconds
const firstDateMilliseconds = firstDate.getTime();
const secondDateMilliseconds = secondDate.getTime();

//hitung selisih hari dalam bentuk milliseconds
const daysDifferenceMilliseconds =
  secondDateMilliseconds - firstDateMilliseconds;

//deklarasikan jumlah milliseconds dalam 1 hari sebagai pembagi
const millisecondsInADay = 24 * 60 * 60 * 1000;

//bagi perbedaan hari dengan pembagi dan output hasil
const daysDifference = Math.round(
  daysDifferenceMilliseconds / millisecondsInADay
);
console.log(`selisihnya adalah ${daysDifference} hari`);
