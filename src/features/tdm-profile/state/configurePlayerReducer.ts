import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CallState } from "../../../models/DataState";
import { Player } from "../../../models/Player";
import { getPlayerProfile } from "../../../services/dysonApi";
import {  ProfileState } from "../TdmProfileSlice";

export const fetchPlayer = createAsyncThunk("profile/fetchPlayer", 
    async (playerId: string) => {
        const response = await getPlayerProfile(playerId);
        return response.data as Player; 
})

export const configurePlayerReducers = (builder: ActionReducerMapBuilder<ProfileState>) => {
    builder.addCase(fetchPlayer.fulfilled, (state, action) => {
        state.player.data = action.payload;
        state.player.callState = CallState.LOADED;
    })
    builder.addCase(fetchPlayer.rejected, (state, action) => {
        state.player.error = action.error;
        state.player.callState = CallState.ERROR;
    })
    builder.addCase(fetchPlayer.pending, (state, action) => {
        state.player.callState = CallState.LOADING;
    })
}
    