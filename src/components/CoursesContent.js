import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SidebarList from './SidebarList';


function CoursesContent({ courseId }) {

    const [course, setCourse] = useState();
    const [lesson, setLesson] = useState();

    useEffect(() => {
        try {
            if (courseId) {
                Axios.get(`http://localhost:3001/getACourse/${courseId}`).then((res) => {
                    setCourse(res.data[0])
                })
                Axios.get(`http://localhost:3001/getLesson/${courseId}`).then((res) => {
                    setLesson(res.data)
                })
            }
        } catch (error) {
            console.log(error);
        }
    }, [])

    try {
        if (lesson) {
            return (
                <>
                    <Box >
                        <Stack direction="row" justifyContent="space-between">
                            <Box flex={3} sx={{ display: { xs: 'none', sm: 'block' } }} >
                                <Box borderRadius={5} m={2} p={2} >
                                    <SidebarList lesson={lesson} course={course} courseId={courseId} />
                                </Box>
                            </Box>
                            <Box flex={9}>
                                <Box borderRadius={5} p={2} m={2}>
                                    <Box>
                                        <center>
                                            <iframe width="95%" height="450" src={course.courses_preview} title={course.courses_name}
                                                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen />
                                        </center>
                                    </Box>
                                    <Box bgcolor="#474E68" borderRadius={5} m={1} p={2}>
                                        <Typography variant="h5" color="white">
                                            คอร์สเรียน : {course.courses_name}
                                        </Typography>
                                        <Typography variant='body2' color='#B2B2B2'>
                                            {course.courses_detail}
                                        </Typography>
                                    </Box>

                                </Box>
                            </Box>
                        </Stack>
                    </Box >
                </>
            )
        }
    } catch (error) {
        console.log(error);
        window.location = '/courses'
    }
}

export default CoursesContent