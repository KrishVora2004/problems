function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const result = document.getElementById("weatherResult");
  
    if (city === "") {
      result.innerHTML = "Please enter a city name.";
      return;
    }
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "weatherData.json", true);
  
    xhr.onload = function () {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
  
        if (data[city]) {
          const weather = data[city];
          result.innerHTML = `
            <strong>City:</strong> ${city}<br>
            <strong>Temperature:</strong> ${weather.temperature}°C<br>
            <strong>Humidity:</strong> ${weather.humidity}%<br>
            <strong>Condition:</strong> ${weather.condition}
          `;
        } else {
          result.innerHTML = "City not found in our records.";
        }
      } else {
        result.innerHTML = "Error loading weather data.";
      }
    };
  
    xhr.send();
  }
  