import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import CoursesContent from '../components/CoursesList'
import Axios from 'axios'
import LoadingScreen from 'react-loading-screen'

function Courses() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
          console.log(res.data.decoded);
          setLoading(false)
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
      <LoadingScreen loading={loading}
        bgColor="rgba(255,255,255,0.8)"
        spinnerColor="#478e6b"
        textColor="#676767"
        logoSrc="http://localhost:3000/static/media/Jknowledge-Logo.18250765f4f4ae91679a.webp"
        text="" />
      <CoursesContent />
    </>

  )
}

export default Courses