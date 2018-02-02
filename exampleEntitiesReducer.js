// import all action types from action files
import {
  RECEIVE_NEW_ENTITY,
} from './exampleActions';

// this reducer only modifies the particular slice of state living under 
// exampleEntities, as defined in ./combinedReducer.js
const exampleEntitiesReducer = (state = {}, action) => {
  // freeze state in every reducer to ensure immutability 
  // (warning: this is only shallow)
  Object.freeze(state);
  // create a new state object in every reducer to ensure immutability 
  // (warning: also shallow)
  const newState = Object.assign({}, state);
  // extract relevant action payloads
  const { entity } = action;

  switch (action.type) {
    case RECEIVE_NEW_ENTITY:
      // NOTE: newState is only a shallow copy of state. Must not mutate nested values.
      newState[entity.id] = entity;
      // always return a new full version of [sliced] state from every case
      return newState
    default:
      // default to returning old state (not newState) so that components 
      // (e.g. in a componentWillReceiveProps) can easily identify state change
      // with only shallow comparison 
      // (e.g. `this.props.exampleEntities !== nextProps.exampleEntities`)
      return state;
  }
};

export default exampleEntitiesReducer;