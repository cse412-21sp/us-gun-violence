// import { WindMillLoading } from "react-loadingg";
import tw from "twin.macro";
import useStore from "../store/index";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { CoffeeLoading } from "react-loadingg";

const Vis = dynamic(() => import("../components/Vis"));

const Home = () => {
  let dataset = useStore((store) => store.dataset);
  let loadDataSet = useStore((state) => state.loadDataSet);
  let loadjson = useStore((store) => store.loadjson);
  console.log(dataset);
  useEffect(() => {
    loadDataSet("p");
    loadDataSet("pst");
    loadDataSet("stf");
    loadDataSet("stp");
    loadDataSet("gsty");
    loadDataSet("gstm");
    loadDataSet("gdc");
    loadDataSet("gdp");
    loadDataSet("polarWA");
    loadDataSet("polarNY");
    loadjson("wa");
    loadjson("ny");
    loadjson("usa");
  }, []);
  if (
    dataset.p &&
    dataset.usa &&
    dataset.pst &&
    dataset.stf &&
    dataset.stp &&
    dataset.gdc &&
    dataset.gdp &&
    dataset.gsty &&
    dataset.gstm &&
    dataset.polarWA &&
    dataset.polarNY &&
    dataset.wa &&
    dataset.ny
  ) {
    return <Vis />;
  }
  return (
    <main tw={"w-screen h-screen flex flex-col items-center justify-center"}>
      <section>
        <CoffeeLoading size="large" />
      </section>
      <section tw={"pt-64"}>
        <h1 tw={"text-2xl font-sans"}>We are brewing site</h1>
      </section>
    </main>
  );
};
export default Home;
