const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const errorMsg = document.getElementById('errorMsg');

// WMO Weather interpretation codes
function getWeatherDescription(code) {
    const codes = {
        0: 'Clear sky',
        1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
        45: 'Fog', 48: 'Depositing rime fog',
        51: 'Light Drizzle', 53: 'Moderate Drizzle', 55: 'Dense Drizzle',
        61: 'Slight Rain', 63: 'Moderate Rain', 65: 'Heavy Rain',
        71: 'Slight Snow', 73: 'Moderate Snow', 75: 'Heavy Snow',
        95: 'Thunderstorm'
    };
    return codes[code] || 'Unknown';
}

async function getWeather() {
    const city = cityInput.value.trim();
    if (!city) return;

    errorMsg.style.display = 'none';
    weatherInfo.classList.remove('active');

    try {
        // 1. Geocoding
        const geoReq = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
        const geoData = await geoReq.json();

        if (!geoData.results) {
            throw new Error('City not found');
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // 2. Weather
        const weatherReq = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherReq.json();

        const current = weatherData.current_weather;

        // 3. Update UI
        document.getElementById('cityName').textContent = `${name}, ${country}`;
        document.getElementById('tempDisplay').textContent = `${current.temperature}°C`;
        document.getElementById('conditionDisplay').textContent = getWeatherDescription(current.weathercode);
        document.getElementById('windDisplay').textContent = `${current.windspeed} km/h`;

        weatherInfo.classList.add('active');

    } catch (err) {
        errorMsg.textContent = err.message;
        errorMsg.style.display = 'block';
    }
}

// Allow Enter key
cityInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getWeather();
    }
});
