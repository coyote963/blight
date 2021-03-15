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
import formatDate from '../../helpers/formatDate'
import { formatDataleRandom } from '../../helpers/formatDatale'
export function Leaderboard() {
    const dispatch = useDispatch();
    const tdmPlayers = useSelector(tdmPlayerSelector);
    const callState = useSelector(callStateSelector);
    const currentPage = useSelector(pageSelector)
    const pageSize = useSelector(pageSizeSelector);
    console.log(formatDataleRandom("eam eathmatch"))
    if (callState === CallState.INIT) {
        dispatch(fetchLeaderboard(0)) 
    } 
    const rows = tdmPlayers?.map((player : TDMPlayer, index: number) => {
        return (
            <tr className="h-9" key={index}>
                <td className="border border-b px-2 py-1 text-xs">{ (currentPage - 1 )*  pageSize + index + 1 }</td>
                <td className="border border-b px-2 py-1 text-xs">{player.player[0].name[0]}</td>
                <td className="border border-b px-2 py-1 text-xs">{Math.floor(player.elo)}</td>
                <td className="border border-b px-2 py-1 text-xs">{ formatDate(player.last_updated) }</td>
            </tr>
        )
    })
    return (
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
    )
}