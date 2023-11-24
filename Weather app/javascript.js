
const apiKey = "e94616cdadbed6e680cb0588e5db1962";
/* const url =
  "https://api.openweathermap.org/data/2.5/weather?q=mogadishu&appid=e94616cdadbed6e680cb0588e5db1962&units=metric"; */

const url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" +
  apiKey;

const field = document.querySelector(".field");
const degree = document.querySelector(".degree");
const time = document.querySelector(".time");
const MaxTemp = document.querySelector(".h");
const MinTemp = document.querySelector(".l");
const place = document.querySelector(".place");
const mostly = document.querySelector(".mostly");
const weather = document.querySelector(".weather");
const title = document.querySelector(".title");
const SearchResult = document.querySelector(".SearchResult");
const search = document.querySelector(".search");
const form = document.querySelector(".form");

field.addEventListener("click", () => {
  search.style.transform = "translate(-5%, -30%)";
  SearchResult.style.display = "block";
  title.style.opacity = "0";
  weather.classList.add("hidden");
});

document.addEventListener("click", (e) => {
  if (!search.contains(e.target)) {
    search.style.transform = "translateY(0)";
    title.style.opacity = "1";
    weather.classList.remove("hidden");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = field.value;
  console.log(value);
  weather.style.display = 'block'
  fetchW(value);
});

async function fetchW(city) {
  try {
    const response = await fetch(`${url}&q=${city}`);
    const data = await response.json();
    console.log(data);
    if (data.length < 1) {
      SearchResult.innerHTML = `<p class='result'>No city found</p>`;
    }
    field.value = ''
    renderWeather(data);
  } catch (err) {
    console.log("error", err);
  }
}

const renderWeather = (result) => {
  place.innerHTML = `${result.name}`;
  MinTemp.innerHTML = `L:${result.main.temp_min}°`;
  MaxTemp.innerHTML = `H:${result.main.temp_max}°`;
  degree.innerHTML = `${result.main.temp}°C`;
  mostly.innerHTML = result.weather[0].main
};


