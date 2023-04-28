import React from 'react'
import Appbar from '../components/Appbar'
import RegisterStep from '../components/register_components/RegisterStep'
import { useForm, FormProvider } from 'react-hook-form'

function Register() {
    const methods = useForm();
    return (
        <>
            <Appbar />
            <FormProvider {...methods}>
                <RegisterStep method={methods} />
            </FormProvider>
        </>
    )
}

export default Register