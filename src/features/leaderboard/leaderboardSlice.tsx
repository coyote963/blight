import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import { getTdmLeaderboard } from '../../services/dysonApi'
import { DataState, CallState } from '../../models/DataState'
import { Page } from '../../models/Page'
import { TDMPlayer } from '../../models/tdm/TdmPlayer'
import { ApplicationState } from '../../app/store'

export interface LeaderboardState {
    leaderboardData : DataState<Page<TDMPlayer>>,
    page: number
}

const initialState : LeaderboardState= {
    leaderboardData : {
        callState: CallState.INIT,
    },
    page: 1
}
export const fetchLeaderboard = createAsyncThunk("leaderboard/fetchLeaderboard", 
    async (currentPage: number) => {
        const response = await getTdmLeaderboard(currentPage);
        return response.data as Page<TDMPlayer>; 
})

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchLeaderboard.fulfilled, (state, action) => {
            state.leaderboardData.data = action.payload;
            state.leaderboardData.callState = CallState.LOADED;
        })
        builder.addCase(fetchLeaderboard.rejected, (state, action) => {
            state.leaderboardData.error = action.error;
            state.leaderboardData.callState = CallState.ERROR;
        })
        builder.addCase(fetchLeaderboard.pending, (state, action) => {
            state.leaderboardData.callState = CallState.LOADING;
        })
    }
    
})

export default leaderboardSlice.reducer

export const tdmPlayerSelector = (state: ApplicationState) => state.leaderboard.leaderboardData.data?.docs; 
export const callStateSelector = (state: ApplicationState) => state.leaderboard.leaderboardData.callState;
export const pageSelector = (state: ApplicationState) => state.leaderboard.leaderboardData.data?.page || 1; 
export const pageSizeSelector = (state: ApplicationState) => state.leaderboard.leaderboardData.data?.limit || 10;
export const totalPageSelector = (state: ApplicationState) => state.leaderboard.leaderboardData.data?.totalPages || 10;