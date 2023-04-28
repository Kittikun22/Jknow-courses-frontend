import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../pages/Profile'
import { TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Axios from 'axios'

function ProfileSetting() {

    const user = useContext(UserContext)
    const [userMeta, setUserMeta] = useState();

    const [newFname, setNewFname] = useState();
    const [newLname, setNewLname] = useState();
    const [newEmail, setNewEmail] = useState();

    useEffect(() => {
        try {
            if (user) {
                Axios.get(`http://localhost:3001/getAUserMeta/${user[0].user_id}`).then((res) => {
                    setUserMeta(res.data)
                    setNewFname(user[0].fname)
                    setNewLname(user[0].lname)
                    setNewEmail(user[0].email)
                })
            }
        } catch (error) {
            console.log(error);
        }
    }, [user])

    const updateAUser = () => {
        Axios.put('http://localhost:3001/updateAUser'
        , { fname: newFname, lname: newLname , email: newEmail, user_id: user[0].user_id  })
        .then((res)=> {
           console.log('Update Success');  
        })
    }

    console.log(userMeta);

    return (
        <>
            {userMeta ?
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" m={4} textAlign='center'>แก้ไขโปรไฟล์</Typography>
                    <Grid container spacing={2} direction='column' >
                        <Grid item>
                            <Stack direction='row' alignItems='center' justifyContent='center' >
                                <Grid item xs={3}>
                                    <Typography>เบอร์โทรศัพท์</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField type="text" size='small'
                                        variant="outlined" value={user[0].phone} disabled />
                                </Grid>
                            </Stack>
                        </Grid>

                        <Grid item>
                            <Stack direction='row' alignItems='center' justifyContent='center'>
                                <Grid item xs={3}>
                                    <Typography>ชื่อ</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField type="text" size='small'
                                        variant="outlined" value={newFname} onChange={(e) => { setNewFname(e.target.value) }} />
                                </Grid>
                            </Stack>
                        </Grid>

                        <Grid item>
                            <Stack direction='row' alignItems='center' justifyContent='center'>
                                <Grid item xs={3}>
                                    <Typography>นามสกุล</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField type="text" size='small'
                                        variant="outlined" value={newLname} onChange={(e) => { setNewLname(e.target.value) }} />
                                </Grid>
                            </Stack>
                        </Grid>

                        <Grid item>
                            <Stack direction='row' alignItems='center' justifyContent='center'>
                                <Grid item xs={3}>
                                    <Typography>อีเมล</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField type="text" size='small'
                                        variant="outlined" value={newEmail} onChange={(e) => { setNewEmail(e.target.value) }} />
                                </Grid>
                            </Stack>
                        </Grid>

                        {userMeta.map((val, key) => {
                            return (
                                <Grid item key={key}>
                                    <Stack direction='row' alignItems='center' justifyContent='center'>
                                        <Grid item xs={3}>
                                            <Typography>{val.user_meta_key}</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField type="text" size="small"
                                                varaint="outlined" value={val.user_meta_value} />
                                        </Grid>
                                    </Stack>
                                </Grid>
                            )
                        })}

                        <Grid item>
                            <Stack direction='row' alignItems='center' justifyContent='center'>
                                <Button onClick={updateAUser} variant='contained' color='success'>บันทึก</Button>
                            </Stack>
                        </Grid>

                    </Grid>
                </Box>
                : null}
        </>
    )
}

export default ProfileSetting