import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";
import { op } from "arquero";

function ageHistogram({ dataSet, options }) {
  const { p } = dataSet;
  const { yearStart, yearEnd, color } = options;
  return vl
    .markBar()
    .data(p)
    .transform(
      vl.filter(
        'datum["year"] >= ' + yearStart + ' && datum["year"] <= ' + yearEnd + ' && datum["age"] <= 100'
      )
    )
    .encode(
      vl
        .x()
        .fieldQ("age")
        .scale({ domain: [0, 100] })
        .bin({ step: 5 })
        .title("Age"),
      vl.y().count().title("Number of Perpetrators"),
      vl.color().value(color)
    )
    .width(480)
    .height(480)
    .config({
      mark: { opacity: 0.8 },
      background: "#1f2937",
      axis: {
        titleFontSize: 13,
        tickColor: "white",
        labelColor: "white",
        titleColor: "white",
        gridOpacity: 0.6,
        gridColor: "white",
        domainColor: "white",
      },
      legend: {
        titleFontSize: 16,
        labelFontSize: 14,
        labelColor: "white",
        titleColor: "white",
      },
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
