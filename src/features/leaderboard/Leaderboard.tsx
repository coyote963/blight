import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CallState } from '../../models/DataState';
import { TDMPlayer } from '../../models/tdm/TdmPlayer';
import { fetchLeaderboard } from './leaderboardSlice';

export function Leaderboard() {
    const dispatch = useDispatch();
    const tdmPlayers = useSelector((state: any) => state.leaderboard.data?.docs );
    const callState = useSelector((state: any) => state.leaderboard.callState);
    if (callState === CallState.INIT) {
        dispatch(fetchLeaderboard()) 
    } 
    const rows = tdmPlayers?.map((player : TDMPlayer, index: number) => {
        return (
            <tr className="h-9" key={index}>
                <td className="border border-b px-2 py-1 text-xs">{player.player[0].name[0]}</td>
                <td className="border border-b px-2 py-1 text-xs">{player.elo}</td>
            </tr>
        )
    })
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl m-10">Leaderboard</h1>
            <table className="w-full border-collapse table-auto">
                <thead>
                    <tr className="text-left">
                        <th className="bg-gray-200 text-gray-600 border border-gray-300">Name</th>
                        <th className="bg-gray-200 text-gray-600 border border-gray-300">Elo</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody> 
            </table>
        </div>
    )
}