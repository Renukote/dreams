import Link from 'next/link';
import Image from 'next/image';

export function NavBar() {
  return (
    <header className='static top-0 left-0 w-full bg-white'>
      <div className='flex items-center justify-between w-full px-20 py-3'>
        <Image
          src='/images/dreams-logo.png'
          width={200}
          height={50}
          alt='Dreams Logo'
        />

        <section className='flex w-fit gap-16 text-lg text-purple-600 justify-end h-10'>
          <Link
            href={'/about-us'}
            className='transform transition-all hover:text-purple-900 hover:text-2xl '
          >
            About us
          </Link>
          <Link href={'/contact-us'} className='hover:text-purple-900'>
            Contact us
          </Link>
          <Link href={'/login'} className='hover:text-purple-900'>
            Login
          </Link>
        </section>
      </div>
    </header>
  );
}
