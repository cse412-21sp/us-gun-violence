import perpetratorsByGender from "../components/functions/PrepetratorsByGender";
import mapMeanAgeOfPerpetrators from "../components/functions/mapMeanAgeOfPerpetrators";
import VegaComp from "../components/VegaComp";

const Vis = () => {
  return (
    <main>
      <section>
        <VegaComp func={perpetratorsByGender} name="perpetratorsByGender" />
      </section>
      <section>
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
      </section>
    </main>
  );
};
export default Vis;
