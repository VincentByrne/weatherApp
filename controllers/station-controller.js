import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import { weatherMapping } from "../utils/weather-utils.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const shortestReport = stationAnalytics.getShortestReport(station);
    const mostRecentCode = stationAnalytics.getMostRecentWeatherCode(station);
    const weatherDescription = stationAnalytics.getWeatherDescription(mostRecentCode);
    const weatherIcon = stationAnalytics.getWeatherIcon(mostRecentCode);
    const maxTemp = stationAnalytics.getMaxTemp(station);
    const minTemp = stationAnalytics.getMinTemp(station);
    
    const viewData = {
      title: "Station",
      station: station,
      shortestReport: shortestReport,
      mostRecentCode: mostRecentCode,
      weatherDescription: weatherDescription,
      weatherIcon: weatherIcon,
      maxTemp: maxTemp,
      minTemp: minTemp,
    };

    response.render("station-view", viewData);
  },
  
  async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReport = {
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
};