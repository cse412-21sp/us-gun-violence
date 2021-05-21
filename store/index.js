import create from "zustand";
import { fromCSV } from "arquero";

const ds = {
  p: "https://raw.githubusercontent.com/cse412-21sp/us-gun-violence/main/data/perpetrators.csv",
  g: "https://raw.githubusercontent.com/cse412-21sp/us-gun-violence/main/data/guns.csv",
  pst: "https://raw.githubusercontent.com/cse412-21sp/us-gun-violence/main/data/perpetrators_by_state.csv",
  stp: "https://raw.githubusercontent.com/cse412-21sp/us-gun-violence/main/data/state_pop.csv",
  stf: "https://raw.githubusercontent.com/cse412-21sp/us-gun-violence/main/data/state_fips.csv",
  ppst: "https://raw.githubusercontent.com/cse412-21sp/us-gun-violence/main/data/perpetrators_by_state.csv",
};

const json = {
  usa: "https://raw.githubusercontent.com/vega/vega-datasets/master/data/us-10m.json",
};

const useStore = create((set, get) => ({
  dataset: {},
  loadDataSet: async (name) => {
    const oldDataset = get().dataset;
    const inp = fromCSV(await (await fetch(ds[name])).text());
    set({ dataset: { ...oldDataset, [name]: inp } });
  },
  loadjson: async (name) => {
    const oldDataset = get().dataset;
    const js = await (await fetch(json[name])).text();
    set({ dataset: { ...oldDataset, [name]: js } });
  },
}));

export default useStore;
