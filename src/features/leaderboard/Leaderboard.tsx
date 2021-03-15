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
        <div className="container mx-auto">
            <h1  style={{fontFamily: "datale"}} className="text-purple-900 font-display text-7xl m-10">{formatDataleRandom("Team Deathmatch Rankings")} </h1>
            {/* <h1  style={{fontFamily: "datale"}} className="font-display text-9xl m-10">t|0e|3a|2m|1d|2e|1a|3t|0h|3m|2a|2t|1c|2h|0 |1r|0a|3n|2k|3i|1n|2g|3s|2</h1> */}
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