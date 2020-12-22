import {createStore,combineReducers, applyMiddleware,compose} from  'redux'
import comicReducer from './reducers/comicReducer';
import characterReducer from './reducers/character';
import thunk from 'redux-thunk'


const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action)
            console.log('[Middleware]', store.getState())
            return result
           
        }
    }
  }


const rootReducer = combineReducers({
comics: comicReducer,
characters: characterReducer
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger, thunk)))


export default store;