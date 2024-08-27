import { weatherMapping } from "../utils/weather-utils.js";

export const stationAnalytics = {
  getShortestReport(station) {
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
  
  getMaxTemp(station) {
    if (station.reports.length === 0) return null;
    let maxTemp = station.reports[0].temperature;
    for (let i = 1; i < station.reports.length; i++) {
      if (station.reports[i].temperature > maxTemp) {
        maxTemp = station.reports[i].temperature;
      }
    }
    return maxTemp;
  },

  getMinTemp(station) {
    if (station.reports.length === 0) return null;
    let minTemp = station.reports[0].temperature;
    for (let i = 1; i < station.reports.length; i++) {
      if (station.reports[i].temperature < minTemp) {
        minTemp = station.reports[i].temperature;
      }
    }
    return minTemp;
  },
  
  
  
  
  
  
  
  
};