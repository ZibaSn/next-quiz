import Link from "next/link";

const Page = () => {
  return (
    <div
      className="bg-violet-950 flex items-center justify-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="container mx-auto bg-slate-600 px-20 py-10 w-1/2 bg-violet-500">
        <h1>Sorry! This test is not available yet.</h1>
        <Link href="/">return to home</Link>
      </div>
    </div>
  );
};

export default Page;
