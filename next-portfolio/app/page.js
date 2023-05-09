import Hero from '@/components/home/hero';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 mx-auto md:flex-row">
        <Hero />
      </div>
    </section>
  );
}
