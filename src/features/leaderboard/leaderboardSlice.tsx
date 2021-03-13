import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import { getTdmLeaderboard } from '../../services/dysonApi'
import { DataState, CallState } from '../../models/DataState'
import { Page } from '../../models/Page'
import { TDMPlayer } from '../../models/tdm/TdmPlayer'

const initialState : DataState<Page<TDMPlayer>> = {
    callState : CallState.INIT,
}
export const fetchLeaderboard = createAsyncThunk("leaderboard/fetchLeaderboard", 
    async () => {
        const response = await getTdmLeaderboard();
        return response.data as Page<TDMPlayer>; 
})

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchLeaderboard.fulfilled, (state, action) => {
            
            state.data = action.payload;
            state.callState = CallState.LOADED;
        })
        builder.addCase(fetchLeaderboard.rejected, (state, action) => {
            state.error = action.error;
            state.callState = CallState.ERROR;
        })
        builder.addCase(fetchLeaderboard.pending, (state, action) => {
            state.callState = CallState.LOADING;
        })
    }
    
})

export default leaderboardSlice.reducer