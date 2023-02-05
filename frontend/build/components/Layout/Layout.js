"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Layout_module_css_1 = __importDefault(require("./Layout.module.css"));
const Header_1 = __importDefault(require("../Header/Header"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
const Layout = ({ children }) => {
    return (react_1.default.createElement("div", { className: Layout_module_css_1.default.Layout },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("main", { className: Layout_module_css_1.default.Layout__main }, children),
        react_1.default.createElement(Footer_1.default, null)));
};
exports.default = Layout;
