import {
    createSlice,
} from '@reduxjs/toolkit'
import { DataState, CallState } from '../../models/DataState'
import { RatingNodeHistory } from '../../models/RatingNode'
import { WeaponUsage } from '../../models/WeaponUsage'
import { Winrate } from '../../models/MapWinrate'
import { Loadout } from '../../models/Loadout'
import { TdmPlayerDetails } from '../../models/tdm/TdmPlayerDetails'
import { configureTdmHistoryReducers } from './state/configureTdmHistoryReducer'
import { configureWeaponUsageReducers } from './state/configureWeaponUsageReducer'
import { configureMapWinratesReducers } from './state/configureMapWinratesReducer'
import { configureLoadoutsReducers } from './state/configureLoadoutsReducer'
import { configureTdmProfileReducers } from './state/configureTdmProfileReducer'
import { Player } from '../../models/Player'
import { configurePlayerReducers } from './state/configurePlayerReducer'
import { ApplicationState } from '../../app/store'

export interface ProfileState {
    playerId: string | null,
    ratingNodes : DataState<RatingNodeHistory>,
    weaponUsage : DataState<WeaponUsage[]>,
    mapWinrate : DataState<Winrate[]>,
    loadouts: DataState<Loadout[]>,
    tdmProfile: DataState<TdmPlayerDetails>,
    player: DataState<Player>
}

const initialState : ProfileState = {
    playerId: null,
    ratingNodes: {
        callState: CallState.INIT
    },
    weaponUsage: {
        callState: CallState.INIT
    },
    mapWinrate: {
        callState: CallState.INIT
    },
    loadouts: {
        callState: CallState.INIT
    },
    tdmProfile: {
        callState: CallState.INIT
    },
    player: {
        callState: CallState.INIT
    }
}

const tdmProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setFetchId: (state, action) => {
            state.playerId = action.payload;
        },
        resetAll: () => initialState
    },
    extraReducers: builder => {
        configureTdmHistoryReducers(builder);
        configureWeaponUsageReducers(builder);
        configureMapWinratesReducers(builder);
        configureLoadoutsReducers(builder);
        configureTdmProfileReducers(builder);
        configurePlayerReducers(builder);
    }
    
})
export const { setFetchId, resetAll } = tdmProfileSlice.actions;

export const idSelector = (state: ApplicationState) => state.profile.playerId;

export default tdmProfileSlice.reducer
