// Selector files should be either explicitly paired or considered to be
// paired 1:1 with reducer files

// a selector is any function used to manipulate state data into useful props
// NOTE: it's probably a good idea to memoize selectors for performance.
// (e.g. only run the selector if inputs have changed from previous call)
// Reselect is a library that's useful for this.
export const getSelectedEntities = (entities, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return entities;
    case 'SHOW_SELECTED':
      return entities.filter(entity => entity.isSelected);
    case 'HIDE_ALL':
      return [];
    default:
      return entities;
  }
}
