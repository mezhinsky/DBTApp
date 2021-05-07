import {createSelector} from 'reselect';

const selectFirestoreDomain = (state: any) => {
  return state.firestore;
};

const makeSelectFirestoreState = () =>
  createSelector(selectFirestoreDomain, substate => substate);

const makeSelectFSCollectionOrdered = (collection: string) =>
  createSelector(
    selectFirestoreDomain,
    substate => substate.ordered[collection],
  );

const makeSelectFSCollectionStatus = (status: string, collection: string) =>
  createSelector(
    selectFirestoreDomain,
    substate => substate.status[status][collection],
  );

export {
  selectFirestoreDomain,
  makeSelectFirestoreState,
  makeSelectFSCollectionOrdered,
  makeSelectFSCollectionStatus,
};
