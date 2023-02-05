"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Button_module_css_1 = __importDefault(require("./Button.module.css"));
const Button = ({ children, to, type = "button", size = "big", onClick, }) => {
    const Component = to ? react_router_dom_1.Link : "button";
    const buttonType = to ? undefined : type;
    return (react_1.default.createElement(Component, { to: to !== null && to !== void 0 ? to : "", type: buttonType, className: `${Button_module_css_1.default.button} ${Button_module_css_1.default[`button--${size}`]}`, onClick: onClick }, children));
};
exports.default = Button;
