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
    // loadDataSet("ppst");
    loadDataSet("pst");
    loadDataSet("stf");
    loadDataSet("stp");
    // loadDataSet("g");
    loadDataSet("gsty");
    loadDataSet("gstm");
    loadjson("usa");
  }, []);
  if (
    dataset.p &&
    dataset.usa &&
    dataset.pst &&
    // dataset.g &&
    // dataset.ppst &&
    dataset.stf &&
    dataset.stp &&
    dataset.gsty &&
    dataset.gstm
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
