import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CallState } from "../../../models/DataState";
import { TdmPlayerDetails } from "../../../models/tdm/TdmPlayerDetails";
import { getTdmProfile } from "../../../services/dysonApi";
import {  ProfileState } from "../TdmProfileSlice";

export const fetchTdmProfile = createAsyncThunk("profile/fetchTdmProfile", 
    async (playerId: string) => {
        const response = await getTdmProfile(playerId);
        return response.data as TdmPlayerDetails; 
})

export const configureTdmProfileReducers = (builder: ActionReducerMapBuilder<ProfileState>) => {
    builder.addCase(fetchTdmProfile.fulfilled, (state, action) => {
        state.tdmProfile.data = action.payload;
        state.tdmProfile.callState = CallState.LOADED;
    })
    builder.addCase(fetchTdmProfile.rejected, (state, action) => {
        state.tdmProfile.error = action.error;
        state.tdmProfile.callState = CallState.ERROR;
    })
    builder.addCase(fetchTdmProfile.pending, (state, action) => {
        state.tdmProfile.callState = CallState.LOADING;
    })
}
    