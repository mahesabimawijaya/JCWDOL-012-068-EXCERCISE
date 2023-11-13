let arr = [1, 2, 3, 4];
let key = 7;

function arrPush(arr, key) {
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    if (key == arr[i]) {
      flag = false;
    }
  }
  if (flag) {
    arr.push(key);
    console.log(arr);
  } else {
    console.log(arr);
  }
}

arrPush(arr, key);
