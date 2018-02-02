import { connect } from 'react-redux';

import ExampleComponent from './ExampleComponent';

// import selectors for mapStateToProps
import {
  getSelectedEntities
} from './exampleEntitiesSelectors'

// import actions for mapDispatchToProps
import { 
  createEntity 
} from './exampleEntityActions'

// ExampleComponent props will have access to all values mapped explicitly
// in mapStateToProps and mapDispatchToProps,
// as well as all props passed when rendering <ExampleContainer />
// (available here in ownProps if needed)

const mapStateToProps = (state, ownProps) => {
  // values here should always be non-functions derived from state with a selector 
  // or taken from state directly
  return {
    entities: getSelectedEntities(state.entities, ownProps.filterType),
    errors: state.entityErrors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // values here should always be functions that dispatch an action--usually
  // a thunk action.
  // The action gets created by calling the action creator inside the
  // dispatch call arguments
  return {
    createEntity: entity => dispatch(createEntity(entity)),
  };
};

// connect the component and export it
// <ExampleComponent /> will never be used directly in a render,
// <ExampleContainer /> will.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleComponent);