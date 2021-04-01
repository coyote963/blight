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
import { FireSpinner } from '../../app/FireSpinner';
import { Link } from 'react-router-dom';

export function Leaderboard() {
    const dispatch = useDispatch();
    const tdmPlayers = useSelector(tdmPlayerSelector);
    const callState = useSelector(callStateSelector);
    const currentPage = useSelector(pageSelector)
    const pageSize = useSelector(pageSizeSelector);
    if (callState === CallState.INIT) {
        dispatch(fetchLeaderboard(0)) 
    }
    if (callState === CallState.LOADING) {
        return (<FireSpinner />)
    }
    const rows = tdmPlayers?.map((player : TDMPlayer, index: number) => {
        return (
            
                <tr className="h-9" key={index}>
                    <td className="border border-b border-mediumbrown dark:border-grullo dark:text-grullo px-2 py-1 text-xs">{ (currentPage - 1 )*  pageSize + index + 1 }</td>
                    <td className="border border-b border-mediumbrown dark:border-grullo dark:text-grullo px-2 py-1 text-xs">
                        <Link to={`/profile/${player.player[0]._id}`} >
                            <span className="text-darkgreen dark:text-lemon hover:underline">
                                {player.player[0].name[0]}
                            </span>
                        </Link>
                    </td>
                    <td className="border border-b border-mediumbrown dark:border-grullo dark:text-grullo px-2 py-1 text-xs">{Math.floor(player.elo)}</td>
                    <td className="border border-b border-mediumbrown dark:border-grullo dark:text-grullo px-2 py-1 text-xs">{ formatDate(player.last_updated) }</td>
                </tr>
        )
    })
    
    return (
        <table className="w-full border-collapse table-auto">
            <thead>
                <tr className="text-left">
                    <th className="bg-transparent text-gray-600 dark:text-grulloshade border-mediumbrown">#</th>
                    <th className="bg-transparent text-gray-600 dark:text-grulloshade border-mediumbrown">Name</th>
                    <th className="bg-transparent text-gray-600 dark:text-grulloshade border-mediumbrown">Elo</th>
                    <th className="bg-transparent text-gray-600 dark:text-grulloshade border-mediumbrown">Last Updated</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody> 
        </table>
    )
}