let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city");
city = city.toLowerCase().trim();

if (city === "paris") {
  alert(
    `It is currently ${Math.round(
      weather.paris.temp
    )}°C in Paris with a humidity of ${weather.paris.humidity}%.`
  );
} else if (city === "tokyo") {
  alert(
    `It is currently ${Math.round(
      weather.tokyo.temp
    )}°C in Tokyo with a humidity of ${weather.tokyo.humidity}%.`
  );
} else if (city === "lisbon") {
  alert(
    `It is currently ${Math.round(
      weather.lisbon.temp
    )}°C in Lisbon with a humidity of ${weather.lisbon.humidity}%.`
  );
} else if (city === "san francisco") {
  alert(
    `It is currently ${Math.round(
      weather["san francisco"].temp
    )}°C in San Francisco with a humidity of ${
      weather["san francisco"].humidity
    }%.`
  );
} else if (city === "moscow") {
  alert(
    `It is currently ${Math.round(
      weather.moscow.temp
    )}°C in Moscow with a humidity of ${weather.moscow.humidity}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
