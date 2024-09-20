  fetch('/weather')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('weather').innerText = `Error: ${data.error}`;
            } else {
                document.getElementById('weather').innerText = `${data.temperature}°C`;
                document.getElementById('status').innerText = `${data.detailed_status}`;
                document.getElementById('city').innerText = `${data.city}`.replace('ş', 's');
                document.getElementById('country').innerText = `${data.country}`
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));


const UNSPLASH_KEY = '1y6ZxlAGql2yVc6qguWeqhiLhJjMct9pAxfF2kpfc5Q';
const query = 'clothing';
const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${UNSPLASH_KEY}`;

