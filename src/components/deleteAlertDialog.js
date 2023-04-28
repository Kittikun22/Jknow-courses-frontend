import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import Axios from 'axios';

const AlertDialog = ({ userid, usertel, userList, setUserList }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteUser = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((res) => {
            setUserList(
                userList.filter((val) => {
                    return val.id !== id;
                })
            )
        }).then(setOpen(false))
    }


    return (
        <>
            <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={handleClickOpen}>
                Delete
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    ยืนยันการลบ ID : {userid}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ต้องการจะลบข้อมูลหรือไม่ หากยืนยันการลบข้อมูลจะถูกลบออกจากฐานข้อมูล<br />
                        เบอร์โทรศัพท์ : {usertel}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ยกเลิก</Button>
                    <Button onClick={() => { deleteUser(userid) }} color="error">
                        ยืนยันการลบ
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AlertDialog