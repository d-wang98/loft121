import Link from "next/link";

function generateExhibits() {
  let exhibitList = [
    [123, "abc"],
    [123, "abc"],
  ];
  //   return (
  // <>
  //     for (i = 0; i < exhibitList.length(); i ++){
  //       <Link href=>
  //       </Link>
  //     };
  // </>
  //   );
}

export default function Exhibitions() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <Link className="text-2xl" href="/">
          Loft121
        </Link>
        <Link className="underline hover:bg-slate-300 rounded" href="/about">
          About
        </Link>
        <Link className="underline hover:bg-slate-300 rounded" href="/artists">
          Artists
        </Link>
        <Link className="hover:bg-slate-300 rounded" href="/exhibitions">
          Exhibitions
        </Link>
      </header>
      {generateExhibits()}
      <Link
        className="underline hover:bg-slate-300 rounded"
        href="/exhibitions/dimlyatfirst"
      >
        Dimly At First
      </Link>
    </>
  );
}
