import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Axios from 'axios';


const steps = ['OTP', 'สร้างบัญชีผู้ใช้', 'ข้อมูลผู้ใช้'];

const RegisterStep = (props) => {
    const { method } = props;

    const [activeStep, setActiveStep] = React.useState(0);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleOnSubmit = (data) => {
        if (activeStep === 0) {
            handleNext()
        }
        if (activeStep === 1) {
            handleNext()
        }
        if (activeStep === 2) {
            console.log(data);
            CreateUser(data);
        }
    }

    const CreateUser = (data) => {
        Axios.post('http://localhost:3001/create-user', {
            phone: data.phone,
            password: data.password,
            fname: data.fname,
            lname: data.lname,
            email: data.email,
            user_role : data.user_role,
            role_id: 6,
            school: data.school,
            province: data.province,
            expectation: data.expectation,
            grade: data.grade,
            parentJob : data.parentJob,
            termCondition: data.termCondition
        }).then((res) => {
            console.log(res);
        })

    }

    function getStepPages(activeStep) {
        switch (activeStep) {
            case 0:
                return <StepOne />
            case 1:
                return <StepTwo />
            case 2:
                return <StepThree />

            default:
        }
    }

    return (
        <>

            <Paper sx={{ m: 5, p: 4, backgroundColor: '#D6E4E550', borderRadius: 10 }} elevation={2}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label, key) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={key} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <React.Fragment>
                    <Box component="form" onSubmit={method.handleSubmit(handleOnSubmit)}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
                            <Stack spacing={2} >
                                {getStepPages(activeStep)}
                            </Stack>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 5, justifyContent: 'space-evenly' }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                variant='outlined'
                                onClick={handleBack}
                            >
                                กลับ
                            </Button>

                            <Button variant="contained" type="submit" startIcon={activeStep === steps.length - 1 ? <SendIcon /> : ''}>
                                {activeStep === steps.length - 1 ? 'สมัครสมาชิก' : 'ต่อไป'}
                            </Button>
                        </Box>
                    </Box>
                </React.Fragment>
            </Paper>
        </>
    )
}

export default RegisterStep