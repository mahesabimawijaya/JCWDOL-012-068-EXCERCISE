let arr = ["apple", "banana", "cherry", "date"];

function stringConverter(data) {
  let newString = "";
  newString += '"';
  for (i = 0; i < data.length; i++) {
    if (i == data.length - 1) {
      newString += " and " + data[i];
    } else {
      newString += data[i] + ",";
    }
  }
  newString += '"';

  console.log(newString);
}

stringConverter(arr);
