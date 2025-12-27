import { Full, Narrow, Wide } from "./theme/container";
import { H1, H2, P } from "./theme/text";

export const Typography = () => {
  return (
    <div className="space-y-10 py-12">
      <Narrow>
        <H1>Welcome to our garden</H1>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nihil
          deleniti adipisci optio eveniet officiis voluptatibus iusto. Nobis
          esse cum perferendis culpa nesciunt nemo debitis exercitationem
          aliquam temporibus, tempora voluptas?
        </P>
      </Narrow>
      <Full className="bg-green-300 min-h-56 py-8">
        <H2>This is a full section</H2>
        <P>
          In the gentle art of gardening, one becomes both steward and witness
          to the quiet miracles of nature. With each seed pressed into the dark
          embrace of earth, hope is planted alongside it, nourished by patient
          hands and watchful eyes. Time slows its hurried pace among the rows
          and petals, teaching lessons of resilience and surrender as new life
          unfurls beneath sun and rain. Gardening is a silent poem—rooted in the
          soil yet ever reaching for the light, it reminds us that beauty grows
          not just in blossoms, but in the tender devotion that brings them
          forth.
        </P>
      </Full>
      <Narrow>
        <H2>This is a narrow section</H2>
        <P>
          There&apos;s a vibrant rush that accompanies the first days of
          starting a garden—the crisp scent of fresh soil, the anticipation that
          hums with every seed planted, and the wonder at what will soon take
          root and bloom. Each plot is a blank canvas, full of hope and
          possibility, where imagination mingles with the promise of
          nature&apos;s surprises.
        </P>
        <P>
          The excitement grows with each tiny sprout, forging a connection to
          the rhythms of growth and the joy that comes from nurturing life right
          outside your door.
        </P>
      </Narrow>
      <Wide>
        <H2>This is a wide section</H2>
        <P>
          The heart of a community garden beats with shared joy—a place where
          neighbors become friends, united by the common purpose of tending the
          earth. Together, hands work the soil, laughter and stories mingle on
          the breeze, and the fruits of each harvest are savored as a collective
          triumph. In every row and raised bed, collaboration thrives, nurturing
          both plants and the bonds that tie a community together. It’s a living
          tapestry woven from kindness, care, and the simple delight of growing
          something beautiful side by side.
        </P>
      </Wide>
      <Narrow>
        <P>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          error esse assumenda nesciunt praesentium expedita possimus unde
          fugit, quo rerum atque inventore ullam quod doloribus in cumque
          voluptatem repellat repudiandae.
        </P>
      </Narrow>
    </div>
  );
};
