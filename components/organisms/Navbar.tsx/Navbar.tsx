import Link from 'next/link';
import { Button } from '../../atoms/Button.tsx/Button';
import { Img } from '../../atoms/Image/Image';

export function NavBar() {
  return (
    <header className='static top-0 left-0 w-full'>
      <div className='flex items-center justify-between w-full px-20 py-3 shadow-lg'>
        <Img
          src='/images/dreams-logo.png'
          width={200}
          height={50}
          alt='Dreams Logo'
        />

        <section className='flex w-fit gap-8 text-lg text-gray-700 justify-end h-10'>
          <Link href={'/about-us'} className='hover:text-orange-600'>
            About us
          </Link>
          <Link href={'/contact-us'} className='hover:text-orange-600'>
            Contact us
          </Link>
          <Link href={'/login'} className='hover:text-orange-600'>
            Login
          </Link>
        </section>
      </div>
    </header>
  );
}
