import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseLessonContent from '../components/CourseLessonContent';
import Appbar from '../components/Appbar'
import LoadingScreen from 'react-loading-screen'
import Axios from 'axios'


function CoursesLesson() {

    const { lessonId } = useParams();
    const { courseId } = useParams();
    const [loading, setLoading] = useState(true);
    const [lesson, setLesson] = useState();
    const [allLesson, setAllLesson] = useState();
    
    useEffect(() => {
        try {
            if (courseId) {
                Axios.get(`http://localhost:3001/getLessonContent/${courseId}/${lessonId}`).then((res) => {
                    setLesson(res.data)
                })
                Axios.get(`http://localhost:3001/getLesson/${courseId}`).then((res) => {
                    setAllLesson(res.data)
                })
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <>
            <LoadingScreen loading={loading}
                bgColor="rgba(255,255,255,0.8)"
                spinnerColor="#478e6b"
                textColor="#676767"
                logoSrc="http://localhost:3000/static/media/Jknowledge-Logo.18250765f4f4ae91679a.webp"
                text="" />
            <Appbar />
            <CourseLessonContent courseId={courseId} lesson={lesson} allLesson={allLesson} />
        </>
    )
}

export default CoursesLesson