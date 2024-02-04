const hECMAthlon = {
  //old
  /*   getMaxValue: function (input) {
    const maxValues = input.split(",");
    let maxValue = 0;
    for (let i = 0; i < maxValues.length; i++) {
      let tempValue = parseInt(maxValues[i]);
      if (tempValue > maxValue) {
        maxValue = tempValue;
      }
    }
    return [maxValue];
  }, */

  //modern
  /* getMaxValue: function (input) {
    const maxValues = input.split(",");
    const maxValue = maxValues.reduce((max, curr) => {
      const tempValue = parseInt(curr);
      return tempValue > max ? tempValue : max;
    }, 0);
    return [maxValue];
  }, */

  getMaxValue: (input) => [
    input.split(",").reduce((acc, curr) => (+curr > acc ? +curr : acc), 0),
  ],

  //old
  /* getGreaterThan: function (input) {
    const greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const greaterNums = [];
    for (let j = 0; j < greaterValues.length; j++) {
      if (greaterValues[j] > parseInt(input)) {
        greaterNums.push(greaterValues[j]);
      }
    }
    return greaterNums;
  }, */

  //modern
  /* getGreaterThan: (input) => {
    const greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = greaterValues.filter((number) => number > +input);
    return result;
  }, */

  getGreaterThan: (input) =>
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((number) => number > +input),

  //old
  /* fizzBuzz: function (input) {
    const output = [];
    for (let k = 1; k <= parseInt(input); k++) {
      let value;
      if (k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
      else if (k % 3 === 0) value = "Fizz";
      else if (k % 5 === 0) value = "Buzz";
      else value = k;
      output.push(value);
    }
    return output;
  }, */

  //modern
  fizzBuzz: (input) => {
    let array = Array.from({ length: +input }, (_, i) => i + 1);
    let result = array.map((number) =>
      number % 5 === 0 && number % 3 === 0
        ? "FizzBuzz"
        : number % 3 === 0
        ? "Fizz"
        : number % 5 === 0
        ? "Buzz"
        : number
    );
    return result;
  },
};

function setupEvents() {
  var maxValueButton = document.getElementById("max-value-button");
  var greaterThanButton = document.getElementById("greater-than-button");
  var fizzBuzzButton = document.getElementById("fizz-buzz-button");

  var maxValueInput = document.getElementById("max-value-input");
  var greaterThanInput = document.getElementById("greater-than-input");
  var fizzBuzzInput = document.getElementById("fizz-buzz-input");

  var maxValueContainer = document.getElementById("max-value-container");
  var greaterThanContainer = document.getElementById("greater-than-container");
  var fizzBuzzContainer = document.getElementById("fizz-buzz-container");

  maxValueButton.addEventListener("click", () => {
    var maxValue = getOutput(hECMAthlon.getMaxValue(maxValueInput.value));
    logResult(maxValueContainer, maxValue);
  });

  greaterThanButton.addEventListener("click", () => {
    var greaterValues = getOutput(
      hECMAthlon.getGreaterThan(greaterThanInput.value)
    );
    logResult(greaterThanContainer, greaterValues);
  });

  fizzBuzzButton.addEventListener("click", () => {
    var result = getOutput(hECMAthlon.fizzBuzz(fizzBuzzInput.value));
    logResult(fizzBuzzContainer, result);
  });

  //old
  /* function getOutput(output) {
    const returnValue = ["The function starts"];
    for (let i = 0; i < output.length; i++) {
      returnValue.push(output[i]);
    }
    returnValue.push("The function ends");
    return returnValue;
  } */

  const getOutput = (output) => {
    return ["The function starts", ...output, "The function ends"];
  };

  function logResult(place, values) {
    while (place.firstChild) {
      place.firstChild.remove();
    }
    for (let j = 0; j < values.length; j++) {
      place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
  }
}

setupEvents();
