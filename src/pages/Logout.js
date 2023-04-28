import { useEffect } from 'react'

function Logout() {

    useEffect(() => {
        localStorage.removeItem('accessToken')
        window.location = '/'
    }, []);
}

export default Logout