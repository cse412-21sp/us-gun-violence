import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
import stateRanking from "./stateRanking";
import perpetratorsByState from "./perpetratorsByState";

function map({ dataSet, options }) {
  return vl
    .hconcat(
      stateRanking({ dataSet, options }).height(500),
      perpetratorsByState({ dataSet, options }).height(500).width(720)
    )
    .config({ scale: { maxSize: 1500 }, view: { stroke: null } });
}

const vegaOptions = {
  config: {
    // Vega-Lite default configuration
  },
  init: (view) => {
    // initialize tooltip handler
    view.tooltip(new vegaTooltip.Handler().call);
  },
  view: {
    renderer: "canvas",
  },
};
vl.register(vega, vegaLite, vegaOptions);

export default map;
