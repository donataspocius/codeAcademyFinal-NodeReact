import thunk from "redux-thunk";
import localStorage from "./localStorage";

const middlewares = [thunk, localStorage];

export default middlewares;
