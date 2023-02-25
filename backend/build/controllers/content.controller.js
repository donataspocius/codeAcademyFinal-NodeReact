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
exports.getCountryData = exports.getCitiesList = void 0;
const helperFunctions_1 = require("./helperFunctions");
const getCitiesList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const country = req.params.country;
        const cityIdsList = yield (0, helperFunctions_1.getCitiesIdList)(country); // getting every city ID of the country
        // fetching data by city ID
        const cityData = yield Promise.all(cityIdsList === null || cityIdsList === void 0 ? void 0 : cityIdsList.map((id) => __awaiter(void 0, void 0, void 0, function* () {
            const cityDataHere = yield (0, helperFunctions_1.getCityData)(String(id));
            return cityDataHere;
        })));
        res.status(200).json(cityData);
    }
    catch (error) {
        res
            .status(500)
            .json({ status: "fail", message: `Error fetching API data: ${error}` });
    }
});
exports.getCitiesList = getCitiesList;
// HELPER function to get country's data
const getCountryData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const country = req.params.country;
        const apiData = yield (0, helperFunctions_1.getApiData)(country);
        res.status(200).json({ message: "success", apiData });
    }
    catch (error) {
        res
            .status(500)
            .json({ status: "fail", message: `Error fetching API data: ${error}` });
    }
});
exports.getCountryData = getCountryData;
