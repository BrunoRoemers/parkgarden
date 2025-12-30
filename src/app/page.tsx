import imgKoppenCfb from "@/assets/2025-12-30-koppen-cfb.png";
import { Narrow, Wide } from "@/components/theme/container";
import { Image } from "@/components/theme/image";
import { H1, H2, Lead, P } from "@/components/theme/text";

export default function Page() {
  return (
    <div className="py-12 space-y-10">
      <section>
        <Narrow>
          <H1>Parkgarden</H1>
          <Lead>
            Let&apos;s raise a community garden on the Parklane site, where
            neighbors can grow vegetables, herbs, fruits and flowers together.
          </Lead>
        </Narrow>
      </section>
      <section>
        <Narrow>
          <H2>Dec 30, 2025</H2>
          <P>
            The site is in the <b>Cfb</b> zone of the Köppen climate
            classification. It&apos;s a temperate oceanic climate with warm
            summers and no dry season.
          </P>
        </Narrow>
        <Wide>
          <Image
            src={imgKoppenCfb}
            alt="Cfb zone of the Köppen climate classification"
            sourceUrl="https://commons.wikimedia.org/wiki/File:Koppen-Geiger_Map_v2_Cfb_1991%E2%80%932020.svg"
          />
        </Wide>
      </section>
      <section>
        <Narrow>
          <H2>Dec 27, 2025</H2>
          <P>We&apos;re live!</P>
        </Narrow>
      </section>
    </div>
  );
}
