import React, { useEffect } from 'react'
import Axios from 'axios'


function Test() {

    useEffect(() => {
        Axios.get('http://localhost:3001/Lesson').then((res) => {
            console.log(res);
        })
    }, [])


    return (
        <div>test</div>
    )
}

export default Test