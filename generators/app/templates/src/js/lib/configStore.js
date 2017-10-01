import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from 'reducers';

const loggerMiddleware = createLogger({ predicate: () => __DEV__ });
const devToolsMiddleware = process.env.NODE_ENV !== 'production' && DevTools.instrument() || null;

export function configStore (initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ),
        devToolsMiddleware
    );

    return createStore(reducer, initialState, enhancer);
}
