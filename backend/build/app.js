"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const envConfig_1 = require("./envConfig");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// testing endpoint
app.get("/", (req, res) => {
    res.send("HELLO from SERVER on PORT 5000");
});
app.get("/about", (req, res) => {
    res.send("my about page");
});
// Connection to MongoDB cities-api-db, creating server
mongoose_1.default
    .connect(envConfig_1.MONGODB_URI)
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log("Server running on port: " + PORT));
})
    .catch((e) => console.log(e));
