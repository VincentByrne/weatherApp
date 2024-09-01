import { weatherMapping } from "../utils/weather-utils.js";
import { convertDegreesToDirection } from "../utils/weather-utils.js";

  export const stationAnalytics = {
    getShortestReport(station) { // Gets shortest weather code .. used as practise.
      let shortestReport = null;
      if (station.reports.length > 0) {
        shortestReport = station.reports[0];
        for (let i = 1; i < station.reports.length; i++) {
          if (station.reports[i].code < shortestReport.code) {
            shortestReport = station.reports[i];
          }
        }
      }
    return shortestReport;
  },
  
  getMostRecentWeatherCode(station) { //Gets most recent weather code
    if (station.reports.length > 0) {
      const mostRecentcode = station.reports[station.reports.length - 1];
      return mostRecentcode;  
    }
    return null; 
  },
  
  getWeatherDescription(mostRecentcode) { // Gets Weather Description from weather map 
    if (!mostRecentcode || !weatherMapping[mostRecentcode.code]) {
      return "Not valid weather code";
    }
    const weather = weatherMapping[mostRecentcode.code];
    return weather.description;
  },
  
  getWeatherIcon(mostRecentCode) { // Gets Weather icon from weather map 
    if (!mostRecentCode || !weatherMapping[mostRecentCode.code]) {
      return "not valid weather icon";
    }
    const weather = weatherMapping[mostRecentCode.code];
    return weather.icon;
  },
  
  getCurrentTemp(station) { //Gets current Temperature
    if (station.reports.length > 0) {
      return station.reports[station.reports.length - 1].temperature;
    }
    return null;
  },
  
   getFahrenheit(station) { // Converts current temperature to Fahrenheit
    const currentTemp = this.getCurrentTemp(station);
    if (currentTemp !== null) {
      return (currentTemp * 9/5) + 32;
    }
    return null;
  },
  
  getMaxTemp(station) { //Gets Max Temperature 
    if (station.reports.length === 0) return null;
    let maxTemp = station.reports[0].temperature;
    for (let i = 1; i < station.reports.length; i++) {
      if (station.reports[i].temperature > maxTemp) {
        maxTemp = station.reports[i].temperature;
      }
    }
    return maxTemp;
  },

  getMinTemp(station) { //Gets Min Temperature 
    if (station.reports.length === 0) return null;
    let minTemp = station.reports[0].temperature;
    for (let i = 1; i < station.reports.length; i++) {
      if (station.reports[i].temperature < minTemp) {
        minTemp = station.reports[i].temperature;
      }
    }
    return minTemp;
  },
  
  getCurrentWind(station) { //Gets Current Wind Speed 
    if (station.reports.length > 0) {
      return station.reports[station.reports.length - 1].windSpeed;
    }
    return null;
  },
  
  getCurrentDirection(station) { // Gets wind direction from degrees entered and converts to string
    if (station.reports.length > 0) {
      const windDirectionDegrees = station.reports[station.reports.length - 1].windDirection;
      return convertDegreesToDirection(windDirectionDegrees);
    }
    return null;
  },
  
  getMaxWind(station) { // Gets Max Wind 
    if (station.reports.length === 0) return null;
    let maxWind = station.reports[0].windSpeed;
    for (let i = 1; i < station.reports.length; i++) {
      if (station.reports[i].windSpeed > maxWind) {
        maxWind = station.reports[i].windSpeed;
      }
    }
    return maxWind;
  },
  
  getMinWind(station) { // Gets Min Wind 
    if (station.reports.length === 0) return null;
    let minWind = station.reports[0].windSpeed;
    for (let i = 1; i < station.reports.length; i++) {
      if (station.reports[i].windSpeed < minWind) {
        minWind = station.reports[i].windSpeed;
      }
    }
    return minWind;
  },
    
  getCurrentPressure(station) { //Gets Current pressure
    if (station.reports.length > 0) {
      return station.reports[station.reports.length - 1].pressure;
    }
    return null;
  },
    
  getMaxPressure(station) { // Gets Max Pressure
    if (station.reports.length === 0) return null;
    let maxPressure = station.reports[0].pressure;
    for (let i = 1; i < station.reports.length; i++) {
      if (station.reports[i].pressure > maxPressure) {
        maxPressure = station.reports[i].pressure;
      }
    }
    return maxPressure;
  },
    
  
    getMinPressure(station) { // Get Min Pressure
    if (station.reports.length === 0) return null;
    let minPressure = station.reports[0].pressure;
    for (let i = 1; i < station.reports.length; i++) {
      if (station.reports[i].pressure < minPressure) {
        minPressure = station.reports[i].pressure;
      }
    }
    return minPressure;
  }
  
  
};