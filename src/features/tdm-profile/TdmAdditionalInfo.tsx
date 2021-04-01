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

                <tr>
                    <td className="font-bold">Alternate Names</td>
                    <td >{player?.name.slice(0,5).join(", ")}</td>
                </tr>
                <tr>
                    <td className="font-bold">Trueskill Rating</td>
                    <td >{Math.ceil(tdmProfile?.profile.mu ?? 0)} 
                        </td>
                </tr>
                <tr>
                    <td className="font-bold">Elo Rating</td>
                    <td >{Math.ceil(tdmProfile?.profile.elo ?? 0)}</td>
                </tr>
                <tr>
                    <td className="font-bold">Last Seen</td>
                    <td >{formatDate(tdmProfile?.profile.last_updated ?? new Date()) }</td>
                </tr>
                <tr>
                    <td className="font-bold">First Seen</td>
                    <td >{formatMongoDb(tdmProfile?.profile._id ?? "", 'lll')}</td>
                </tr>
                <tr>
                    <td className="font-bold">Platform</td>
                    <td >{player?.profile.platform === '0' ? 'Steam' : 'Gamejolt'}</td>
                </tr>
                <tr>
                    <td className="font-bold">Clan</td>
                    <td >{player?.clan_tag}</td>
                </tr>
                
            </tbody>
        </table>
    </div>)
}