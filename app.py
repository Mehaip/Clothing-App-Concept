from flask import Flask, request, jsonify, render_template
from pyowm import OWM
import requests

app = Flask(__name__)

# Initialize OWM with your API key
owm = OWM('04f1a4c3b0e6baada9b51a7115c3fa43')
mgr = owm.weather_manager()

def get_location():
    response = requests.get('https://ipinfo.io/')
    data = response.json()
    return data
@app.route('/')
def index():
    # Serve the main HTML page
    return render_template('index.html')
@app.route('/weather')
def weather():
    # Get the user's location based on IP address
    location = get_location()
    city = location["city"]
    country = location["country"]
    try:
        # Get the weather for the location
        observation = mgr.weather_at_place(city)
        w = observation.weather
        temperature = w.temperature('celsius')['temp']
        detailed_status = w.detailed_status
        print(type(city))
        return jsonify({'temperature': temperature, 'detailed_status' : detailed_status, 'city' : city, 'country' : country})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
