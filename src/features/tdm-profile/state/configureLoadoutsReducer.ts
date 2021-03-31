import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CallState } from "../../../models/DataState";
import { Loadout } from "../../../models/Loadout";
import { getLoadouts } from "../../../services/dysonApi";
import {  ProfileState } from "../TdmProfileSlice";



export const fetchLoadouts = createAsyncThunk("profile/fetchLoadouts",
    async (playerId: string) => {
        const response = await getLoadouts(playerId);
        return response.data as Loadout[];
    }
)

export const configureLoadoutsReducers = (builder: ActionReducerMapBuilder<ProfileState>) => {
    
    builder.addCase(fetchLoadouts.fulfilled, (state, action) => {
        state.loadouts.data = action.payload;
        state.loadouts.callState = CallState.LOADED;
    })
    builder.addCase(fetchLoadouts.rejected, (state, action) => {
        state.loadouts.error = action.error;
        state.loadouts.callState = CallState.ERROR;
    })
    builder.addCase(fetchLoadouts.pending, (state, action) => {
        state.loadouts.callState = CallState.LOADING;
    })

}
    