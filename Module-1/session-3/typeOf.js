let unknown = "hello";

if (typeof unknown === "string") {
  console.log(1); //string
} else if (!isNaN(unknown)) {
  console.log(2); //number
} else if (/^[0-9]*$/.test(unknown) && typeof unknown === "string") {
  console.log(3); //others
}
