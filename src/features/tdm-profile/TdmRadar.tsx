import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { FireSpinner } from '../../app/FireSpinner';
import { themeSelector } from '../../app/ThemeSlice';
import { CallState } from '../../models/DataState';
import { Winrate } from '../../models/MapWinrate';
import { TdmProps } from '../../models/TdmProps';
import { Theme } from '../../models/ThemeState';
import { fetchMapWinrates } from './state/configureMapWinratesReducer';
import {  tdmWinratesCallStateSelector, tdmWinratesSelector } from './state/selectors';
interface ThemeColors { 
    backgroundColor: string,
    fontColor: string,
    borderColor: string,
    pointBackgroundColor: string,
    pointHoverBorderColor: string,
    backdropColor: string,
    gridLine: string | string[]
}
function themeColors(theme: Theme): ThemeColors {
    if (theme === Theme.DARK) {
        return {
            backgroundColor: 'rgba(144, 132, 122, 0.0)',
            fontColor: "rgba(175,72,70,1)",
            borderColor: '#AF4846',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            backdropColor: 'rgba(0,0,0,0)',
            gridLine: ['rgba(144,132,122,0.5)', 'rgba(144,132,122,0.5)',
             'rgba(144,132,122,0.5)', 
             'rgba(144,132,122,0.5)',
             'rgba(255, 0,0,0.5)', 
             'rgba(144,132,122,0.5)',
             'rgba(144,132,122,0.5)',
             'rgba(144,132,122,0.5)',
             'rgba(144,132,122,0.5)',]
        }
    } else {
        return {
            backgroundColor: 'rgba(198, 181, 151, 0.4)',
            fontColor:"#4d6093",
            borderColor: '#805c3d',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            backdropColor: 'rgba(0,0,0,0)',
            gridLine: 'rgba(0,0,0,0.3)'
        }
    }
}

export function TdmRadar(props: TdmProps) {


    const dispatch = useDispatch();
    const winrates : Array<Winrate> | undefined = useSelector(tdmWinratesSelector)
    const theme = themeColors(useSelector(themeSelector));
    const callState = useSelector(tdmWinratesCallStateSelector)
    if (callState === CallState.INIT) {
        dispatch(fetchMapWinrates(props.id));
    }
    if (callState === CallState.LOADING) {
        return(<FireSpinner />)
    }
    const labels = winrates?.map(a => a.map);
    const values = winrates?.map(a => a.rate * 100);
    
    const options = {
        scale : {
            angleLines: {
                display: false
            },
            ticks: {
                min: 0,
                max: 100,
                callback: function() {return ""},
                backdropColor:  theme.backdropColor,
            },
            pointLabels:{
                fontColor: theme.fontColor
            },
            gridLines: {
                color: theme.gridLine
            }
        },
        
        legend: {
            display: false
        },
    }
    const data = {
        labels: labels, 
        datasets: [
            {
                backgroundColor: theme.backgroundColor,
                borderColor: theme.borderColor,
                pointBackgroundColor: theme.pointBackgroundColor,
                pointHoverBorderColor: theme.pointHoverBorderColor,
                lineTension: 0,
                order: 1,
                pointStyle: 'cross',
                borderWidth: 4,
                data: values
            },
        ]
    };
    return (
        <div >
            <h2 className="text-darkbrown dark:text-grulloshade">Map Winrates</h2>
            <Radar 
                options={options}
                data={data} />
        </div>
    )
};
