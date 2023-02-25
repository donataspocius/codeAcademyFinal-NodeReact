"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const envConfig_1 = require("../controllers/envConfig");
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token) {
        jsonwebtoken_1.default.verify(token, envConfig_1.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err)
                res.status(403);
            req.user = user;
            next();
        });
    }
    else {
        res
            .status(401)
            .json({ status: "fail", message: "not authorized: no token provided" });
    }
}
exports.authenticateToken = authenticateToken;
