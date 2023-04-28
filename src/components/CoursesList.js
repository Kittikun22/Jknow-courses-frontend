import React, { useState, useEffect } from 'react'
import ActionCard from './ActionCard'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Axios from 'axios'   
import Flickity from 'react-flickity-component';
import "./Flickity.css";

function CoursesList() {

    const [allcourses, setAllcourses] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/courses').then((res) => {
            setAllcourses(res.data);
        });
    }, []);

    const flickityOptions = {
        initialIndex: 0,
        autoPlay: 2000,
        selectedAttraction: 0.01,
        friction: 0.15,
        contain: true


    }

    return (
        <>
            <Stack>
                <Box sx={{ m: 3 }}>
                    <h2>คอร์สเรียนแนะนำ</h2>
                    <Flickity
                        className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        reloadOnUpdate // default false
                        static // default false
                    >
                        {allcourses.map((val, key) => {
                            return (
                                <Box sx={{ mx: 1 }} key={key}>
                                    <ActionCard coursesName={val.courses_name} coursesDetail={val.courses_detail} coursesPic={val.courses_pic} coursesId={val.courses_id} />
                                </Box>
                            )
                        })}
                    </Flickity>
                </Box>
            </Stack>
        </>
    )
}

export default CoursesList