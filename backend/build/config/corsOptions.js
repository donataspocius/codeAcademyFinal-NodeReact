"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allowedOrigins_1 = require("./allowedOrigins");
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins_1.allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
};
exports.default = corsOptions;
