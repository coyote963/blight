import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CallState } from "../../../models/DataState";
import { RatingNodeHistory } from "../../../models/RatingNode";
import { getTdmHistory } from "../../../services/dysonApi";
import {  ProfileState } from "../TdmProfileSlice";

export const fetchTdmHistory = createAsyncThunk("profile/fetchHistory", 
    async (playerId: string) => {
        const response = await getTdmHistory(playerId);
        return response.data as Array<RatingNodeHistory>; 
})


export const configureTdmHistoryReducers = (builder: ActionReducerMapBuilder<ProfileState>) => {
    builder.addCase(fetchTdmHistory.fulfilled, (state, action) => {
        state.ratingNodes.data = action.payload[0];
        state.ratingNodes.callState = CallState.LOADED;
    })
    builder.addCase(fetchTdmHistory.rejected, (state, action) => {
        state.ratingNodes.error = action.error;
        state.ratingNodes.callState = CallState.ERROR;
    })
    builder.addCase(fetchTdmHistory.pending, (state, action) => {
        state.ratingNodes.callState = CallState.LOADING;
    })
}
    