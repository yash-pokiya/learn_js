let tempCelc = document.querySelector(".tempCelc");
let inputField = document.querySelector(".inputCity");
let city = document.querySelector(".city");
let humidityPer = document.querySelector(".humidityPer");
let windSpeed = document.querySelector(".windSpeed");
let inputBtn = document.getElementById("basic-addon2");
inputField.focus();
let apiCall = async () => {
  let inputCity = inputField.value;
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=a89ba9d2629e4aaf5e17140fe2f13ce9&units=metric`
  );
  let data = await response.json();
  // tempCelc.textContent =
  console.log(data);
  if (!data.name) {
    alert("Enter Valid City...");
    inputField.value = "";
    return;
  }
  inputField.blur();
  city.textContent = data.name;
  tempCelc.textContent = Math.round(data.main.temp) + "°C";
  humidityPer.textContent = data.main.humidity + "%";
  windSpeed.textContent = data.wind.speed + " " + "km/h";
};

inputBtn.addEventListener("click", () => {
  apiCall();
});
inputField.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        apiCall();
        inputField.blur();
    }

});
