import { combineReducers } from 'redux';

import exampleEntitiesReducer from './exampleEntitiesReducer';
import exampleEntityErrorsReducer from './exampleEntityErrorsReducer';

const combinedReducer = combineReducers({
  exampleEntities: exampleEntitiesReducer,
  exampleEntityErrors: exampleEntityErrorsReducer,
});

export default combinedReducer;