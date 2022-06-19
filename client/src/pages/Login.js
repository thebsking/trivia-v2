import React from 'react';
import Input from '../components/Input';
import UserTopBar from '../components/UserTopBar';

function Login() {

  return (
    <>
      <UserTopBar />
      <div id='login-form' className='center-div'>
        <Input label='username' id='user-name' />
        <Input label='password' id='pass-word' />
      </div>
    </>
  )

}

export default Login;