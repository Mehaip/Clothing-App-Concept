from flask import Flask, request, jsonify, render_template
import geocoder
from pyowm import OWM

app = Flask(__name__)

# Initialize OWM with your API key
owm = OWM('04f1a4c3b0e6baada9b51a7115c3fa43')
mgr = owm.weather_manager()

@app.route('/')
def index():
    # Serve the main HTML page
    return render_template('index.html')
@app.route('/weather')
def weather():
    # Get the user's location based on IP address
    g = geocoder.ip("me")
    city = geocoder.osm(g.latlng, method='reverse').city
    country = geocoder.osm(g.latlng, method='reverse').country

    try:
        # Get the weather for the location
        observation = mgr.weather_at_place(city)
        w = observation.weather
        temperature = w.temperature('celsius')['temp']
        detailed_status = w.detailed_status
        city = city.replace('ă', 'a')
        city = city.replace('â', 'a')
        city = city.replace('ș', 's')
        country = country.replace('â', 'a')

        return jsonify({'temperature': temperature, 'detailed_status' : detailed_status, 'city' : city, 'country' : country})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
