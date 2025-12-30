import { Narrow } from "@/components/theme/container";
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
          <P>TODO</P>
        </Narrow>
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
