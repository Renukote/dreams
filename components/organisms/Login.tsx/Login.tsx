import { useState } from 'react';
import { Button } from '../../atoms/Button.tsx/Button';
import { Input } from '../../atoms/Input/Input';

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('submit');
    console.log({ formData });
  };

  const handleFormDataChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className='p-4 bg-blue-100 rounded-lg border border-gray-200 w-fit'>
      <Input
        label='Email'
        placeholder='Please enter your email'
        className='w-80'
        type='email'
        handleChangeCallback={handleFormDataChange}
        name='email'
      />
      <Input
        label='Password'
        placeholder='Please enter your password'
        className='w-80'
        type='password'
        name='password'
        handleChangeCallback={handleFormDataChange}
      />
      <Button type='submit' onClick={handleSubmit} className='w-full'>
        Login
      </Button>
    </form>
  );
}
