import React, { useState, useEffect, createContext } from 'react'
import Appbar from '../components/Appbar'
import ProfileSidebar from '../components/profile_components/ProfileSidebar'
import ProfileContent from '../components/profile_components/ProfileContent'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Axios from 'axios';


const UserContext = createContext();

function Profile() {

    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        Axios.post('http://localhost:3001/authsignin', {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
        })
            .then((res) => {
                if (res.data.status === 'ok') {
                    Axios.get(`http://localhost:3001/getAUser/${res.data.decoded.user_id}`).then((res) => {
                        setUserInfo(res.data)
                    })

                } else {
                    alert('Invalid Token!, Please login.')
                    localStorage.removeItem('accessToken')
                    window.location = '/login'
                }
            })
    }, []);

    console.log(userInfo);
    
    return (
        <>
            <UserContext.Provider value={userInfo}>
                <Appbar />
                <Box>
                    <Stack direction='row'>
                        <Box flex={3} sx={{ m: 2, p: 2 }}>
                            <ProfileSidebar />
                        </Box>
                        <Box flex={9} sx={{ m: 2, p: 2, borderRadius: 5, bgcolor: "#D6E4E5" }}>
                            <ProfileContent />
                        </Box>
                    </Stack>
                </Box>
            </UserContext.Provider>
        </>
    )
}

export { UserContext }
export default Profile