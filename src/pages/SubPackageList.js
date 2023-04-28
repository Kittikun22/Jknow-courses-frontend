import React, { useEffect } from 'react'
import SubPack from '../components/Subpack_List'
import Axios from 'axios'
import Appbar from '../components/Appbar'



function SubPackageList() {

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
                    console.log('Valid Token');
                } else {
                    alert('Invalid Token!, Please login.')
                    localStorage.removeItem('accessToken')
                    window.location = '/login'
                }
            })
    }, []);

    return (
        <>
            <Appbar />
            <SubPack />
        </>

    )
}

export default SubPackageList