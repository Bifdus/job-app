import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [user, setUser] = useState(initialState);

  const toggleMember = () => {
    setUser({ ...user, isMember: !user.isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{!user.isMember ? 'Login' : 'Register'}</h3>
        {user.showAlert && <Alert />}
        {/* name input */}
        {!user.isMember && (
          <FormRow
            type='text'
            name='name'
            value={user.name}
            handleChange={handleChange}
            labelText='Name'
          />
        )}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={user.email}
          handleChange={handleChange}
          labelText='Email'
        />
        <FormRow
          type='password'
          name='password'
          value={user.password}
          handleChange={handleChange}
          labelText='Password'
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>

        <p>
          {user.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {user.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
