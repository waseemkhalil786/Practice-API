const apiKey = '50bc431956f6741c57ebb717be57fc47'; // Replace with your actual API key

document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const location = `${data.name}, ${data.sys.country}`;
            const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            const temperature = `${Math.round(data.main.temp)}°C`;
            const description = data.weather[0].description;

            document.querySelector('.location').textContent = location;
            document.querySelector('.icon').style.backgroundImage = `url('${iconUrl}')`;
            document.querySelector('.temperature').textContent = temperature;
            document.querySelector('.description').textContent = description;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
});
