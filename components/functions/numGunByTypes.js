import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
import gunCounts from "./gunCounts";
import gunKillCounts from "./gunKillCounts";

function numGunByTypes({ dataSet, options }) {
  return vl.hconcat(
    gunCounts({ dataSet, options }),
    gunKillCounts({ dataSet, options })
  );
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

export default numGunByTypes;
