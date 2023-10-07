import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-[100vh] items-center justify-center">
      <section className="text-center">
        <h2 className="my-2 text-lg font-extrabold">Not Found</h2>
        <p className="my-5">Could not find requested resource</p>
        <Link
          className="rounded-lg border-2 border-white bg-green-800 p-3 text-white hover:border-yellow-500 hover:bg-green-700"
          href="/"
        >
          Return Home
        </Link>
      </section>
    </main>
  );
}
