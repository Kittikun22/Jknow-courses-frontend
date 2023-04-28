import Axios from 'axios'
import { useState, useEffect } from 'react'
import Appbar from '../components/Appbar'
import { FaUserFriends } from 'react-icons/fa'
import { GiBookmarklet } from 'react-icons/gi'
import DeleteAlertDialog from '../components/deleteAlertDialog';
import UpdateIcon from '@mui/icons-material/Update';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'


function Dashboard() {
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

    const [topic, setTopic] = useState('');
    const [userList, setUserList] = useState([]);
    const [newUserRole, setNewUserRole] = useState();
    const [courseList, setCourseList] = useState([]);

    const openUser = () => {
        getUsers();
        setCourseList([]);
    }

    const openCourse = () => {
        getCourses();
        setUserList([]);
    }

    const getUsers = () => {
        Axios.get('http://localhost:3001/users').then(setTopic('รายชื่อทั้งหมด')).then((res) => {
            setUserList(res.data);
        });
    }

    const updateRole_id = (user_id) => {
        Axios.put('http://localhost:3001/update', { role_id: newUserRole, user_id: user_id })
            .then((res) => {
                setUserList(
                    userList.map((val) => {
                        return val.user_id === user_id ? {
                            user_id: val.user_id,
                            phone: val.phone,
                            password: val.password,
                            fname: val.fname,
                            lname: val.lname,
                            email: val.email,
                            user_role: val.user_role,
                            payment_status: val.payment_status,
                            role_id: newUserRole,
                            register_at: val.register_at
                        } : val;
                    })
                ).then(setNewUserRole())
            });
    };

    const getCourses = () => {
        Axios.get('http://localhost:3001/courses').then(setTopic('คอร์สเรียนทั้งหมด')).then((res) => {
            setCourseList(res.data);
        });
    }


    return (
        <>
            <Appbar />
            <Stack spacing={2} direction="row" sx={{ p: 2, justifyContent: 'center' }}>
                <Button variant='outlined' color="success" onClick={openUser}><FaUserFriends style={{ width: "150px", height: "150px" }} /></Button>
                <Button variant='outlined' color="success" onClick={openCourse}><GiBookmarklet style={{ width: "150px", height: "150px" }} /></Button>
            </Stack>
            <Box sx={{ textAlign: 'center' }}>
                <h1 className='text-center'>{topic}</h1>
            </Box>
            {userList.map((val, key) => {
                return (
                    <Card sx={{ minWidth: 275, m: 2, }} elevation={2} key={key}>
                        <CardContent >
                            <Typography variant="h5" component="div">
                                ID : {val.user_id}
                            </Typography>
                            <Typography>
                                Phone : {val.phone}
                                <br />
                                Role_ID : {val.role_id}
                                <Stack direction="row" spacing={2}>

                                    <TextField
                                        label="Update User Role"
                                        variant="standard"
                                        value={newUserRole}
                                        onChange={(e) => { setNewUserRole(e.target.value) }} />
                                    <Button variant="outlined" startIcon={<UpdateIcon />} color="warning" onClick={() => { updateRole_id(val.user_id) }}>
                                        Update
                                    </Button>
                                    <DeleteAlertDialog userid={val.user_id} usertel={val.phone} userList={userList} setUserList={setUserList} />
                                </Stack>
                            </Typography>
                        </CardContent>
                    </Card>

                );
            })}

            {courseList.map((val, key) => {
                return (
                    <Card sx={{ minWidth: 275, m: 2 }} elevation={2} key={key}>
                        <CardContent>
                            <Typography sx={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Box component='img' src={val.courses_pic} sx={{ justifyContent: 'left', width: 240, height: 200 }} /><br />
                                Course ID : {val.courses_id}<br />
                                Course Name : {val.courses_name}<br />
                                Access_level : {val.courses_access}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )
}

export default Dashboard