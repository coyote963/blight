
import React from 'react';
import { formatDataleRandom } from '../helpers/formatDatale'
interface PropType  {
    content: string
}
export function HeaderDisplay(props : PropType) {
    return (
        <div>
            <h1  style={{fontFamily: "datale", whiteSpace: "nowrap"}} className="text-purple-900 font-display text-3xl sm:text-5xl xl:text-7xl m-10">{formatDataleRandom(props.content)} </h1>
        </div>
    )
}