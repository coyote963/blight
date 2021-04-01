import React from 'react'
import { TdmDonut } from './TdmDonut'
import { TdmRatingChart } from './TdmRatingChart'
import { TdmRadar } from './TdmRadar';
import { TdmLoadoutTable } from './TdmLoadoutTable';
import { TdmAdditionalInfo } from './TdmAdditionalInfo';
import { useDispatch, useSelector } from 'react-redux';
import { playerCallStateSelector, playerSelector, tdmProfileCallStateSelector, tdmProfileSelector } from './state/selectors';
import { CallState } from '../../models/DataState';
import { fetchPlayer } from './state/configurePlayerReducer';
import { FireSpinner } from '../../app/FireSpinner';
import { BadgeImage } from '../badge/badge';
import { PlayerView } from '../../app/PlayerView';
import { useParams } from 'react-router-dom';
import { TdmProps } from '../../models/TdmProps';
import { fetchTdmProfile } from './state/configureTdmProfileReducer';
import { setFetchId, idSelector, resetAll } from './TdmProfileSlice';
import { convertRank, rankNames } from '../../helpers/convertRank';

export function TdmProfileRoot() {
  const dispatch = useDispatch();
  const player = useSelector(playerSelector)
  const playerCallState = useSelector(playerCallStateSelector)


  const tdmCallState = useSelector(tdmProfileCallStateSelector)
  const tdmProfile = useSelector(tdmProfileSelector)

  let id = useParams<TdmProps>().id;
  const playerId = useSelector(idSelector);

  if (playerId === null || playerId !== id) {
    dispatch(resetAll())
    dispatch(setFetchId(id))
  }

  if (playerCallState === CallState.INIT) {
    dispatch(fetchPlayer(id))
  }

  if (tdmCallState === CallState.INIT) {
    dispatch(fetchTdmProfile(id))
  }

  if (playerCallState === CallState.LOADED && tdmCallState === CallState.LOADED) {

    return (

      <div>
        <div className="flex items-center dark:text-grullo">
          <div className="container mx-auto">
            <h1 className="text-center text-navy dark:text-chestnut text-5xl font-bold uppercase border-grey mb-6 p-4">
              {player?.name[0]}
            </h1>
            <div className="grid grid-cols-4">
              <div className="p-5 col-span-4 sm:col-span-2 lg:col-span-1 border-solid border border-darkbrown dark:border-grulloshade bg-transparent shadow-sm">
                <h5 className="text-darkbrown dark:text-grulloshade">
                  Rank
                </h5>
                <h3 className="text-5xl text-navy dark:text-chestnut font-bold text-center">
                  #{ tdmProfile!.ranking }
                </h3>
              </div>
              <div className="p-5 col-span-4 sm:col-span-2 lg:col-span-1 border-solid border border-darkbrown dark:border-grulloshade bg-transparent shadow-sm">
                <h5 className="text-darkbrown dark:text-grulloshade">
                  Kills per round
                </h5>
                <h3 className="text-5xl text-navy dark:text-chestnut font-bold text-center">
                { Math.ceil(tdmProfile!.profile.kills / (tdmProfile!.profile.wins + tdmProfile!.profile.losses) * 1000) / 1000 }
                </h3>
              </div>
              <div className="p-5 col-span-4 sm:col-span-2 lg:col-span-1 border-solid border border-darkbrown dark:border-grulloshade bg-transparent shadow-sm">
                <h5 className="text-darkbrown dark:text-grulloshade">
                  K/D ratio 
                </h5>
                <h3 className="text-5xl text-navy dark:text-chestnut font-bold text-center">
                   { Math.ceil(tdmProfile!.profile.kills / tdmProfile!.profile.deaths * 1000) / 1000}
                </h3>
              </div>
              <div className="p-5 col-span-4 sm:col-span-2 lg:col-span-1 border-solid border border-darkbrown dark:border-grulloshade">
                <h5 className="text-darkbrown dark:text-grulloshade">
                  Win Rate
                </h5>
                <h3 className="text-5xl text-navy dark:text-chestnut font-bold text-center">
                   {Math.ceil(tdmProfile!.profile.wins / (tdmProfile!.profile.wins + tdmProfile!.profile.losses) * 1000) /10 }%
                </h3>
              </div>
              <div className="col-span-4 md:col-span-3 p-5 border-solid border border-darkbrown dark:border-grulloshade">

                <TdmRatingChart id={id}/>
              </div>
               <div className=" p-5 col-span-4 md:col-span-1 border-solid border border-darkbrown dark:border-grulloshade">
                <h1 className="text-7xl font-bold text-navy dark:text-chestnut text-center">{Math.ceil(tdmProfile?.profile.elo ?? 0)}</h1>
                <h1 className="text-xl text-navy dark:text-chestnut text-center">{rankNames(convertRank(tdmProfile!.profile.elo))}</h1>

                <span style={{verticalAlign: "middle", height: "100%", width: "100%", display: "inline-block"}}>
                  <BadgeImage elo={tdmProfile!.profile.elo} />
                </span>
              </div>
              
              <div className="col-span-4 md:col-span-2 p-5 border-solid border border-darkbrown dark:border-grulloshade ">
                <TdmDonut id={id} /> 
              </div>
              
              <div className="col-span-4 md:col-span-2 border-solid border border-darkbrown dark:border-grulloshade">
                <TdmLoadoutTable id={tdmProfile?.profile._id ?? ""}/>
              </div>
              
              <div className=" col-span-4 md:col-span-1 divide-y-2 divide-darkbrown dark:divide-grulloshade border-solid border border-darkbrown dark:border-grulloshade">
                <PlayerView color={player!.color} hat={player!.hat}></PlayerView>
                <TdmAdditionalInfo id={id} />
              </div>
              <div className="col-span-4 md:col-span-3 p-5 border-solid border border-darkbrown dark:border-grulloshade">
                
                <TdmRadar id={id} />
              
              </div>
             
            </div>
          </div>
        </div>
      </div>)

  } else {
    return (<FireSpinner />)
  }
}