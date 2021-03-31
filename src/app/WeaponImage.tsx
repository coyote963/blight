
import React from 'react';
interface PropType  {
    weaponId: string
}
export function WeaponImage(props : PropType) {
    return (
        <img
            style={{maxHeight: '25px'}}
            src={`/weapons/${props.weaponId}.png`} 
            alt="weaponId"
        >
        </img>)
}