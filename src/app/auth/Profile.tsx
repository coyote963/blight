import { useAuth0 } from '@auth0/auth0-react';
import React, { useCallback, useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';


import { getByProfile } from '../../services/dysonApi'
function ProfileButton() {
  const { user, isAuthenticated, loginWithRedirect} = useAuth0();
  const history = useHistory();
  const handleOnClick = () => {
    if (isAuthenticated) {
      var profile = user!.nickname!.split(',')
      getByProfile(profile[0], profile[1]).then(response => {
        console.log(response)
        history.push(`/profile/${response.data[0]._id}`)
      })
    } else {
      loginWithRedirect()
    }
  }
  return (
    <div>
      <button type="button" onClick={handleOnClick}>
        [Profile]
      </button>
    </div>
  )
}

export default ProfileButton