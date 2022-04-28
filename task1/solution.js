const arr = [1, 2, 3, 4, 5];

prompt("Just a test");

document.getElementById("btnSubmit").addEventListener("click", () => {
  let input = document.getElementById("numberShifts");

  if (input.value == "" || input.value == null) {
    prompt("Enter number");
    return;
  }
  let theValue = input.value;

  if (theValue > 0) {
    for (let i = 0; i < theValue; i++) {
      arr.unshift(arr.pop());
    }
  } else if (theValue < 0) {
    theValue = Math.abs(theValue);

    for (let i = 0; i < theValue; i++) {
      arr.push(arr.shift());
    }
  }

  console.log(arr);
});

