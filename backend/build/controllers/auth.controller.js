"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const envConfig_1 = require("./envConfig");
// create new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // getting user data
    const receivedUserData = req.body;
    try {
        // checking if user by that email already exists
        const userExist = yield user_model_1.default.findOne({ email: receivedUserData.email });
        if (!userExist) {
            const hashedPassword = yield bcrypt_1.default.hash(receivedUserData.password, 11);
            const preparedUserData = Object.assign(Object.assign({}, receivedUserData), { password: hashedPassword });
            const newUser = new user_model_1.default(preparedUserData);
            const newUserSaved = yield newUser.save();
            const accessToken = jsonwebtoken_1.default.sign(receivedUserData.username, envConfig_1.ACCESS_TOKEN_SECRET);
            res.status(201).json({
                status: "success",
                message: "User created!",
                authToken: accessToken,
                userId: newUserSaved._id,
            });
        }
        else {
            res.status(400).json({
                status: "fail",
                message: "User with given email already exists",
            });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ status: "fail", message: `Error creating user: ${error}` });
    }
});
exports.createUser = createUser;
// login user
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // CHECK IF USER EXISTS
    const user = yield user_model_1.default.findOne({ email: req.body.email });
    // AUTHENTICATE USER
    if (user) {
        try {
            const passwordCorrect = yield bcrypt_1.default.compare(req.body.password, user.password);
            if (passwordCorrect) {
                const accessToken = jsonwebtoken_1.default.sign(user.username, envConfig_1.ACCESS_TOKEN_SECRET);
                res.status(200).json({
                    status: "success",
                    accessToken,
                    userId: user._id,
                });
            }
            else {
                res.status(400).json({ status: "fail", message: "wrong credentials" });
            }
        }
        catch (error) {
            res
                .status(500)
                .json({ status: "fail", message: `Error signing in user: ${error}` });
        }
    }
    else {
        res.status(404).json({ status: "fail", message: "user not found!" });
    }
});
exports.loginUser = loginUser;
