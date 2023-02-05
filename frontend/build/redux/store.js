"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const middlewares_1 = __importDefault(require("./middlewares/middlewares"));
const content_1 = __importDefault(require("./content"));
const auth_1 = __importDefault(require("./auth"));
const store = (0, toolkit_1.configureStore)({
    reducer: {
        [content_1.default.constants.MODULE_NAME]: content_1.default.contentReducer,
        [auth_1.default.constants.MODULE_NAME]: auth_1.default.authReducer,
    },
    middleware: (getDefaultMiddleware) => {
        console.log("getDefaultMiddleware: ", getDefaultMiddleware());
        return getDefaultMiddleware({
            thunk: true,
            serializableCheck: false,
            imutableCheck: false,
        }).concat(middlewares_1.default);
    },
    devTools: true,
});
exports.default = store;
