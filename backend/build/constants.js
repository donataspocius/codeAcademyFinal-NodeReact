"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URL = exports.API_SECRET = void 0;
const envConfig_1 = require("./envConfig");
exports.API_SECRET = btoa(`${envConfig_1.API_LOGIN_USERNAME}:${envConfig_1.API_LOGIN_PASSWORD}`);
exports.API_URL = {
    getData: (idOrName) => `https://api.roadgoat.com/api/v2/destinations/${idOrName}`,
};
