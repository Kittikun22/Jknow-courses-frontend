import React, { useState, useEffect } from 'react'
import Appbar from '../components/Appbar'
import Footer from '../components/Footer'
import CoursesContent from '../components/CoursesContent';
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen'


function CoursesContents() {

  const { courseId } = useParams();
  const [loading, setLoading] = useState(true);

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
      <LoadingScreen loading={loading}
        bgColor="rgba(255,255,255,0.8)"
        spinnerColor="#478e6b"
        textColor="#676767"
        logoSrc="http://localhost:3000/static/media/Jknowledge-Logo.18250765f4f4ae91679a.webp"
        text="" />
      <Appbar />
      <CoursesContent courseId={courseId} />
      <Footer />
    </>
  )
}

export default CoursesContents