import React from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField, Button,Box } from '@mui/material';

const StepOne = () => {
  const { register } = useFormContext();

  return (
    <>
      <Box>
        <TextField
          {...register('phone')}
          id="phone"
          label="เบอร์โทรศัพท์"
          variant="outlined"
          size='small'
        />
        <Button sx={{ml:1}} variant="outlined">ส่งรหัส OTP</Button>
      </Box>
      
      <TextField
        {...register('user_otp')}
        id="user_otp"
        label="รหัส OTP"
        variant="outlined"
        size='small'
      />

    </>
  )
}

export default StepOne