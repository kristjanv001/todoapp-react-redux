import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { saveState, loadState } from "../localStorage";
import { throttle } from "lodash";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);
console.log("state as the app loads: ", store.getState());
export default store;

store.subscribe(() => {
  console.log("state updates: ", store.getState());
});

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 2000)
);
