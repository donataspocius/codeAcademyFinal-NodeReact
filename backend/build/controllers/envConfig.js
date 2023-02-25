"use strict";
// this is fix for TS -> loading environement variables when running the server with typescript and node.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACCESS_TOKEN_SECRET = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
