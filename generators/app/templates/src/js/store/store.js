import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import DevTools from 'containers/core/DevTools';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({ predicate: () => process.env.NODE_ENV === 'development' });
const devToolsMiddleware = DevTools.instrument();

export function configStore (initialState) {
  const enhancer = process.env.NODE_ENV !== 'production' ?
    compose(
      applyMiddleware(
        sagaMiddleware,
        loggerMiddleware
      ),
      devToolsMiddleware
    ) :
    compose(applyMiddleware(
      sagaMiddleware,
      loggerMiddleware
    ));

  const store = createStore(reducers, initialState, enhancer);
  sagaMiddleware.run(sagas);
  return store;
}

