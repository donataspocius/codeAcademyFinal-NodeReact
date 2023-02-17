import thunk from "redux-thunk";
import localStorage from "./localStorage";
import databaseStorage from "./databaseStorage";

const middlewares = [thunk, localStorage, databaseStorage];

export default middlewares;
