import { WindMillLoading } from "react-loadingg";
import tw from "twin.macro";
import useStore from "../store/index";
import { useEffect } from "react";
import VegaComp from "../components/VegaComp";
import perpetratorsByGender from "../components/PrepetratorsByGender";

const Home = () => {
  let dataset = useStore((store) => store.dataset);
  let loadDataSet = useStore((state) => state.loadDataSet);
  console.log(dataset);
  useEffect(() => {
    loadDataSet("p");
  }, []);
  if (dataset.p) {
    return (
      <main>
        <section>
          <VegaComp func={perpetratorsByGender} name="perpetratorsByGender" />
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
