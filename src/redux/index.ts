import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { gameSlice } from "./gameSlice";

const rootReducer = combineReducers({
    game: gameSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>