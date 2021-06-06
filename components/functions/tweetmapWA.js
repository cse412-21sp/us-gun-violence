import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function perpetratorMap({ dataSet, options }) {
  const { wa, pst } = dataSet;
  const titles = {
    mean_age: "Perpetrators mean age",
    underages_ratio: ["Percentage of underage/total", "perpetrators"],
    male_pctg: ["Percentage of ", "male perpetrators"],
    female_pctg: ["Percentage of ", "female perpetrators"],
  };

  const schemes = {
    mean_age: "goldred",
    underages_ratio: "yellowgreenblue",
    male_pctg: "tealblues",
    female_pctg: "redpurple",
  };

  return vl
    .data(pst)
    .layer(
      vl
        .markGeoshape({ fill: "#374151", stroke: "#fff", strokeWidth: 1 })
        .data(vl.topojson(wa).feature("counties"))
    )
    .project(vl.projection("albersUsa"));
}

function perpetratorMapFull({ dataSet, options }) {
  return vl
    .hconcat(perpetratorMap({ dataSet, options }).height(500).width(720))
    .config({
      mark: { opacity: 0.9 },
      background: "#1f2937",
      axis: {
        titleFontSize: 16,
        tickColor: "white",
        labelColor: "white",
        titleColor: "white",
        gridColor: "white",
        domainColor: "white",
      },
      legend: {
        titleFontSize: 14,
        labelFontSize: 12,
        labelColor: "white",
        titleColor: "white",
        symbolFillColor: "#6b7280",
        symbolStrokeColor: "white",
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

export default perpetratorMapFull;
