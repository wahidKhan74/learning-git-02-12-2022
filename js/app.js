function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  document.getElementById("json").innerHTML = toCelsius;
  document.getElementById("h1").innerHTML = toCelsius;
  document.getElementById("p").innerHTML = toCelsius;