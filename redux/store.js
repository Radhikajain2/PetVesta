import {configureStore} from '@reduxjs/toolkit';
import sliceData from './slice';

const store = configureStore({
  reducer: {
    newSlice: sliceData,
  },
});

export {store};
