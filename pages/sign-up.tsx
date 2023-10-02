import { SignUpForm } from '../components/organisms/SignUp/SignUp';
import { NavBar } from '../components/organisms/Navbar.tsx/Navbar';

export default function LoginPage() {
  return (
    <>
      <NavBar />

      <div className='w-full flex justify-center my-10'>
        <SignUpForm />
      </div>
    </>
  );
}
