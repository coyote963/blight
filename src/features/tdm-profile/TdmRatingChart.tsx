import React from 'react';
import {Line} from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { FireSpinner } from '../../app/FireSpinner';
import { themeSelector } from '../../app/ThemeSlice';
import { CommonLineChartOptions } from '../../models/CommonLineChart'
import { CallState } from '../../models/DataState';
import { RatingNode } from '../../models/RatingNode';
import { TdmProps } from '../../models/TdmProps';
import { Theme } from '../../models/ThemeState';
import { fetchTdmHistory } from './state/configureTdmHistoryReducer';
import { tdmRatingNodeSelector, tdmRatingNodeCallStateSelector } from './state/selectors';

const PRECISION = 40

export function TdmRatingChart (props: TdmProps) {
    const dispatch = useDispatch();
    const ratingNodes : Array<RatingNode> | undefined = useSelector(tdmRatingNodeSelector);
    const callState = useSelector(tdmRatingNodeCallStateSelector);
    const theme = useSelector(themeSelector);
    if (callState === CallState.INIT) {
        dispatch(fetchTdmHistory(props.id))
    }
    
    if (callState === CallState.LOADING) {
        return(<FireSpinner />)
    }
    let labels = ratingNodes?.map(a => a.name);
    let values = ratingNodes?.map(a => a.value);

    labels = labels?.slice(Math.max(labels.length - PRECISION, 0))
    values = values?.slice(Math.max(values.length - PRECISION, 0))
    const options = {
        ...CommonLineChartOptions
    }
    const data = (canvas: any) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, 'rgba(198, 181, 151, 1)');   
        gradient.addColorStop(1, 'rgb(235, 225, 207, 0)');
        return {
            labels: labels, 
            datasets: [
                {
                    backgroundColor : ((theme === Theme.LIGHT) ? gradient : 'rgba(0,0,0,0)'), // Put the gradient here as a fill color
                    borderColor : ((theme === Theme.LIGHT) ? '#805c3d' : '#AF4846'),
                    borderWidth: 4,
                    pointRadius: 1,
                    pointColor : "#fff",
                    label: 'Player',
                    data: values, 
                }
            ]
        }
    };
    return (
        <div>
            <Line 
                options={options}
                data={data} />
        </div>
    )
}



