import perpetratorsByGender from "../components/functions/PrepetratorsByGender";
import mapMeanAgeOfPerpetrators from "../components/functions/mapMeanAgeOfPerpetrators";
import ageHistogram from "../components/functions/ageHistogram";
import gunArea from "../components/functions/gunArea";
import numGunByTypes from "./functions/numGunByTypes";
import perpetratorsByTime from "./functions/perpetratorsByTime";
import mapunderageAndTotalPerpetrators from "./functions/mapunderageAndTotalPerpetrators";
import VegaComp from "../components/VegaComp";
import tw, { styled } from "twin.macro";

const Section = styled.section(({ variant, isSmall }) => []);

const Vis = () => {
  return (
    <main tw="flex flex-col justify-center items-center">
      <Section>
        <VegaComp func={perpetratorsByGender} name="perpetratorsByGender" />
      </Section>
      <Section>
        <VegaComp
          func={ageHistogram}
          options={{
            yearStart: 2013,
            yearEnd: 2018,
            color: "teal",
          }}
          name="ageHistogram"
        />
      </Section>
      <Section>
        <VegaComp func={gunArea} name="gunArea" />
      </Section>
      <Section>
        <VegaComp
          func={numGunByTypes}
          name="numGunByTypes"
          options={{
            yearStart: 2013,
            yearEnd: 2018,
          }}
        />
      </Section>
      <Section>
        <VegaComp
          func={mapMeanAgeOfPerpetrators}
          name="mapMeanAgeOfPerpetrators"
          options={{
            field: "mean_age",
            yearStart: 2013,
            yearEnd: 2018,
            schema: "goldred",
          }}
        />
      </Section>
      <Section>
        <VegaComp
          func={perpetratorsByTime}
          options={{ field: "mean_age", state_abbr: "WA", color: "red" }}
          name="perpetratorsByTime"
        />
      </Section>
      {/* <Section>
        <VegaComp
          func={mapunderageAndTotalPerpetrators}
          name="mapunderageAndTotalPerpetrators"
          options={{
            field: "underages_ratio",
            yearStart: 2013,
            yaerEnd: 2018,
            scheme: "yellowgreenblue",
          }}
        />
      </Section> */}
      <Section>
        <VegaComp
          func={perpetratorsByTime}
          name="perpetratorsByTime"
          options={{ field: "underages_ratio", state_abbr: "WA", color: "red" }}
        />
      </Section>
    </main>
  );
};
export default Vis;
