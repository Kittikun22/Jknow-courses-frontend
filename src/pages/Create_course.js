import React, { useState, useEffect } from 'react';
import Appbar from '../components/Appbar'
import Axios from 'axios';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function Create_course() {

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


  const [course_name, setCourse_name] = useState();
  const [course_access, setCourse_access] = useState();
  const [course_detail, setCourse_detail] = useState();
  const [course_vdo, setCourse_vdo] = useState();
  const [course_pic, setCourse_pic] = useState();

  const CreateCourse = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/create-course', {
      courses_name: course_name,
      courses_access: course_access,
      courses_detail: course_detail,
      courses_vdo: course_vdo,
      courses_pic: course_pic
    }).then(setOpenAlert(true))
  }


  const [openAlert, setOpenAlert] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <>
      <Appbar />

      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
          Create Courses Successfully.
        </Alert>
      </Snackbar>
      <Stack spacing={2} sx={{ p: 5 }}>
        <Box sx={{ textAlign: 'center' }} component='form'>
          <h1>สร้างคอร์สเรียน</h1>
          <Box sx={{ mb: 2 }}>
            <TextField sx={{ width: '275px' }} type="text" size='small' label="ชื่อคอร์สเรียน" variant="outlined" onChange={(e) => { setCourse_name(e.target.value) }} />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField sx={{ width: 235, maxWidth: '100%', }} type="text" size='small' label={course_pic} variant="outlined" />
            <IconButton color="primary" aria-label="upload picture" component="label" onChange={(e) => {setCourse_pic(e.target.value)}}>
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField sx={{ width: '275px' }} type="text" size='small' label="รายละเอียดคอร์สเรียน" variant="outlined" onChange={(e) => { setCourse_detail(e.target.value) }} />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField sx={{ width: '275px' }} type="text" size='small' label="วิดีโอการสอน" variant="outlined" onChange={(e) => { setCourse_vdo(e.target.value) }} />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField sx={{ width: '275px' }} type="text" size='small' label="สิทธิ์การเข้าถึง" variant="outlined" onChange={(e) => { setCourse_access(e.target.value) }} />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Button type='submit' variant="contained" color='success' startIcon={<SendIcon />} onClick={CreateCourse} >
              สร้างคอร์สเรียน
            </Button>
          </Box>
        </Box>
      </Stack>
    </>
  )
}

export default Create_course