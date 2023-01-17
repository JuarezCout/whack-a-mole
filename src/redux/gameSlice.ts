import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Score } from "../types";
import { RootState } from "./index";

type initialStateType = {
    scoreboard: Score[]
};

const initialState: initialStateType = {
    scoreboard: [
        { playerName: "JUA", score: 500 },
        { playerName: "REZ", score: 400 },
        { playerName: "TES", score: 300 },
        { playerName: "DUD", score: 200 },
        { playerName: "JUA", score: 100 },
        { playerName: "---", score: 0 },
        { playerName: "---", score: 0 },
        { playerName: "---", score: 0 },
        { playerName: "---", score: 0 },
        { playerName: "---", score: 0 },
    ],
}

export const fetchScoreBoard = createAsyncThunk(
    'game/fetchScoreBoard',
    async () => {
        try {
            console.log("Test")
            return null
        } catch (e) {
            console.log(e)
        }
    }
)

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        updateScoreboard: (state, action: PayloadAction<Score>) => {
            state.scoreboard.push(action.payload)
            state.scoreboard.sort(function(a,b){
                return b.score - a.score
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchScoreBoard.fulfilled, (state, action) => {
            if (action.payload) {

            }

        })
    },
});
export const { updateScoreboard } = gameSlice.actions

export const selectScoreboard = (id?: string) => (state: RootState) => state.game.scoreboard