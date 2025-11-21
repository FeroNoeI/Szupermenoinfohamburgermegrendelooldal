const temperatures = [-11.2, 14.4, 13.0, 17.3, 16.9, 18.2, 27.5]
const temperatureUpperLimits = [0, 15, 20, 25, 50]
const offers = ["Ma a forró csoki akciós!",
  "Melegedj át velünk egy teával!",
  "ma a süti akciós!",
  "Ma a fagyi akciós!",
  "Hütsd le magad egy jeges limonádéval"]
const dayText = document.querySelector(".day-text");


weatherWidget();
showStat();

function weatherWidget(){
  const day = document.querySelector('#day').value;
  const temperatureDiv = document.querySelector(".temperature");
  temperatureDiv.innerHTML = temperatures[day] + '&deg;C';
  for (let i = 0; i < temperatureUpperLimits.length; i++){
    if(temperatures[day] <= temperatureUpperLimits[i]){
      dayText.innerHTML = offers[i];
      break;
    }
  }
}

function maxtemperature(){
  let max = temperatures.length != 0 ? temperatures[0] : 0;
  for(let i = 1; i < temperatures.length; i++){
    if(temperatures[i] > max){
      max = temperatures[i];

    }
  }
  return max;
}

function mintemperature(){
  let min = temperatures.length != 0 ? temperatures[0] : 0;
  for(let i = 1; i < temperatures.length; i++){
    if(temperatures[i] < min){
      min = temperatures[i];

    }
  }
  return min;
}

function avgtemperature(){
  let avg = 0;
  for(let i = 1; i < temperatures.length; i++){
    avg += temperatures[i];
  }
  return temperatures.length != 0 ? avg/temperatures.length : 0;
}

function showStat(){
  const minStat = document.querySelector(".min-Stat")
  const avgStat = document.querySelector(".avg-Stat")
  const maxStat = document.querySelector(".max-Stat")
  const min = mintemperature();
  const avg = avgtemperature();
  const max = maxtemperature();
  minStat.innerHTML = "Minimum hőmérséklet: " + min + '&deg;C'
  maxStat.innerHTML = "Maximum hőmérséklet: " + max + '&deg;C'
  avgStat.innerHTML = "Átlagos hőmérséklet: " + avg.toFixed(1) + '&deg;C'

}
