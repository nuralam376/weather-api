function showWeatherData(data) {
	if (!data) {
		return;
	}
	document.getElementById(
		"weather-icon"
	).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
	document.getElementById("cityName").innerText = data.name;
	document.getElementById("country").innerText = data.sys.country;
	document.getElementById("temperature").innerText = data.main.temp;
	document.getElementById("weather-condition").innerText = data.weather[0].main;
	document.getElementById("feels_like").innerText = data.main.feels_like;
	document.getElementById("max_temp").innerText = data.main.temp_max;
	document.getElementById("min_temp").innerText = data.main.temp_min;
	document.getElementById("humidity").innerText = data.main.humidity;
	document.getElementById("wind_speed").innerText = data.wind.speed;
	document.getElementById("sunrise").innerText = new Date(
		data.sys.sunrise * 1000
	).toLocaleTimeString();
	document.getElementById("sunset").innerText = new Date(
		data.sys.sunset * 1000
	).toLocaleTimeString();
}

function fetchWeatherData(city) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"60fbf8b7487b162686f35eaee40771d1"}&units=metric`
	)
		.then((response) => response.json())
		.then((json) => showWeatherData(json))
		.catch((error) => alert("Not found"));
}

document.getElementById("search").addEventListener("click", function () {
	const city = document.getElementById("city").value;
	fetchWeatherData(city);
});

fetchWeatherData("dhaka");
