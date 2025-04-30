import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";
import {
  incrementAsync,
  incrementAsyncSuccess,
} from "../reducers/counterReducer";

const incrementAsyncEpic = (action$) =>
  action$.pipe(
    ofType(incrementAsync.type),
    delay(1000), // Simulate API call
    map(() => incrementAsyncSuccess())
  );

export const counterEpics = [incrementAsyncEpic];
