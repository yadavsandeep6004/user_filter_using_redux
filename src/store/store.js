
import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from '@redux-saga/core'

import reducer from './reducer'
import wacherSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
   composeEnhancers( applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(wacherSaga)

export default store
