"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_URL = exports.API_SECRET = void 0;
const envConfig_1 = require("./envConfig");
const buffer_1 = require("buffer");
// export let API_SECRET = btoa(`${API_LOGIN_USERNAME}:${API_LOGIN_PASSWORD}`);
exports.API_SECRET = buffer_1.Buffer.from(`${envConfig_1.API_LOGIN_USERNAME}:${envConfig_1.API_LOGIN_PASSWORD}`).toString("base64");
exports.API_URL = {
    getData: (idOrName) => `https://api.roadgoat.com/api/v2/destinations/${idOrName}`,
};
