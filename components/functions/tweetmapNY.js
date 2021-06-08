import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function map({ dataSet, options }) {
  const { ny, polarNY } = dataSet;

  return vl.layer(
    vl
      .markGeoshape({ fill: "#374151", stroke: "#fff", strokeWidth: 1 })
      .data(vl.topojson(ny).feature("counties")),
    vl
      .markCircle({ stroke: null })
      .data(polarNY)
      .transform(
        vl.filter("datum['latitude'] != '0' && datum['longitude'] != '0'"),
        vl.calculate("datum['n_killed'] + datum['n_injured']").as("num_victims"),
        vl.calculate("datum['comp']").as("sentimentality value")
      )
      .encode(
        vl.latitude().fieldQ("latitude"),
        vl.longitude().fieldQ("longitude"),
        vl
          .color()
          .fieldQ("sentimentality value").title("Sentimentality value")
          .legend({ titleLineHeight: 10 })
          .scale({ scheme: "redblue" }),
        vl
          .size()
          .fieldQ("num_victims")
          .title(["Number of Victims"]),
        vl.tooltip([
          vl.fieldN("city_or_county"),
          vl.fieldQ("sentimentality value"),
          vl.fieldQ("latitude"),
          vl.fieldQ("longitude"),
        ])
      )
  ).project(
    vl.projection()
  );
}

function tweetMap({ dataSet, options }) {
  return vl
    .hconcat(map({ dataSet, options }).height(720).width(1200))
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
      scale: { maxSize: 300 },
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

export default tweetMap;