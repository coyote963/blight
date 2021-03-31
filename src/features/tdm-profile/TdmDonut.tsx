import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { CommonDonutChartOptions, CommonDonutChartOptionsDark } from '../../models/CommonDonut';
import { CallState } from '../../models/DataState';
import { WeaponUsage } from '../../models/WeaponUsage';
import { 
    tdmWeaponUsageCallStateSelector,
    tdmWeaponUsageSelector } from './state/selectors';
import { WeaponNames } from '../../models/WeaponNames';
import { fetchWeaponUsage } from './state/configureWeaponUsageReducer';
import { FireSpinner } from '../../app/FireSpinner';
import { themeSelector } from '../../app/ThemeSlice';
import { Theme } from '../../models/ThemeState';
import { TdmProps } from '../../models/TdmProps';
const PRECISION = 10
export function TdmDonut (props: TdmProps) {
    const dispatch = useDispatch();
    const callState = useSelector(tdmWeaponUsageCallStateSelector)
    const weaponUsages : Array<WeaponUsage> | undefined = useSelector(tdmWeaponUsageSelector)
    const theme = useSelector(themeSelector)
    if (callState === CallState.INIT) {
        dispatch(fetchWeaponUsage(props.id))
    }
    if (callState === CallState.LOADING) {
        return(<FireSpinner />)
    }
    const topTen = weaponUsages?.slice(0, PRECISION);
    let labels = topTen?.map(a => a._id).map(wid => WeaponNames[parseInt(wid)])
    let values = topTen?.map(a => a.frequency)
    const options = {
        legend: {
            display: false
        }
    }
    const data = {
        labels: labels,
        legend: {
            display: false
        },
        datasets: [{
            ...((theme === Theme.DARK) ? CommonDonutChartOptionsDark : CommonDonutChartOptions),
            data: values 
        }]
    };
    
    return (
      <div>
        <h2 className="text-darkbrown dark:text-grullo">Weapon Usage Example</h2>
        <Doughnut data={data} options={options}/>
      </div>
    );
}