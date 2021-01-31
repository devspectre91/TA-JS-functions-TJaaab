// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age = 1, conversionFactor = 7) {
  return age * conversionFactor;

}

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/
const MAX_AGE = 70;
function calculateMoviesToWatch(age = 18, frequency = 2) {
  return (MAX_AGE - age) * frequency * 4 * 12;
}

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(celsius = 37) {
  return `${((9 * celsius) / 5) + 32} F is ${celsius} C`
}

/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function fahrenheitToCelsius(fahrenheit = 98.6) {
  return `${fahrenheit} F is ${((fahrenheit - 32) / 9) * 5} C`
}

/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n = 2, x = 2) {
  let p = 1;
  if (n <= 0) { return `The number below 1 is not allowed` }
  else {
    while (x > 0) {
      p = p * n;
      x = x - 1;
    }
    return p;

  }

}

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(num1, myString) {
  let initialSum = 0, intialProduct = 1;
  if (myString === "sum") {
    while (num1 > 0) {
      initialSum = initialSum + num1;
      num1 = num1 - 1;
    }
    return initialSum;
  }
  else if (myString === "product") {
    while (num1 > 0) {
      intialProduct = intialProduct * num1;
      num1 = num1 - 1;
    }
    return intialProduct;
  }
  else { alert("Not a valid Input"); }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(n = 1) {
  let intialSum = 0;
  while (n > 0) {
    intialSum = intialSum + n;
    n = n - 1;
  }
  return intialSum;
}

/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/
function sumOfNDash(n = 1) {
  let intialSum = 0;
  while (n > 0) {
    if (n % 5 == 0 || n % 7 == 0) {
      intialSum = intialSum + n;
    } n = n - 1;
  }
  return intialSum;
}


/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(num1, num2) {
  return (num1 > num2) ? num2 : num1;

}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(typeVal) {
  return typeof typeVal;
}
