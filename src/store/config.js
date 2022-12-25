import { combineReducers, createStore } from "redux";
import { datGheReducer } from "./reducers/datgheReducer";

const rootReducer = combineReducers({
  datGheReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// SHALLOW COMPARE (===) (so sánh đại chỉ vùng nhớ)

// oldState và newState => oldState === newState

// SHALLOW COMPARE và DEEP COMPARE(so sánh địa chỉ vung nhớ và so sánh lun giá trị bên trong địa chỉ vùng nhớ)