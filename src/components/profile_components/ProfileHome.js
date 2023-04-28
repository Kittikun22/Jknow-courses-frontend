import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../../pages/Profile'


function ProfileHome() {

    const user = useContext(UserContext)

    return (
        <>
            <Typography variant='h1'>
                สวัสดีคุณ{user[0].fname}
            </Typography>
        </>
    )
}

export default ProfileHome