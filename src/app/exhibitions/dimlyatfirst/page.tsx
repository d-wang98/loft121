import Link from "next/link";
// import blurb_dimlyatfirst from "../src/assets/blurb_dimlyatfirst.txt";

export default function DimlyAtFrist() {
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
      <p>
        Angela Wei’s illustration-inspired canvases are similarly all-over in
        composition. Little cartoon devils plague a blinded female figure in
        Inferno while tendrils of flames, flowers, and hair strands surround her
        flailing body. Wei creates a fantasy world that exists in the liminal
        space between the real and the imaginary; “each narrative depicted is a
        portal to a hallucinatory world of its own internal logic, dimensions,
        and time flow that are simultaneously otherworldly yet rooted in [Wei’s]
        own identity”. At the heart of Wei’s practice, though, is a love for
        storytelling, of both individual and universal experiences. Like dark
        children’s fables, disruptive messages are concealed within seemingly
        innocuous imagery, cuteness serving as a defense mechanism against
        unpleasant realities. Populated with unconventional shapes and elements,
        Nianxin Li’s still lifes are unexpected studies of familial
        relationships. Snail-like creatures simultaneously rely on and guard
        against one another. Each twists and squeezes to carefully maintain
        balance in the group, creating an undercurrent of tension exacerbated by
        the uncommonly vertical canvases. Li’s vibrant use of color further
        delineates the separate creatures, their oversaturated tones contending
        with one another to create multiple visual centers. Rooted in “feelings
        of disconnect toward the traditional familial framework”, Li’s spunky,
        surreal canvases encapsulate the delicate balance of opposites that
        exists in all of our lives. Just as the process of belonging
        metamorphoses dimly at first, so does the process of becoming an artist.
        Most of the women in the show are either current students or recent
        graduates of BFA and MFA programs. All are at the beginning of their
        creative journeys, nurturing brushstroke by brushstroke a visual
        language that is all at once personal, universal, and indelible.
      </p>
    </>
  );
}
