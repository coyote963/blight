import React, { useState } from 'react'
import { getSteamProfile } from '../services/dysonApi'

interface PropType {
    steamId: string
}

export function SteamImage(props: PropType) {
    const [avatar, setAvatar] = useState<{avatar: string}>()
    getSteamProfile(props.steamId).then(avatarResponse => {
        setAvatar(avatarResponse.data)
    })
    return (<img className="w-full p-9" src={avatar?.avatar} alt="profile_picture"></img>)
    
}