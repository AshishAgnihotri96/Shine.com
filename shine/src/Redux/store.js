import {reducer  as AuthReducer} from "./reducer";
import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk"
const rootReducer=combineReducers({AuthReducer})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
export const store =legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk))); 