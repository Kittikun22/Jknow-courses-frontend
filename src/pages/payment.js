import React, { useEffect } from 'react'
import CreditPayment from '../components/payment-components/CheckoutCreditCard'
import Appbar from '../components/Appbar'
import Axios from 'axios'


function CheckoutPayment() {
  
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    Axios.post('http://localhost:3001/authsignin', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      }
    })
      .then((res) => {
        if (res.data.status === 'ok') {
          console.log('Valid Token');
        } else {
          alert('Invalid Token!, Please login.')
          localStorage.removeItem('accessToken')
          window.location = '/login'
        }
      })
  }, []);

  return (
    <>
      <Appbar />
      <CreditPayment />
    </>

  )
}

export default CheckoutPayment