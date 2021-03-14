import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CallState } from '../../models/DataState';
import { TDMPlayer } from '../../models/tdm/TdmPlayer';
import { fetchLeaderboard,
    tdmPlayerSelector,
    callStateSelector,
    pageSelector,
    pageSizeSelector

} from './leaderboardSlice';

export function Leaderboard() {
    const dispatch = useDispatch();
    const tdmPlayers = useSelector(tdmPlayerSelector);
    const callState = useSelector(callStateSelector);
    const currentPage = useSelector(pageSelector)
    const pageSize = useSelector(pageSizeSelector);
    if (callState === CallState.INIT) {
        dispatch(fetchLeaderboard(0)) 
    } 
    const rows = tdmPlayers?.map((player : TDMPlayer, index: number) => {
        return (
            <tr className="h-9" key={index}>
                <td className="border border-b px-2 py-1 text-xs">{ currentPage * pageSize + index + 1 }</td>
                <td className="border border-b px-2 py-1 text-xs">{player.player[0].name[0]}</td>
                <td className="border border-b px-2 py-1 text-xs">{player.elo}</td>
                <td className="border border-b px-2 py-1 text-xs">{player.last_updated}</td>
            </tr>
        )
    })
    return (
        <div className="container mx-auto">
            <h1 className="text-5xl m-10">Leaderboard</h1>
            <table className="w-full border-collapse table-auto">
                <thead>
                    <tr className="text-left">
                        <th className="bg-gray-200 text-gray-600 border border-gray-300">#</th>
                        <th className="bg-gray-200 text-gray-600 border border-gray-300">Name</th>
                        <th className="bg-gray-200 text-gray-600 border border-gray-300">Elo</th>
                        <th className="bg-gray-200 text-gray-600 border border-gray-300">Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody> 
            </table>
        </div>
    )
}