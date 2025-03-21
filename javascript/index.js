let LACityElement = document.querySelector("#losAngeles");

let LADate = LACityElement.querySelector(".date");
let LATime = LACityElement.querySelector(".time");

let NYCityElement = document.querySelector("#newYork");

let NYDate = NYCityElement.querySelector(".date");
let NYTime = NYCityElement.querySelector(".time");

let DVCityElement = document.querySelector("#denver");

let DVDate = DVCityElement.querySelector(".date");
let DVTime = DVCityElement.querySelector(".time");

function setTime() {
  if (LACityElement) {
    let LATimeZone = moment().tz("America/Los_Angeles");
    LADate.innerHTML = LATimeZone.format("MMMM Do, YYYY");
    LATime.innerHTML = `${LATimeZone.format(
      "h:mm:ss"
    )} <small>${LATimeZone.format("A")}</small>`;
  }

  if (NYCityElement) {
    let NYTimeZone = moment().tz("America/New_York");
    NYDate.innerHTML = NYTimeZone.format("MMMM Do, YYYY");
    NYTime.innerHTML = `${NYTimeZone.format(
      "h:mm:ss"
    )} <small>${NYTimeZone.format("A")}</small>`;
  }
  if (DVCityElement) {
    let DVTimeZone = moment().tz("America/Denver");
    DVDate.innerHTML = DVTimeZone.format("MMMM Do, YYYY");
    DVTime.innerHTML = `${DVTimeZone.format(
      "h:mm:ss"
    )} <small>${DVTimeZone.format("A")}</small>`;
  }
}

function selectCity(event) {
  if (event.target.value === "default") {
    return;
  }
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
    <div>
        <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">Return to Home</a>`;
}

let citySelect = document.querySelector("#citySelect");
citySelect.addEventListener("change", selectCity);

setTime();
setInterval(setTime, 500);
