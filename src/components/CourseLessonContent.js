import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SidebarList from './SidebarList';

function CourseLessonContent({ courseId, lesson, allLesson }) {

    try {
        if (lesson) {
            console.log(lesson);
            return (
                <>
                    <Box >
                        <Stack direction="row" justifyContent="space-between">
                            <Box flex={3} sx={{ display: { xs: 'none', sm: 'block' } }} >
                                <Box borderRadius={5} m={2} p={2} >
                                    <SidebarList lesson={allLesson} courseId={courseId} />
                                </Box>
                            </Box>
                            <Box flex={9}>
                                <Box borderRadius={5} p={2} m={2}>
                                    <Box>
                                        <center>
                                            <iframe width="95%" height="450" src={lesson[0].lesson_video} title={lesson[0].lesson_name}
                                                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen />
                                        </center>
                                    </Box>
                                    <Box bgcolor="#474E68" borderRadius={5} m={1} p={2}>
                                        <Typography variant="h5" color="white">
                                            {lesson[0].lesson_name} <br />
                                        </Typography>
                                        <Typography variant='body2' color='#B2B2B2'>
                                            {lesson[0].lesson_detail}
                                        </Typography>
                                        <Typography variant="body1" color="white">
                                            Control Panel : {lesson[0].lesson_control}
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

export default CourseLessonContent