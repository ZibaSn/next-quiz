import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-1/2 m-auto p-24">
      <h1 className="text-4xl font-bold text-teal-900">
        Welcome To Language Test App
      </h1>
      <ul className='text-center block w-full'>
        <li className="text-2xl font-bold text-violet-900 p-4 hover:bg-sky-200">
          <Link href="/english-test">English Text</Link>
        </li>
        <li className="text-2xl font-bold text-violet-900 p-4 hover:bg-sky-200">
          <Link href="/math-test">Math Text</Link>
        </li>
        <li className="text-2xl font-bold text-violet-900 p-4 hover:bg-sky-200">
          <Link href="/not-valid">Physics Text</Link>
        </li>
        <li className="text-2xl font-bold text-violet-900 p-4 hover:bg-sky-200">
          <Link href="/not-valid">Chemistry Text</Link>
        </li>
      </ul>
    </main>
  );
}
