import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { TextField } from '../../atoms/TextField/TextField';
import { signUpUser } from '../../../dataLayer/signUp';

export function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signUpUser(formData)
      .then((res) => {
        console.log(res);
        setStatus('SUCCESS');
      })
      .catch((error: any) => console.warn(error));
  };

  const handleFormDataChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      className='p-8 px-16 bg-white rounded-lg rounded-br-none rounded-tl-none flex flex-col gap-4 shadow-lg w-[400px]'
      onSubmit={handleSubmit}
    >
      <TextField
        label='Enter your name'
        type='text'
        onChange={handleFormDataChange}
        name='name'
        value={formData.name}
      />
      <TextField
        label='Enter your email'
        type='email'
        onChange={handleFormDataChange}
        name='email'
        value={formData.email}
      />
      <TextField
        label='Password'
        type='password'
        name='password'
        onChange={handleFormDataChange}
        value={formData.password}
      />
      <Button type='submit' variant='primary' onClick={handleSubmit}>
        Login
      </Button>
    </form>
  );
}
