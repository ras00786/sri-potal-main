import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '@app/store/reducers/auth';
import { uiSlice } from '@app/store/reducers/ui';
import { createLogger } from 'redux-logger';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const data = JSON.parse(serializedState);
    return data;
  } catch (error) {
    console.log('Error in load state', error);
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};

const persistedState = loadState();

const reducer = {
  auth: authSlice.reducer,
  ui: uiSlice.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger()),
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
