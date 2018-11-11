// Select the input tag inside each id and store them into each variales
const celInput = document.querySelector("#celsius > input");
const fahInput = document.querySelector("#fahrenheit > input");
const kelInput = document.querySelector("#kelvin > input");

// Round to 2 decimal points
function round(number) {
  return Math.round(number * 100) / 100;
}

function convertFromCelsius() {
  // Converts celInput value(string) to Number and stores the value
  let celsius = parseFloat(celInput.value);

  // Conversion
  let fTemp = (9 / 5) * celsius + 32; // Formula C -> F
  let kTemp = celsius + 273.15; // Formula C -> K

  // Show the values on the screen
  fahInput.value = round(fTemp);
  kelInput.value = round(kTemp);
}

function convertFromFahrenheit() {
  let fahrenheit = parseFloat(fahInput.value);
  let cTemp = (5 / 9) * fahrenheit - 32;
  let kTemp = fahrenheit + 457.87;

  celInput.value = round(cTemp);
  kelInput.value = round(kTemp);
}

function convertFromKelvin() {
  let kelvin = parseFloat(kelInput.value);
  let cTemp = kelvin - 273.15;
  let fTemp = kelvin - 457.87;

  celInput.value = round(cTemp);
  fahInput.value = round(fTemp);
}

celInput.addEventListener("input", convertFromCelsius);
fahInput.addEventListener("input", convertFromFahrenheit);
kelInput.addEventListener("input", convertFromKelvin);
