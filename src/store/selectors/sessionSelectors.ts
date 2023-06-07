import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '..';

const sessionStateSelector = (rootReducer: RootState) => rootReducer.session;

export const isAuthenticatedSelector = createSelector(
  sessionStateSelector,
  stateProp => stateProp.authenticated,
);

export const isUserRegisteredSelector = createSelector(
  sessionStateSelector,
  stateProp => stateProp.userRegistered,
);

export const selectUserSelector = createSelector(
  sessionStateSelector,
  stateProp => stateProp.user,
);

export const selectNavPathSelector = createSelector(
  sessionStateSelector,
  stateProp => stateProp.navPath,
);
