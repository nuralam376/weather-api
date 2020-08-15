function showWeatherData(data) {
	document.getElementById("cityName").innerText = data.name;
	document.getElementById("temperature").innerText = data.main.temp;
	document.getElementById("weather-condition").innerText = data.weather[0].main;
	document.getElementById(
		"weather-icon"
	).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

function fetchWeatherData(city) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"60fbf8b7487b162686f35eaee40771d1"}&units=metric`
	)
		.then((response) => response.json())
		.then((json) => showWeatherData(json));
}

document.getElementById("search").addEventListener("click", function () {
	const city = document.getElementById("city").value;
	fetchWeatherData(city);
});

fetchWeatherData("dhaka");
