import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Loft121</h1>
        <Link className="underline hover:bg-slate-300 rounded" href="/about">
          About
        </Link>
        <Link className="underline hover:bg-slate-300 rounded" href="/artists">
          Artists
        </Link>
        <Link
          className="underline hover:bg-slate-300 rounded"
          href="/exhibitions"
        >
          Exhibitions
        </Link>
      </header>
      <p></p>
    </>
  );
}
