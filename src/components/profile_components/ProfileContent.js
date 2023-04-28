import React, { useState, useContext } from 'react'
import { Typography } from '@mui/material'
import { UserContext } from '../../pages/Profile'
import ProfileSetting from './ProfileSetting'
import ProfileHome from './ProfileHome'

function ProfileContent() {

  const user = useContext(UserContext)

  const [activeContent, setActiveContent] = useState(1);

  function getActiveContent(activeContent) {
    switch (activeContent) {
      case 0:
        return <ProfileHome />
      case 1:
        return <ProfileSetting />

      default:
    }
  }

  return (
    <>
      {getActiveContent(activeContent)}
    </>
  )
}

export default ProfileContent