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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserLists = exports.updateUserData = exports.getUserWishCities = exports.getUserVisitedCities = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const helperFunctions_js_1 = require("./helperFunctions.js");
const getUserVisitedCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    try {
        const user = yield user_model_1.default.findById(id);
        if (!user) {
            res
                .status(404)
                .json({ status: "fail", message: "User with given id not found" });
            return;
        }
        const userVisitedCitiesList = user === null || user === void 0 ? void 0 : user.visitedCities;
        const userVisitedCitiesData = yield Promise.all(userVisitedCitiesList === null || userVisitedCitiesList === void 0 ? void 0 : userVisitedCitiesList.map((id) => __awaiter(void 0, void 0, void 0, function* () {
            const userCityData = yield (0, helperFunctions_js_1.getCityData)(String(id));
            return userCityData;
        })));
        res.status(200).json(userVisitedCitiesData);
    }
    catch (error) {
        console.log("getUserData error -->", error);
    }
});
exports.getUserVisitedCities = getUserVisitedCities;
const getUserWishCities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    try {
        const user = yield user_model_1.default.findById(id);
        if (!user) {
            res
                .status(404)
                .json({ status: "fail", message: "User with given id not found" });
            return;
        }
        const userWishCitiesList = user === null || user === void 0 ? void 0 : user.wishCities;
        const userWishCitiesData = yield Promise.all(userWishCitiesList === null || userWishCitiesList === void 0 ? void 0 : userWishCitiesList.map((id) => __awaiter(void 0, void 0, void 0, function* () {
            const userCityData = yield (0, helperFunctions_js_1.getCityData)(String(id));
            return userCityData;
        })));
        res.status(200).json(userWishCitiesData);
    }
    catch (error) {
        console.log("getUserData error -->", error);
    }
});
exports.getUserWishCities = getUserWishCities;
const updateUserData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    const newUserData = req.body;
    try {
        yield user_model_1.default.findByIdAndUpdate(id, newUserData);
        const updatedUser = yield user_model_1.default.findById(id);
        res.json({
            status: "success",
            visitedCities: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.visitedCities,
            wishCities: updatedUser === null || updatedUser === void 0 ? void 0 : updatedUser.wishCities,
        });
    }
    catch (error) {
        console.log("UPDATE USER error -->", error);
    }
});
exports.updateUserData = updateUserData;
const getUserLists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.userId;
    try {
        const user = yield user_model_1.default.findById(id);
        if (!user) {
            res
                .status(404)
                .json({ status: "fail", message: "User with given id not found" });
            return;
        }
        res.json({
            status: "success",
            userLists: {
                wishCities: user.wishCities,
                visitedCities: user.visitedCities,
            },
        });
    }
    catch (error) {
        console.log("getUserData error -->", error);
    }
});
exports.getUserLists = getUserLists;
