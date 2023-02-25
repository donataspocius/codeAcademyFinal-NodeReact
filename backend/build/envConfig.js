"use strict";
// this is fix for TS -> loading environement variables when running the server with typescript and node.js
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_LOGIN_PASSWORD = exports.API_LOGIN_USERNAME = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
_a = process.env, exports.API_LOGIN_USERNAME = _a.API_LOGIN_USERNAME, exports.API_LOGIN_PASSWORD = _a.API_LOGIN_PASSWORD;
