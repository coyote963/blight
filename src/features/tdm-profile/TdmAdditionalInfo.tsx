import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import formatDate, {  formatMongoDb } from '../../helpers/formatDate';
import { CallState } from '../../models/DataState';
import { TdmProps } from '../../models/TdmProps';
import { fetchPlayer } from './state/configurePlayerReducer';
import { fetchTdmProfile } from './state/configureTdmProfileReducer';
import { playerCallStateSelector, playerSelector, tdmProfileCallStateSelector, tdmProfileSelector } from './state/selectors';

export const TdmAdditionalInfo = (props: TdmProps) => {
    const dispatch = useDispatch();

    const tdmCallState = useSelector(tdmProfileCallStateSelector)
    const tdmProfile = useSelector(tdmProfileSelector)

    const playerCallState = useSelector(playerCallStateSelector)
    const player = useSelector(playerSelector)
    if (tdmCallState === CallState.INIT ) {
        dispatch(fetchTdmProfile(props.id))
    }
    if (playerCallState === CallState.INIT ) {
        dispatch(fetchPlayer(props.id))
    }

    return (
    <div>
        {/* <SteamImage steamId={player?.profile.profile ?? ""}></SteamImage> */}
        <table className="w-full">
            <tbody>

                <tr className="py-5">
                    <td>Alternate Names</td>
                    <td style={{textAlign: 'right'}}>{player?.name.slice(0,5).join(", ")}</td>
                </tr>
                <tr className="py-5">
                    <td>Trueskill Rating</td>
                    <td style={{textAlign: 'right'}}>{Math.ceil(tdmProfile?.profile.mu ?? 0)} 
                        </td>
                </tr>
                <tr className="py-5">
                    <td>Elo Rating</td>
                    <td style={{textAlign: 'right'}}>{Math.ceil(tdmProfile?.profile.elo ?? 0)}</td>
                </tr>
                <tr className="py-5">
                    <td>Last Seen</td>
                    <td style={{textAlign: 'right'}}>{formatDate(tdmProfile?.profile.last_updated ?? new Date()) }</td>
                </tr>
                <tr className="py-5">
                    <td>First Seen</td>
                    <td style={{textAlign: 'right'}}>{formatMongoDb(tdmProfile?.profile._id ?? "", 'lll')}</td>
                </tr>
                <tr className="py-5">
                    <td>Platform</td>
                    <td style={{textAlign: 'right'}}>{player?.profile.platform === '0' ? 'Steam' : 'Gamejolt'}</td>
                </tr>
                <tr className="py-5">
                    <td>Clan</td>
                    <td style={{textAlign: 'right'}}>{player?.clan_tag}</td>
                </tr>
                
            </tbody>
        </table>
    </div>)
}