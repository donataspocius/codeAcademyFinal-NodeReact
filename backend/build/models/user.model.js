"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Please enter your email"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    userProfile: String,
    visitedCities: [],
    wishCities: [],
});
const User = mongoose_1.default.model("user", userSchema);
exports.default = User;
