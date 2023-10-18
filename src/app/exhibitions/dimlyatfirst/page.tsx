import Link from "next/link";
// import blurb_dimlyatfirst from "../src/assets/blurb_dimlyatfirst.txt";

export default async function DimlyAtFrist() {
  const artworks = getData();

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
      <ul>
        {/* {artworks.map((artwork) => {
          return (
            <li key={artwork.id}>
              {artwork.name}
              <Link href={artwork.link}>Learn More</Link>
            </li>
          );
        })} */}
        <p>
          Loft 121 is pleased to present dimly at first, an exhibition featuring
          artists Rosa Chang, Alice Jiang, Xingzi Gu, Jess Xiaoyi Han, Nianxin
          Li, Tiantian Ma, Miwa Neishi, Jia Sung, Angela Wei, Tianshu Zhang, and
          Yiting Zhao. The exhibition takes the excerpt “dimly at first” from
          Theresa Hak Kyung Cha’s seminal feminist text Dictée as its title and
          starting point. As an expression, “dimly at first” implies emergence,
          coming into being, and the process of becoming. Dictée is not a
          typical novel – it is part poetry, part memoir, part photography, part
          history. It conveys through fragments and experimental imagery Cha’s
          immigrant journey from South Korea to the Bay Area, and her fractured
          experiences of language, womanhood, ancestry, violence, and identity.
          “Dimly at first” comes from a chapter titled “Elitere”, a non-word
          possibly derived from “literature”, “la terre”, or “elle itère”,
          meaning “she repeats” in French. The prose and poems in this chapter
          reflect the unsteady, fitful reality of speaking aloud an unfamiliar
          language. “Dimly”, she writes, “dimly at first / then increase a
          little more / volume then a little more / take it take it no further /
          shut it / off.” Cha’s broken syntax is an imperative yet daunting
          endeavor to speak, to express, to have agency, and ultimately, to
          belong. The voice may be dim, but it is only at first. It is always
          seeking to grow, to fill spaces, to have resonance. Like Cha, the
          artists in the exhibition are female and belong to the Asian diaspora.
          Though of a younger generation, they too must navigate daily the murky
          waters of self, identity, and belonging in their adopted,
          often-troubled home of America. Through visual languages as diverse as
          their literary counterparts in Cha’s Dictée, the women in this
          exhibition unravel personal histories and challenge predominant
          narratives with strength and grace. Their voices are vulnerable but
          not timid, fragile but not weak, dim but only at first. Brooklyn-based
          artist Jia Sung presents an excerpt of three works on paper from her
          series Chaos, Whims, Lust, which was exhibited at the Knockdown Center
          in the fall of 2019. Drawing from the classical Chinese tale Journey
          to the West, Sung imbues the male trickster figure of the Monkey King
          with a subversive, feminine energy. The canonized tale of masculine
          adventure is reimagined as a narrative of self-discovery, womanhood,
          resistance, and love. The Monkey “Queen” is Sung’s alter-ego – she
          poses uniformed for a schoolgirl picture, examines the intricacies of
          her female body, and sometimes, when the rabbit moon is particularly
          bright, feels trapped under a tall, tall mountain. New York-based
          sculptor Miwa Neishi crafts elegant, textured ceramic vases inspired
          by the Japanese hiragana alphabet, which was developed in the 5th
          century from ancient Chinese calligraphy. Hiragana’s simplicity was
          intended for use by women, whose lack of access to education prevented
          them from writing kanji, the script primarily used by men. Meditative
          in nature, organic in shape, and quietly, irresistibly beautiful,
          Neishi’s hand-formed vessels displace this historical imbalance,
          imbuing the hiragana alphabet with a sense of strength and agency.
          Multimedia artist Rosa Chang immigrated from Seoul at a young age. Her
          lush, dreamlike canvases depict fragmentary memories of her childhood
          – nostalgic recollections awash with an undercurrent of tension. In
          Seoul Soup, she and her sister mimic reeds in a pond, their surreally
          elongated limbs stretching downward like roots searching for soil. For
          Yiting Zhao, quiet interiors and landscapes reflect complex
          psychologies. The miniature scale of her canvases instills each with a
          sense of secrecy and suggestion. Zhao often paints in low light, both
          inside her studio and outside at dusk, a practice most evidently
          reflected in her Nocturnes. Chinatown Delivery Man is the only work in
          the series to feature a figure. Cropped at an almost uncomfortable
          angle, the man’s identity is obscured. Despite his anonymity, however,
          he is recognizable and familiar, a mainstay of Chinatown that we
          acknowledge warmly. For other artists, conceptualizing identity and
          reconciling with multiplicity are aims best pursued through
          abstraction. Jess Xiaoyi Han, who grew up between New York and
          Shanghai, creates flowing, dynamic landscapes that reflect her inner
          emotions and psychology, often as direct references to specific
          moments and experiences. Though her color palette is soft, her brand
          of abstraction is vibrant and expressionistic, controlled by her
          meticulous brushwork. Each painting is centered with a luminous orb,
          which Han considers to be a representation of her soul. Replete with
          dark washes of greens and blues, Xingzi Gu’s canvases are minimally
          populated with thinly drawn symbols – an open eye, a set of hands, a
          hanging belt. With breathy brushstrokes and watery colors, Gu hints at
          relationships dissolving, memories disappearing, and places in
          transition. The five-pointed star is an emblem of the Chinese
          Communist Party, for whom the shape represents unity. In Gu’s
          painting, though, a disembodied hand grips each point of the star,
          pulling the string taut to create a perfect shape. There is an
          underlying tension to the composition; if one hand lets go, the star
          is destroyed. Gu recalls her childhood memories of social and economic
          instability and cites that difficult period as one that informed her
          understanding of change, impermanence, love, and community. Mystery
          and distance also play crucial roles in Tianshu Zhang’s mystical,
          celestial paintings. Zhang cites her nomadic childhood as the reason
          for her sensitivity to emotions and her impulse to lament the fleeting
          beauty of life. Each painting features amorphous figures fusing into
          the extraterrestrial background, fluctuating in the liminal space
          between coming into existence and fading out of it. Tinged with
          melancholy, Zhang’s ethereal canvases ask us why we feel lonely even
          though we live as social creatures and how we can become ourselves and
          feel completeness as human beings. Inspired by the Transcendentalist
          philosophy that sees divinity in nature, Tiantian Ma’s works are a
          meditation of the universal spirit that animates all creation. In
          Manhattan, the city itself is an organic creature, lustrous and
          pulsing. The sea invites us in with its crooked, tidal fingers. Flower
          petals grow legs adorned with ballet flats. In Ma’s dreamworld, the
          human folds into the natural, and is nourished by it. Born in Beijing
          but educated within Western institutions, Alice Jiang often finds
          herself conflicted and grappling between intertwining, sometimes
          opposing, cultural influences. She cites her displacement, inability
          to fully relate to either culture, and search for belonging as the
          creative fuel for her multi-dimensional works. Layered and fragmented,
          Jiang’s elaborate compositions are neo-Cubist studies of female
          figures whose distorted faces, features, and limbs fill the canvases.
          The figures’ entanglement reflects Jiang’s own confusion,
          dissociation, and emotional division within and across her
          communities. Angela Wei’s illustration-inspired canvases are similarly
          all-over in composition. Little cartoon devils plague a blinded female
          figure in Inferno while tendrils of flames, flowers, and hair strands
          surround her flailing body. Wei creates a fantasy world that exists in
          the liminal space between the real and the imaginary; “each narrative
          depicted is a portal to a hallucinatory world of its own internal
          logic, dimensions, and time flow that are simultaneously otherworldly
          yet rooted in [Wei’s] own identity”. At the heart of Wei’s practice,
          though, is a love for storytelling, of both individual and universal
          experiences. Like dark children’s fables, disruptive messages are
          concealed within seemingly innocuous imagery, cuteness serving as a
          defense mechanism against unpleasant realities. Populated with
          unconventional shapes and elements, Nianxin Li’s still lifes are
          unexpected studies of familial relationships. Snail-like creatures
          simultaneously rely on and guard against one another. Each twists and
          squeezes to carefully maintain balance in the group, creating an
          undercurrent of tension exacerbated by the uncommonly vertical
          canvases. Li’s vibrant use of color further delineates the separate
          creatures, their oversaturated tones contending with one another to
          create multiple visual centers. Rooted in “feelings of disconnect
          toward the traditional familial framework”, Li’s spunky, surreal
          canvases encapsulate the delicate balance of opposites that exists in
          all of our lives. Just as the process of belonging metamorphoses dimly
          at first, so does the process of becoming an artist. Most of the women
          in the show are either current students or recent graduates of BFA and
          MFA programs. All are at the beginning of their creative journeys,
          nurturing brushstroke by brushstroke a visual language that is all at
          once personal, universal, and indelible.
        </p>
      </ul>
    </>
  );
}

async function getData() {
  const artworks = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters/avatar"
  ).then((r) => r.json());
  console.log(artworks);
  if (!artworks.ok) {
    throw new Error("Failed to fetch data");
  }
  return {
    props: {
      artworks,
    },
  };
}
