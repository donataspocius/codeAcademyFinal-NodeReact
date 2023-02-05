"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Header_module_css_1 = __importDefault(require("./Header.module.css"));
const Go_svg_1 = __importDefault(require("../../imgs/Go.svg"));
const Button_1 = __importDefault(require("../Button/Button"));
const Header = () => {
    return (react_1.default.createElement("div", { className: Header_module_css_1.default.header },
        react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
            react_1.default.createElement("img", { className: Header_module_css_1.default.logo, src: Go_svg_1.default, alt: "company logo" })),
        react_1.default.createElement(Button_1.default, { size: "big", onClick: () => console.log("button clicked") }, "SIGN IN")));
};
exports.default = Header;
