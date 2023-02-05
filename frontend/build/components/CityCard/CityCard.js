"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CityCard_module_css_1 = __importDefault(require("./CityCard.module.css"));
const CityCard = ({ id, name, photoUrl }) => {
    return (react_1.default.createElement("div", { className: CityCard_module_css_1.default.cardContainer },
        react_1.default.createElement("picture", { className: CityCard_module_css_1.default.picture },
            react_1.default.createElement("source", { srcSet: photoUrl }),
            react_1.default.createElement("img", { src: photoUrl, alt: photoUrl })),
        react_1.default.createElement("h1", { className: CityCard_module_css_1.default.header }, name)));
};
exports.default = CityCard;
