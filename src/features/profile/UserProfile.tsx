import React from 'react'

import { useAuth0 } from '@auth0/auth0-react';

const UserProfile = () => {
    const { user, isAuthenticated } = useAuth0();
    if (isAuthenticated) {
        return <p>{user?.nickname}</p>

    } else {
        return <p>not authenticated</p>
    }
};

export default UserProfile