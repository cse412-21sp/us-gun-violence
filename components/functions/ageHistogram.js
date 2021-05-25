import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
import { op } from "arquero";

function ageHistogram({ dataSet, options }) {
  const { p } = dataSet;
  const { yearStart, yearEnd, color } = options;
  return vl
    .markBar({ opacity: 0.5 })
    .data(p)
    .transform(
      vl.filter(
        'datum["year"] >= ' + yearStart + ' && datum["year"] <= ' + yearEnd
      )
    )
    .encode(
      vl
        .x()
        .fieldQ("age")
        .scale({ domain: [0, 100] })
        .bin({ step: 5 }),
      vl.y().count().title("Number of Perpetrators"),
      vl.color().value(color)
    )
    .width(720)
    .height(360)
    .config({
      mark: { opacity: 0.9 },
      background: "#3e3e3e",
      axis: {
        tickColor: "white",
        labelColor: "white",
        titleColor: "white",
        gridColor: "white",
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

export default ageHistogram;
