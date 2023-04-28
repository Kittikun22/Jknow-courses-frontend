import React from 'react'
import { useFormContext } from 'react-hook-form'
import { TextField } from '@mui/material';

function StepTwo() {
  const { register } = useFormContext();
  return (
    <>
      <TextField
        {...register('password')}
        id="password"
        type='password'
        label="รหัสผ่าน"
        variant="outlined"
        size='small'
      />
      <TextField
        {...register('confirmPassword')}
        id="confirmPassword"
        type='password'
        label="ยืนยันรหัสผ่าน"
        variant="outlined"
        size='small'
      />
    </>
  )
}

export default StepTwo