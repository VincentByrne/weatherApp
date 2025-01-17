export const weatherMapping = { //assigns weather code with discription and icon 
  "200": { icon: "11", description: "Thunderstorm with light rain" },
  "201": { icon: "11", description: "Thunderstorm with rain" },
  "202": { icon: "11", description: "Thunderstorm with heavy rain" },
  "210": { icon: "11", description: "Light thunderstorm" },
  "211": { icon: "11", description: "Thunderstorm" },
  "212": { icon: "11", description: "Heavy thunderstorm" },
  "221": { icon: "11", description: "Ragged thunderstorm" },
  "230": { icon: "11", description: "Thunderstorm with light drizzle" },
  "231": { icon: "11", description: "Thunderstorm with drizzle" },
  "232": { icon: "11", description: "Thunderstorm with heavy drizzle" },
  "300": { icon: "09", description: "Light intensity drizzle" },
  "301": { icon: "09", description: "Drizzle" },
  "302": { icon: "09", description: "Heavy intensity drizzle" },
  "310": { icon: "09", description: "Light intensity drizzle rain" },
  "311": { icon: "09", description: "Drizzle rain" },
  "312": { icon: "09", description: "Heavy intensity drizzle rain" },
  "313": { icon: "09", description: "Shower rain and drizzle" },
  "314": { icon: "09", description: "Heavy shower rain and drizzle" },
  "321": { icon: "09", description: "Shower drizzle" },
  "500": { icon: "10", description: "Light rain" },
  "501": { icon: "10", description: "Moderate rain" },
  "502": { icon: "10", description: "Heavy intensity rain" },
  "503": { icon: "10", description: "Very heavy rain" },
  "504": { icon: "10", description: "Extreme rain" },
  "511": { icon: "13", description: "Freezing rain" },
  "520": { icon: "09", description: "Light intensity shower rain" },
  "521": { icon: "09", description: "Shower rain" },
  "522": { icon: "09", description: "Heavy intensity shower rain" },
  "531": { icon: "09", description: "Ragged shower rain" },
  "600": { icon: "13", description: "Light snow" },
  "601": { icon: "13", description: "Snow" },
  "602": { icon: "13", description: "Heavy snow" },
  "611": { icon: "13", description: "Sleet" },
  "612": { icon: "13", description: "Light shower sleet" },
  "613": { icon: "13", description: "Shower sleet" },
  "615": { icon: "13", description: "Light rain and snow" },
  "616": { icon: "13", description: "Rain and snow" },
  "620": { icon: "13", description: "Light shower snow" },
  "621": { icon: "13", description: "Shower snow" },
  "622": { icon: "13", description: "Heavy shower snow" },
  "701": { icon: "50", description: "Mist" },
  "711": { icon: "50", description: "Smoke" },
  "721": { icon: "50", description: "Haze" },
  "731": { icon: "50", description: "Dust" },
  "741": { icon: "50", description: "Fog" },
  "751": { icon: "50", description: "Sand" },
  "761": { icon: "50", description: "Dust" },
  "762": { icon: "50", description: "Ash" },
  "771": { icon: "50", description: "Squall" },
  "781": { icon: "50", description: "Tornado" },
  "800": { icon: "01", description: "Clear sky" },
  "801": { icon: "02", description: "Few clouds" },
  "802": { icon: "03", description: "Scattered clouds" },
  "803": { icon: "04", description: "Broken clouds" },
  "804": { icon: "04", description: "Overcast clouds" },
}

export const convertDegreesToDirection = (degrees) => { // assigns degrees with wind direction.
  if (degrees >= 348.75 || degrees < 11.25) return "North";
  if (degrees >= 11.25 && degrees < 33.75) return "North-Northeast";
  if (degrees >= 33.75 && degrees < 56.25) return "Northeast";
  if (degrees >= 56.25 && degrees < 78.75) return "East-Northeast";
  if (degrees >= 78.75 && degrees < 101.25) return "East";
  if (degrees >= 101.25 && degrees < 123.75) return "East-Southeast";
  if (degrees >= 123.75 && degrees < 146.25) return "Southeast";
  if (degrees >= 146.25 && degrees < 168.75) return "South-Southeast";
  if (degrees >= 168.75 && degrees < 191.25) return "South";
  if (degrees >= 191.25 && degrees < 213.75) return "South-Southwest";
  if (degrees >= 213.75 && degrees < 236.25) return "Southwest";
  if (degrees >= 236.25 && degrees < 258.75) return "West-Southwest";
  if (degrees >= 258.75 && degrees < 281.25) return "West";
  if (degrees >= 281.25 && degrees < 303.75) return "West-Northwest";
  if (degrees >= 303.75 && degrees < 326.25) return "Northwest";
  if (degrees >= 326.25 && degrees < 348.75) return "North-Northwest";
  return "Invalid Direction"; 
};

