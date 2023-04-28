import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white', justifyContent: 'center' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://jknowledgetutor.com/">
                Jknowledgetutor
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function StickyFooter() {
    return (

        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[800]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm" sx={{ textAlign: 'center',color: 'white'}}>
                <Typography variant="body1">
                    Jknowledge tutor ติว ติด พิชิตฝัน
                </Typography>
                <Copyright />
            </Container>
        </Box>

    );
}