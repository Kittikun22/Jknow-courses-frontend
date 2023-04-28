import React, { useState } from 'react'
import Axios from 'axios';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Login() {

    const [userPhone, setUserPhone] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [statusColor, setStatusColor] = useState();


    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        if (statusColor === 'success'){
            window.location = '/profile'
        }
};


const Signin = (e) => {
    e.preventDefault();
        Axios.post("http://localhost:3001/signin", {
            phone: userPhone,
            password: userPwd,
        }).then((res) => {
            try {
                if (res.data.status === 'ok') {
                    console.log(res);
                    setLoginStatus('ล็อคอินสำเร็จ. สวัสดีคุณ' + res.data.message[0].fname + ' ' + res.data.message[0].lname)
                    setStatusColor('success')
                    setOpen(true)
                    localStorage.setItem('accessToken', res.data.token);
                } else {
                    console.log(res);
                    setLoginStatus("Login failed. " + res.data.message);
                    setStatusColor('error')
                    setOpen(true)
                }
            } catch (error) {
                console.log(error);
            }
        });
};


return (    
    <>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert onClose={handleClose} severity={statusColor} sx={{ width: '100%', mt: '2.5rem' }}>
                {loginStatus}
            </Alert>
        </Snackbar>

        <Stack spacing={2} sx={{ p: 5 }}>
            <Box sx={{ textAlign: 'center' }} component='form'>
                <h1>เข้าสู่ระบบ</h1>
                <Box sx={{ mb: 2 }}>
                    <TextField sx={{ width: '275px' }} type="text" size='small' 
                    label="เบอร์โทรศัพท์" variant="outlined" onChange={(e) => { setUserPhone(e.target.value) }} />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <TextField sx={{ width: '275px' }} type="password" size='small' 
                    label="รหัสผ่าน" variant="outlined" onChange={(e) => { setUserPwd(e.target.value) }} />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <FormControlLabel
                        value="rememberMe"
                        control={<Checkbox />}
                        label="Remember me"
                        labelPlacement="end"
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Button type='submit' variant="contained" color='success' startIcon={<LoginIcon />} onClick={Signin} >
                        เข้าสู่ระบบ
                    </Button>
                </Box>
            </Box>
        </Stack>
    </>
)
}

export default Login