import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ShowToast = () => {
    ToastContainer.show({
      type: 'error',
      position:'top',
      topOffset:230,
      text1: 'Hello',
      text1: 'Email or Password is wrong..☹️'
    });
    return(
      <ToastContainer/>
    );
  }

  export default ShowToast;