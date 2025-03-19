let LACityElement = document.querySelector("#losAngeles");

let LADate = LACityElement.querySelector(".date");
let LATime = LACityElement.querySelector(".time");

let NYCityElement = document.querySelector("#newYork");

let NYDate = NYCityElement.querySelector(".date");
let NYTime = NYCityElement.querySelector(".time");

function setTime() {
  let LATimeZone = moment().tz("America/Los_Angeles");
  LADate.innerHTML = LATimeZone.format("MMMM Do, YYYY");
  LATime.innerHTML = `${LATimeZone.format(
    "h:mm:ss"
  )} <small>${LATimeZone.format("A")}</small>`;

  let NYTimeZone = moment().tz("America/New_York");
  NYDate.innerHTML = NYTimeZone.format("MMMM Do, YYYY");
  NYTime.innerHTML = `${NYTimeZone.format(
    "h:mm:ss"
  )} <small>${NYTimeZone.format("A")}</small>`;
}
setTime();
setInterval(setTime, 500);
