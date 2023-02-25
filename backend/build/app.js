"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const envConfig_1 = require("./models/envConfig"); // importing string URI set for TS
const auth_middlewares_1 = require("./middlewares/auth.middlewares");
const auth_controller_1 = require("./controllers/auth.controller");
const content_controller_1 = require("./controllers/content.controller");
const user_controller_1 = require("./controllers/user.controller");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 7000;
// MIDDLEWARES
app.use(express_1.default.json()); // use JSON
app.use((0, cors_1.default)());
// ENDPOINTS
// --- LOGIN ENDPOINTS
// create new user in database (MongoDB: users)
app.post("/auth/signup", auth_controller_1.createUser);
// login user
app.post("/auth/login", auth_controller_1.loginUser);
// --- USER ENPOINTS
// GET user data FOR DEVELOPMENT ONLY
app.get("/user/:userId", auth_middlewares_1.authenticateToken, user_controller_1.getUserLists);
// app.get("/user/:userId", authenticateToken, getUserData);
// GET user visited cities data
app.get("/user/visitedCities/:userId", user_controller_1.getUserVisitedCities);
// GET user wish cities data
app.get("/user/wishCities/:userId", user_controller_1.getUserWishCities);
// UPDATE user visited/wish lists
app.put("/user/:userId", user_controller_1.updateUserData);
// --- CONTENT ENDPOINTS
// GET all country cities data --> HOME page initial load
app.get("/cities/:country", content_controller_1.getCitiesList);
// GET country data --> FOR DEVELOPING ONLY
app.get("/:country", content_controller_1.getCountryData);
// CONNECTION TO MongoDB cities-api-db, CREATE SERVER
mongoose_1.default
    .connect(envConfig_1.MONGODB_URI)
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log("Server running on port: " + PORT));
})
    .catch((e) => console.log(e));
