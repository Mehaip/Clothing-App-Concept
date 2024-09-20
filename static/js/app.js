  fetch('/weather')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weather').innerText = `Error: ${data.error}`;
            } else {
                document.getElementById('weather').innerText = `${data.temperature}°C`;
                document.getElementById('status').innerText = `${data.detailed_status}`;
                document.getElementById('city').innerText = `${data.city}`;
                document.getElementById('country').innerText = `${data.country}`
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));

