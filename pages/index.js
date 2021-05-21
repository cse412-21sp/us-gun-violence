import { WindMillLoading } from "react-loadingg";
import tw from "twin.macro";
import useStore from "../store/index";
import { useEffect } from "react";
import VegaComp from "../components/VegaComp";
import perpetratorsByGender from "../components/functions/PrepetratorsByGender";
import mapMeanAgeOfPerpetrators from "../components/functions/mapMeanAgeOfPerpetrators";

const Home = () => {
  let dataset = useStore((store) => store.dataset);
  let loadDataSet = useStore((state) => state.loadDataSet);
  let loadjson = useStore((store) => store.loadjson);
  console.log(dataset);
  useEffect(() => {
    loadDataSet("p");
    loadDataSet("ppst");
    loadjson("usa");
  }, []);
  if (dataset.p && dataset.usa && dataset.ppst) {
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
  }
  return (
    <main tw={"w-screen h-screen flex flex-col items-center justify-center"}>
      <section>
        <WindMillLoading size="large" />
      </section>
      <section tw={"pt-64"}>
        <h1 tw={"text-2xl font-sans"}>We are loading necessary files</h1>
      </section>
    </main>
  );
};
export default Home;
