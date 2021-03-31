import { ApplicationState } from "../../../app/store";

export const tdmRatingNodeSelector = (state: ApplicationState) => state.profile.ratingNodes.data?.series;
export const tdmRatingNodeCallStateSelector = (state: ApplicationState) => state.profile.ratingNodes.callState;

export const tdmWeaponUsageCallStateSelector = (state: ApplicationState) => state.profile.weaponUsage.callState;
export const tdmWeaponUsageSelector = (state: ApplicationState) => state.profile.weaponUsage.data;

export const tdmWinratesSelector = (state: ApplicationState) => state.profile.mapWinrate.data;
export const tdmWinratesCallStateSelector = (state: ApplicationState) => state.profile.mapWinrate.callState;

export const tdmLoadoutsSelector = (state: ApplicationState) => state.profile.loadouts.data;
export const tdmLoadoutsCallStateSelector = (state: ApplicationState) => state.profile.loadouts.callState;

export const tdmProfileSelector = (state: ApplicationState) => state.profile.tdmProfile.data;
export const tdmProfileCallStateSelector = (state: ApplicationState) => state.profile.tdmProfile.callState;

export const playerSelector = (state: ApplicationState) => state.profile.player.data;
export const playerCallStateSelector = (state: ApplicationState) => state.profile.player.callState;


