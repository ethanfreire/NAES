import { AnyAction } from "redux";
import { Action, ActionWithPayload, Matchable } from "./reducer.types";

//action with payload
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

//action WITHOUT payload
export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

//BASE createAction 
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

//Action with only type
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

//Action with type & any additional parameters 
export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

//BASE withMatcher 
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}
