import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function perpetratorMap({ dataSet, options }) {
  const { wa, polar, usa } = dataSet;
  const titles = {
    mean_age: "Perpetrators mean age",
    underages_ratio: ["Percentage of underage/total", "perpetrators"],
    male_pctg: ["Percentage of ", "male perpetrators"],
    female_pctg: ["Percentage of ", "female perpetrators"],
  };

  return vl
    .layer(
      vl
        .markGeoshape({ fill: "#374151", stroke: "#fff", strokeWidth: 1 })
        .data(vl.topojson(usa).feature("counties")),
      vl
        .markCircle({ stroke: "#white" })
        .data(polar)
        .transform(
          vl.filter("datum['latitude'] != '0' && datum['longitude'] != '0'")
        )
        .encode(
          vl.latitude().fieldQ("latitude"),
          vl.longitude().fieldQ("longitude"),
          vl
            .color()
            .fieldQ("comp")
            .legend({ titleLineHeight: 10 })
            .scale({ scheme: "redblue" }),
          vl
            .size()
            .fieldQ("n_killed")
            .title(["Perpetrators/", "1M population/year"]),
          vl.tooltip([
            vl.fieldN("city_or_county"),
            vl.fieldQ("comp"),
            vl.fieldQ("latitude"),
            vl.fieldQ("longitude"),
          ])
        )
    )
    .project(vl.projection("albersUSA"));
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
      scale: { maxSize: 50 },
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
