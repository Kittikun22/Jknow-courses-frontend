import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


export default function MultiActionAreaCard({ coursesName, coursesDetail, coursesPic, coursesId }) {

    return (
        <Card sx={{
            borderRadius:7, maxWidth: 200, minWidth: 200, maxHeight: 360, "&:hover": {
                transition: "transform .3s",
                transform: "scale(1.06)"
            }
        }} elevation={2}>
            <CardActionArea href={`/courses/${coursesId}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={coursesPic}
                    alt={coursesName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {coursesName}
                    </Typography>
                    <Typography noWrap variant="body2" color="text.secondary" >
                        {coursesDetail}

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button sx={{ borderRadius: 5 }} size="small" variant='outlined' startIcon={<PlaylistAddIcon />} color="primary">
                    บันทึก
                </Button>
                <Button sx={{ borderRadius: 5 }} size="small" href={`/courses/${coursesId}`} variant='outlined' startIcon={<SendIcon />} color="success">
                    เข้าเรียน
                </Button>
            </CardActions>
        </Card>
    );
}
