import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import noteReducer from './Reducers/NoteReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ noteReducer })
const middleware = [thunk]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
