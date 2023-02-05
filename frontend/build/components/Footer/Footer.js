"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const creditCards_svg_1 = __importDefault(require("../../imgs/creditCards.svg"));
const Footer_module_css_1 = __importDefault(require("./Footer.module.css"));
const Footer = () => {
    return (react_1.default.createElement("div", { className: Footer_module_css_1.default.footer },
        react_1.default.createElement("p", null, "Making people homesick since 1323. Yep, that's right - for 700 years. Copyright \u00A9 2023"),
        react_1.default.createElement("img", { src: creditCards_svg_1.default, alt: "credit card logos", height: "39px" })));
};
exports.default = Footer;
