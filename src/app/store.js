import { configureStore } from '@reduxjs/toolkit';
import { portfolioApi } from '../services/portfolioApi';
import themeReducer from '../features/theme/themeSlice';
import { themeListener } from '../features/theme/themeListener';
import uiReducer from '../features/navigation/uiSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ui: uiReducer,
    [portfolioApi.reducerPath]: portfolioApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(themeListener.middleware).concat(portfolioApi.middleware),
});
