//manual
let nominal = 250000;

for (let i = 1; i <= nominal.toString().length; i++) {
  if (i % 3 == 0) {
    nominal.toString(i) + ".";
  }
}
console.log(`Rp.${nominal},00`);

//constructor
let number = 250000;

const locale = "id-ID";
const options = {
  style: "currency",
  currency: "IDR",
};

const rupiah = new Intl.NumberFormat(locale, options).format(number);
console.log(rupiah);
