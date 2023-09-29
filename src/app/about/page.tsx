import Link from "next/link";

export default function About() {
  return (
    <header className="flex justify-between items-center mb-4">
      <Link className="text-2xl" href="/">
        Loft121
      </Link>
      <Link className="hover:bg-slate-300 rounded" href="/about">
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
  );
}
