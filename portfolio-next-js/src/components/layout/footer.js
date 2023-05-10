import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="body-font">
      <div className="">
        <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
          <Link
            href="/"
            className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <span className="ml-3 text-xl">Lami&apos;s Portfolio</span>
          </Link>
          <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
            © 2023 Lami
          </p>
        </div>
      </div>
    </footer>
  );
}
