// ## Question 1
// Write a program using the prompt function to take input of age as a value from the user and use alert to tell them if they can drive or not.

let age = prompt("enter your age");
age = Number(age);

const canDrive = (age) => {
  return age >= 18 ? true : false;
};

if (canDrive(age)) {
  alert("you can drive");
} else {
  alert("you can not drive");
}

// ****************************************************************************

// ## Question 2
// In question 1, use confirm to ask the user if they want to see the prompt again and want to get prompted again for the age.

do {
  let age = prompt("enter a valid age");
  age = Number(age);
  if (age >= 18) {
    alert("you can drive");
  } else {
    alert("you can not drive");
  }
} while (confirm("do you want to see prompt again"));

// ****************************************************************************

// ## Question 3
// In the previous question, use console.error to log the error of age is 0 or negative.

do {
  let age = prompt("enter your age");
  age = Number(age);
  if (age >= 18) {
    alert("can drive");
  } else if (age <= 0) {
    console.error("Inavalid age");
  } else {
    alert("you can not drive");
  }
} while (confirm("do you want to see the prompt again"));

// ****************************************************************************
// alternate method

do {
  let age = prompt("enter your age");
  age = Number(age);
  if (age > 0) {
    if (age > 18) {
      alert("yes.... you can drive");
    } else {
      alert("noooooo... you can not drive");
    }
  } else {
    console.error("enter a valid age");
  }
} while (confirm("do you want to enter your age again"));

// ****************************************************************************

// ## Question 4
// Write a program to prompt the user to input a number and change the URL to `https://google.com` if the user enters a number greater than 4 **(Hint: location.href)**.

let num = prompt("enter a number");
num = Number(num);

if (num > 4) {
  location.href = "https://www.google.com";
}

// ****************************************************************************

// ## Question 5
// Change the background of the page to yellow, red or any other color based on user input through prompt.

let color = prompt("enter a color");

document.body.style.background = color;
