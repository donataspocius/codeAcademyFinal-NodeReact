"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hero_module_css_1 = __importDefault(require("./Hero.module.css"));
const Button_1 = __importDefault(require("../Button/Button"));
const react_1 = __importDefault(require("react"));
const Hero = () => {
    return (react_1.default.createElement("div", { className: Hero_module_css_1.default.heroBanner },
        react_1.default.createElement("div", { className: Hero_module_css_1.default.heroBannerContent },
            react_1.default.createElement("h1", null, "TIME FOR AN ADVENTURE?"),
            react_1.default.createElement(Button_1.default, { size: "big", onClick: () => console.log("HOP-IN button clicked") }, "HOP IN"))));
};
exports.default = Hero;
