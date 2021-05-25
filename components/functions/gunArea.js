import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function gunArea({ dataSet, options }) {
  const { gstm } = dataSet;

  return vl
    .markArea({ opacity: 0.8 })
    .data(gstm)
    .encode(
      vl.x().yearmonth("date"),
      vl.y().sum("count_guns").title("Number of guns"),
      vl
        .color()
        .fieldN("gun")
        .scale({ scheme: "category20b" })
        .title("Gun type")
    )
    .width(720)
    .height(400)
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

export default gunArea;
