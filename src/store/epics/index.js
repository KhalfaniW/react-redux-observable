import { combineEpics } from "redux-observable";
import { counterEpics } from "./counterEpics";

const rootEpic = combineEpics(...counterEpics);

export default rootEpic;
