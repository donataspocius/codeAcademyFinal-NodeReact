"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApiData = exports.getCityData = exports.getCitiesIdList = void 0;
const constants_1 = require("../constants");
const getCitiesIdList = (countryName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // fetching data
        let apiData = yield (0, exports.getApiData)(countryName);
        // getting city ids array
        const topCities = apiData.data.attributes.top_cities_and_towns;
        const cityIds = topCities.map((city) => city.id);
        return cityIds;
    }
    catch (error) {
        console.log("error fetching API data: ", error);
    }
});
exports.getCitiesIdList = getCitiesIdList;
const getCityData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        // getting city detailed data
        let apiData = yield (0, exports.getApiData)(id);
        // getting city data
        const cityId = apiData.data.id;
        const cityName = apiData.data.attributes.name;
        const photoId = ((_e = (_d = (_c = (_b = (_a = apiData.data) === null || _a === void 0 ? void 0 : _a.relationships) === null || _b === void 0 ? void 0 : _b.photos) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.id) ||
            apiData.included[0].relationships.featured_photo.data.id;
        const photoDataArray = apiData.included;
        const photoObj = photoDataArray.filter((obj) => obj.id === photoId);
        const photoUrl = photoObj[0].attributes.image.large;
        const population = apiData.data.attributes.population;
        const coordinates = {
            lat: apiData.data.attributes.latitude,
            long: apiData.data.attributes.longitude,
        };
        const checkInCount = apiData.data.attributes.check_in_count;
        const averageRating = apiData.data.attributes.average_rating;
        const airbnbUrl = apiData.data.attributes.airbnb_url;
        const carRentalUrl = apiData.data.attributes.kayak_car_rental_url;
        const cityGuideUrl = apiData.data.attributes.getyourguide_url;
        const cityData = {
            name: cityName,
            photoUrl: photoUrl,
            id: cityId,
            population,
            coordinates,
            checkInCount,
            averageRating,
            airbnbUrl,
            carRentalUrl,
            cityGuideUrl,
        };
        return cityData;
    }
    catch (error) {
        console.log("error fetching API data (getCityData): ", error);
    }
});
exports.getCityData = getCityData;
const getApiData = (idOrName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response = yield fetch(constants_1.API_URL.getData(idOrName), {
            method: "GET",
            headers: {
                Authorization: "Basic " + constants_1.API_SECRET,
            },
        });
        let apiData = yield response.json();
        return apiData;
    }
    catch (error) {
        console.log("error fetching API data (getApiData()): ", error);
    }
});
exports.getApiData = getApiData;
