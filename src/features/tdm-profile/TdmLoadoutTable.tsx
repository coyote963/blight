import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { EquipmentImage } from '../../app/EquipmentImage';
import { FireSpinner } from '../../app/FireSpinner';
import { WeaponImage } from '../../app/WeaponImage';
import { CallState } from '../../models/DataState';
import { Loadout } from '../../models/Loadout';
import { TdmProps } from '../../models/TdmProps';
import { fetchLoadouts } from './state/configureLoadoutsReducer';
import {  tdmLoadoutsCallStateSelector, tdmLoadoutsSelector } from './state/selectors';


const SIZE = 15
export function TdmLoadoutTable (props: TdmProps) {
    const dispatch = useDispatch();
    const callState = useSelector(tdmLoadoutsCallStateSelector);
    const loadouts = useSelector(tdmLoadoutsSelector);
    console.log(props)
    if (callState === CallState.INIT) {
        dispatch(fetchLoadouts(props.id));
    }
    if (callState === CallState.LOADING) {
        return(<FireSpinner />)
    }
    const topTen = loadouts?.slice(0, SIZE);

    const rows = topTen?.map((loadout: Loadout, index: number) => {
        return (
            <tr key={index}>
                <td className="border-dotted border-t border-darkbrown dark:border-grulloshade"><EquipmentImage weaponId={loadout._id.equip } /></td>
                <td className="border-dotted border-t border-darkbrown dark:border-grulloshade"><WeaponImage weaponId={loadout._id.weapons[0] } /></td>
                <td className="border-dotted border-t border-darkbrown dark:border-grulloshade"><WeaponImage weaponId={loadout._id.weapons[1] } /></td>
            </tr>)
    })
    return ( 
        <table className="w-full table-auto ">
            <thead>
                <tr className="text-left">
                    <th className=" text-navy dark:text-chestnut">Equipment</th>
                    <th className=" text-navy dark:text-chestnut">Primary</th>
                    <th className=" text-navy dark:text-chestnut">Secondary</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody> 
        </table>
    )
}