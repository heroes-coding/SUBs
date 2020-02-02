import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer, { UserState } from './user.era'

const composeEnhancers = composeWithDevTools({});

export interface StoreState {
  user: UserState,
}

const rootReducer = combineReducers({
  user: userReducer,
})

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
)

export default store