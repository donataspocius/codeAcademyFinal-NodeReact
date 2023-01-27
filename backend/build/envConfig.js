"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
_a = process.env, exports.PORT = _a.PORT, exports.MONGODB_URI = _a.MONGODB_URI;
