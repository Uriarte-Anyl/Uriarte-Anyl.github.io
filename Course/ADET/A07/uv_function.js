// MDN
async function getData() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=14.0875&longitude=121.1776&daily=uv_index_clear_sky_max,uv_index_max&hourly=uv_index,uv_index_clear_sky&current=temperature_2m&timezone=auto";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    getUVIndex(data);
    getTemperature(data);
  } catch (error) {
    console.error("Fetch error:", error.message);
    document.getElementById("uv-index").textContent = "Error";
  }
}

function getTemperature(data) {
  const temperatureHolder = document.getElementById("temperatureHolder");
  const temperatureValue = data.current.temperature_2m;
  const TemperatureRounded = Number(temperatureValue).toFixed(2);

  temperatureHolder.innerHTML =
    `<div class="temperature-value">` + TemperatureRounded + `&#x2103;</div>`;
}

function getUVIndex(data) {
  const currentTimeForUV = data.current.time.slice(0, 13);
  const hourlyTimesForUV = data.hourly.time;
  const uvIndexes = data.hourly.uv_index;

  const currentIndexForUV = hourlyTimesForUV.findIndex((time) =>
    time.startsWith(currentTimeForUV)
  );

  const showCurrentUVIndex = document.getElementById("showCurrentUVIndex");
  const uvValue = uvIndexes[currentIndexForUV];
  const UVRounded = Number(uvValue).toFixed(2);

  showCurrentUVIndex.innerHTML =
    ` <div class="uv-danger-wrapper py-3">
                <div class="uv-index">UV INDEX: <span>` +
    UVRounded +
    `</span></div>
                <div class="text-holder" id="text"></div>
              </div>`;

  return setUVlabel(uvValue);
}

function setUVlabel(uvValue) {
  const labelOfIndex = document.getElementsByClassName("danger");
  const text = document.getElementById("text");
  text.innerHTML = "";

  const uvLevels = [
    { max: 3, label: "Low" },
    { max: 6, label: "Moderate" },
    { max: 8, label: "High" },
    { max: 11, label: "Very High" },
    { max: Infinity, label: "Extreme" },
  ];

  uvLevels.forEach((level) => {
    if (uvValue < level.max && text.innerHTML === "") {
      text.innerHTML = `<div class="danger">` + level.label + `</div>`;
    }
  });

  let category = "";

  if (uvValue < 3) {
    category = "low";
  } else if (uvValue < 6) {
    category = "moderate";
  } else if (uvValue < 8) {
    category = "high";
  } else if (uvValue < 11) {
    category = "very";
  } else {
    category = "extremely";
  }

  let color = "";

  switch (category) {
    case "low":
      color = "#16C47F";
      textContent = "LOW";
      break;
    case "moderate":
      color = "#F2C94C";
      break;
    case "high":
      color = "#F2994A";
      break;
    case "very":
      color = "#EB5757";
      break;
    case "extremely":
      color = "#9B51E0";
      break;
    default:
      color = "#000000";
  }

  for (let i = 0; i < labelOfIndex.length; i++) {
    labelOfIndex[i].style.color = color;
  }
}

getData();
