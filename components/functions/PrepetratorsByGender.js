import * as vega from "vega";
import * as vl from "vega-lite-api";
import * as vegaLite from "vega-lite";
import * as vegaTooltip from "vega-tooltip";

function perpetratorsByGender({ dataSet, options }) {
  const { gdc, gdp } = dataSet;
  const brush = vl
    .selectInterval() // Brush is a better (vivid?) name than selection in this case!
    .encodings("x"); // limit selection to x-axis (year) values

  const x = vl.x().yearmonth("date");

  return vl
    .hconcat(
      vl
        .markArea()
        .data(gdc)
        .encode(
          x,
          vl.y().fieldQ("count").title("Number of perpetrators"),
          vl.color().fieldN("gender").scale({ scheme: "set1" })
        )
        .params(brush)
        .width(450)
        .height(360),
      vl
        .markArea()
        .data(gdp)
        .encode(
          x,
          vl.y().fieldQ("pctg").title("Percentage of perpetrators"),
          vl.color().fieldN("gender").scale({ scheme: "set1" })
        )
        .encode(x.scale({ domain: brush }))
        .width(450)
        .height(360)
    )
    .config({
      mark: { opacity: 0.7 },
      background: "#1f2937",
      axis: {
        titleFontSize: 13,
        tickColor: "white",
        labelColor: "white",
        titleColor: "white",
        gridColor: "white",
        gridOpacity: 0.6,
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

export default perpetratorsByGender;
