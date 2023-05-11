import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggleButton from '../dark-mode-toggle-button';

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link
          href="/"
          className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <Image src="/profile.png" width={40} height={30} alt="profile" />
          <span className="ml-3 text-xl">Lami&apos;s Portfolio</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/projects" className="mr-5 hover:text-gray-900">
            Projects
          </Link>
          <Link
            href="https://www.halamlee.com/"
            className="mr-5 hover:text-gray-900">
            Blog
          </Link>
          <Link
            href="mailto:halam.lee.lami@gmail.com"
            target="_blank"
            className="mr-5 hover:text-gray-900">
            Contact
          </Link>
        </nav>
        <DarkModeToggleButton />
      </div>
    </header>
  );
}
