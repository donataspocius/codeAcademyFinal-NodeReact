"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CityCard_1 = __importDefault(require("../../components/CityCard/CityCard"));
const Hero_1 = __importDefault(require("../../components/Hero/Hero"));
const Homepage_module_css_1 = __importDefault(require("./Homepage.module.css"));
const Homepage = () => {
    let mockData = [
        {
            id: "1",
            name: "New York, NY",
            photoUrl: "https://cdn.roadgoat.com/uploads/photo/image/608/large_travel-guide-of-new-york-ny-usa-original.jpg",
        },
        {
            id: "2",
            name: "Honolulu, HI",
            photoUrl: "https://cdn.roadgoat.com/uploads/photo/image/417/large_travel-guide-of-honolulu-hi-usa-original.jpg",
        },
        {
            id: "3",
            name: "Yosemite Village, CA",
            photoUrl: "https://cdn.roadgoat.com/uploads/photo/image/1913/large_Yosemite.jpeg",
        },
        {
            id: "4",
            name: "Burlington, VT",
            photoUrl: "https://cdn.roadgoat.com/uploads/photo/image/345/large_travel-guide-of-burlington-vt-usa-original.jpg",
        },
        {
            id: "5",
            name: "South San Francisco, CA",
            photoUrl: "https://cdn.roadgoat.com/uploads/photo/image/2161/large_38904301632_a915ab07d8_o.jpg",
        },
        {
            id: "6",
            name: "Lahaina, HI",
            photoUrl: "https://cdn.roadgoat.com/uploads/photo/image/1931/large_lahaina.jpeg",
        },
        {
            id: "7",
            name: "West Yellowstone, MT",
            photoUrl: "https://cdn.roadgoat.com/uploads/photo/image/1929/large_WY.jpeg",
        },
    ];
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Hero_1.default, null),
        react_1.default.createElement("div", { className: Homepage_module_css_1.default.horizontalLine }),
        react_1.default.createElement("div", { className: Homepage_module_css_1.default.cityCardsContainer }, mockData.map((city) => {
            return (react_1.default.createElement(CityCard_1.default, { key: city.id, id: city.id, name: city.name, photoUrl: city.photoUrl }));
        }))));
};
exports.default = Homepage;
