import create from "zustand";
import { fromCSV } from "arquero";

const ds = {
  p: "https://us-gun-violence-data.netlify.app/perpetrators.csv",
  g: "https://us-gun-violence-data.netlify.app/guns.csv",
  pst: "https://us-gun-violence-data.netlify.app/perpetrators_by_state.csv",
  stp: "https://us-gun-violence-data.netlify.app/state_pop.csv",
  stf: "https://us-gun-violence-data.netlify.app/state_fips.csv",
  ppst: "https://us-gun-violence-data.netlify.app/perpetrators_by_state.csv",
  gsty: "https://us-gun-violence-data.netlify.app/guns_by_state_year.csv",
  gstm: "https://us-gun-violence-data.netlify.app/guns_by_state_month.csv",
  gdc: "https://us-gun-violence-data.netlify.app/gender_count.csv",
  gdp: "https://us-gun-violence-data.netlify.app/gender_pctg.csv",
  polarWA: "https://us-gun-violence-data.netlify.app/polar_1_7d_WA_pro.csv",
  polarNY: "https://us-gun-violence-data.netlify.app/polar_1_7d_NY_pro.csv",
};

const json = {
  usa: "https://raw.githubusercontent.com/vega/vega-datasets/master/data/us-10m.json",
  wa: "https://us-gun-violence-data.netlify.app/wa.json",
  ny: "https://us-gun-violence-data.netlify.app/ny.json",
};

const useStore = create((set, get) => ({
  dataset: {},
  loadDataSet: (name) => {
    fetch(ds[name])
      .then((r) => r.text())
      .then((inp) => {
        const oldDataset = get().dataset;
        inp = fromCSV(inp);
        set({ dataset: { ...oldDataset, [name]: inp } });
      });
  },
  loadDataSets: (names) => {
    for (let name of names) {
      get().loadDataSet(name);
    }
  },
  loadjson: (name) => {
    fetch(json[name])
      .then((r) => r.json())
      .then((js) => {
        const oldDataset = get().dataset;
        set({ dataset: { ...oldDataset, [name]: js } });
      });
  },
}));

export default useStore;
