import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import { weatherMapping } from "../utils/weather-utils.js";
import dayjs from 'dayjs';


export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const shortestReport = stationAnalytics.getShortestReport(station);
    const mostRecentCode = stationAnalytics.getMostRecentWeatherCode(station);
    const weatherDescription = stationAnalytics.getWeatherDescription(mostRecentCode);
    const weatherIcon = stationAnalytics.getWeatherIcon(mostRecentCode);
    const currentTemp = stationAnalytics.getCurrentTemp(station);
    const fahrenheit = stationAnalytics.getFahrenheit(station);
    const maxTemp = stationAnalytics.getMaxTemp(station);
    const minTemp = stationAnalytics.getMinTemp(station);
    const currentWind = stationAnalytics.getCurrentWind(station);
    const currentDirection = stationAnalytics.getCurrentDirection(station);
    const maxWind = stationAnalytics.getMaxWind(station);
    const minWind = stationAnalytics.getMinWind(station);
    const currentPressure = stationAnalytics.getCurrentPressure(station);
    const maxPressure = stationAnalytics.getMaxPressure(station);
    const minPressure = stationAnalytics.getMinPressure(station);
    const dateFormat = dayjs().format('HH:MM DD/MM/YYYY');
    
    const viewData = {
      title: "Station",
      station: station,
      shortestReport: shortestReport,
      mostRecentCode: mostRecentCode,
      weatherDescription: weatherDescription,
      weatherIcon: weatherIcon,
      currentTemp: currentTemp,
      fahrenheit: fahrenheit,
      maxTemp: maxTemp,
      minTemp: minTemp,
      currentWind : currentWind,
      currentDirection : currentDirection,
      maxWind : maxWind,
      minWind : minWind,
      currentPressure : currentPressure,
      maxPressure : maxPressure,
      minPressure : minPressure,
      dateFormat : dateFormat,
      
    };

    response.render("station-view", viewData);
  },
  
  async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const dateFormat = dayjs().format('HH:mm DD/MM/YYYY');
    
    const newReport = {
      date: dateFormat,
      code: request.body.code,
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: Number(request.body.windDirection),
      pressure: Number(request.body.pressure),
    };
    console.log(`adding report ${newReport.code}`);
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },
  
  async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReport(reportId);
    response.redirect("/station/" + stationId);
  },
  
  async showSummary(request, response) {
    const stations = await stationStore.getAllStations();
    const viewData = {
      title: "Station Summary",
      stations: stations,
    };
    response.render("station-summary-view", viewData);
  },
};