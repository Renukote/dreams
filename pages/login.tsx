import { Button } from '../components/atoms/Button.tsx/Button';
import { LoginForm } from '../components/organisms/Login.tsx/Login';
import { NavBar } from '../components/organisms/Navbar.tsx/Navbar';

export default function LoginPage() {
  return (
    <>
      <NavBar />

      <div className='w-full flex justify-center my-10'>
        <LoginForm />
      </div>
    </>
  );
}
