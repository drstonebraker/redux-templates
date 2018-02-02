// import ajax functions for thunk action creators.
// NOTE: all ajax functions should return promise objects (return the fetch call)
// so that response handlers can be attached in this actions file
import * as ApiUtil from '../util/api';

// create and export constants for all action types
export const RECEIVE_NEW_ENTITY = 'RECEIVE_NEW_ENTITY';
export const RECEIVE_POST_ENTITY_ERRORS = 'RECEIVE_POST_ENTITY_ERRORS';

// action creators create action objects for dispatching
// parameter can optionally be destructured for easier access in different reducers
// NOTE: all action creators should be exported for use in Containers
export const receiveNewEntity = ({entity, newRelationalEntity}) => ({
  type: RECEIVE_NEW_ENTITY,
  entity,
  otherEntity: newRelationalEntity
});

export const receivePostEntityErrors = errors => ({
  type: RECEIVE_POST_ENTITY_ERRORS,
  errors
});

// thunk action creators are for dispatching data after async requests.
// Instead of returning an object, they return a function that redux-thunk will 
// call with store.dispatch as an argument.
// This allows the function to make an async request and then dispatch a normal
// action when promise is resolved.
// NOTE: all thunk action creators should be exported for use in Containers
export const createEntity = entity => dispatch => (
  ApiUtil.postEntity(entity)
    .then(response => dispatch(receiveNewEntity(response)))
    .catch(error => dispatch(receivePostEntityErrors(error.responseJSON)))
);
