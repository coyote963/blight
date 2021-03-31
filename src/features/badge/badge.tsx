import React from 'react'
import { useSelector } from 'react-redux';
import { themeSelector } from '../../app/ThemeSlice'
import { convertRank } from '../../helpers/convertRank';
import { Theme } from '../../models/ThemeState';

interface PropType {
    elo: number
}

export function BadgeImage(props: PropType) {
    
    const theme = useSelector(themeSelector);
    let imagePath = ""
    const badgeId = convertRank(props.elo);
    if (theme === Theme.DARK) {
        imagePath = `/badgesdark/${badgeId}.svg`
    } else {
        imagePath = `/badgeslight/${badgeId}.svg`
    }
    return (
        <img 
            style={{verticalAlign: "middle", marginTop: "30%" }} 
            alt="rankbadge" 
            src={imagePath} ></img>
    )
}