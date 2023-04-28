import React from "react";
import Script from 'react-load-script';
import Button from '@mui/material/Button';
import Axios from 'axios';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


let OmiseCard
export default function CreditCard({amount,payerName,payerEmail }) {
    
    const handleLoadScript = () => {
        OmiseCard = window.OmiseCard
        OmiseCard.configure({
            publicKey: 'pkey_test_5tcziynopmane75t7s2',
            currency: 'THB',
            image: 'https://beta.jknowledgetutor.com/wp-content/uploads/2022/08/3A849E42-8E5B-41B4-BF89-A21622E3FF87.jpeg',
            frameLabel: 'Kittikun Corp.',
            submitLabel: 'PAY NOW',
            buttonLabel: 'Pay with Omise'
        });
    }

    const creditCardConfigure = () => {
        OmiseCard.configure({
            defaultPaymentMethod: 'credit_card',
            otherPaymentMethods: ['internet_banking', 'bill_payment_tesco_lotus', 'rabbit_linepay', 'truemoney']
        });
        OmiseCard.configureButton("#credit-card");
        OmiseCard.attach();
    }

    const omiseCardHandler = () => {
        OmiseCard.open({
            amount: amount*100,
            onCreateTokenSuccess: (token) => {
                Axios.post('http://localhost:3001/checkout-credit-card', {
                    email: payerEmail,
                    name: payerName,
                    amount: amount*100,
                    token: token,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((res) => {
                    console.log(res.data);

                })
            },
            onFormClosed: () => {

            },
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        creditCardConfigure();
        omiseCardHandler();
    }


    return (
        <>
            <Stack sx={{ textAlign: 'center', p: 5 }} >
                <Box>
                    <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
                </Box>
                <Box component='form'>
                    <Button variant="contained" id="credit-card" type="button" onClick={handleClick}>ชำระเงิน</Button>
                </Box>
            </Stack>
        </>
    )
}
