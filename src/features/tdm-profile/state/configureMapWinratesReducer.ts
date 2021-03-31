import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CallState } from "../../../models/DataState";
import { Winrate } from "../../../models/MapWinrate";
import { getMapWinrate } from "../../../services/dysonApi";
import {  ProfileState } from "../TdmProfileSlice";


export const fetchMapWinrates = createAsyncThunk("profile/fetchMapWinrates",
    async (playerId: string) => {
        const response = await getMapWinrate(playerId);
        return response.data as Winrate[];
})

export const configureMapWinratesReducers = (builder: ActionReducerMapBuilder<ProfileState>) => {
    builder.addCase(fetchMapWinrates.fulfilled, (state, action) => {
        state.mapWinrate.data = action.payload;
        state.mapWinrate.callState = CallState.LOADED;
    })
    builder.addCase(fetchMapWinrates.rejected, (state, action) => {
        state.mapWinrate.error = action.error;
        state.mapWinrate.callState = CallState.ERROR;
    })
    builder.addCase(fetchMapWinrates.pending, (state, action) => {
        state.mapWinrate.callState = CallState.LOADING;
    })

}
    