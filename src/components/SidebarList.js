import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function SidebarList({ lesson, courseId }) {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">

                </ListSubheader>
            }
        >
            <ListItemButton href={`/courses/${courseId}`} >
                <ListItemIcon >
                    <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="บทนำ " />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="เนื้อหา" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <List component="div" disablePadding>
                        {lesson.map((val, key) => {
                            return (
                                <ListItemButton sx={{ pl: 4 }}
                                    href={`/courses/${courseId}/${val.lesson_id}`}
                                    key={key}>
                                    <ListItemIcon>
                                        <SmartDisplayIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={`บทที่ ${key + 1} ${val.lesson_name}`} />
                                </ListItemButton>
                            )
                        })}
                    </List>
                </List>
            </Collapse>

            <ListItemButton>
                <ListItemIcon>
                    <BorderColorIcon />
                </ListItemIcon>
                <ListItemText primary="ข้อสอบ" />
            </ListItemButton>

        </List>

    );
}
