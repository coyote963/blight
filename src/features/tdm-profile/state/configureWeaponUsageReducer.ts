import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CallState } from "../../../models/DataState";
import { WeaponUsage } from "../../../models/WeaponUsage";
import { getWeaponUsage } from "../../../services/dysonApi";
import {  ProfileState } from "../TdmProfileSlice";

export const fetchWeaponUsage = createAsyncThunk("profile/fetchWeaponUsage", 
    async (playerId: string) => {
        const response = await getWeaponUsage(playerId);
        return response.data as WeaponUsage[]; 
})

export const configureWeaponUsageReducers = (builder: ActionReducerMapBuilder<ProfileState>) => {
    builder.addCase(fetchWeaponUsage.fulfilled, (state, action) => {
        state.weaponUsage.data = action.payload;
        state.weaponUsage.callState = CallState.LOADED;
    })
    builder.addCase(fetchWeaponUsage.rejected, (state, action) => {
        state.weaponUsage.error = action.error;
        state.weaponUsage.callState = CallState.ERROR;
    })
    builder.addCase(fetchWeaponUsage.pending, (state, action) => {
        state.weaponUsage.callState = CallState.LOADING;
    })
}
    