import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
import gunCounts from "./gunCounts";
import gunKillCounts from "./gunKillCounts";

function numGunByTypes({ dataSet, options }) {
  return vl
    .hconcat(
      gunCounts({ dataSet, options }).width(400),
      gunKillCounts({ dataSet, options }).width(400)
    )
    .config({
      mark: { opacity: 0.9 },
      background: "#1f2937",
      axis: {
        tickColor: "white",
        labelColor: "white",
        titleColor: "white",
        gridColor: "white",
        gridOpacity: 0.4,
        domainColor: "white",
      },
      legend: { labelColor: "white", titleColor: "white" },
      scale: { maxSize: 1500 },
      view: { stroke: null },
    });
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
