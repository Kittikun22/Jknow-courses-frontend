import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import { List, ListItemIcon, ListItemText, ListItemButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import Divider from '@mui/material/Divider';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { UserContext } from '../../pages/Profile';

function ProfileSidebar() {

    const user = useContext(UserContext)

    return (
        <>

            {user ? <List
            >
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: '20px' }}>
                    <Box
                        component='img'
                        sx={{ width: "70px", height: "70px", borderRadius: 50, border: 3, borderColor: '#379237' }}
                        src='images/3.jpg'
                    />
                    <Typography mx={2}>
                        {`${user[0].fname}  ${user[0].lname}`}
                    </Typography>
                </Box>

                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="หน้าแรก" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <AutoStoriesIcon />
                    </ListItemIcon>
                    <ListItemText primary="คอร์สเรียนของฉัน" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="คอร์สเรียนทั้งหมด" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <CreditCardIcon />
                    </ListItemIcon>
                    <ListItemText primary="การชำระเงิน" />
                </ListItemButton>

                <Divider />

                <ListItemButton >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="แก้ไขโปรไฟล์" />
                </ListItemButton>

            </List> : null}
            {/* <List
            >
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: '20px' }}>
                    <Box
                        component='img'
                        sx={{ width: "70px", height: "70px", borderRadius: 50, border: 3, borderColor: '#379237' }}
                        src='images/3.jpg'
                    />
                    <Typography mx={2}>
                        {user.fname}
                    </Typography>
                </Box>

                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="หน้าแรก" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <AutoStoriesIcon />
                    </ListItemIcon>
                    <ListItemText primary="คอร์สเรียนของฉัน" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                    <ListItemText primary="คอร์สเรียนทั้งหมด" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <CreditCardIcon />
                    </ListItemIcon>
                    <ListItemText primary="การชำระเงิน" />
                </ListItemButton>

                <Divider />

                <ListItemButton >
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="แก้ไขโปรไฟล์" />
                </ListItemButton>

            </List> */}
        </>
    )
}

export default ProfileSidebar